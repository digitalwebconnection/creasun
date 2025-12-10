"use client"

import React, { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, ArrowRight, Zap, CheckCircle } from "lucide-react"
import bgImage from "../../assets/contact_bg_1.png"

export default function CreasunContact(): React.JSX.Element {
    const BRAND = {
        deepBlue: "#0A2E9E",
        skyBlue: "#2E7AE3",
        sunYellow: "#F5B835",
        lightTint: "#B1D5FA",
        darkNavy: "#031E6C",
        textGrayish: "#727FCB",
    }

    // form state
    const [form, setForm] = useState({
        first: "",
        email: "",
        phone: "",
        message: "",
        location: "", // will accept address or "lat,lng"
    })
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    const [sum, setSum] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [focused, setFocused] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    // bill fields (typed)
    const [billAmount, setBillAmount] = useState<string>("")
    const [billUnit, setBillUnit] = useState<"INR" | "kWh">("INR")
    const [billFile, setBillFile] = useState<File | null>(null)
    const [billPreviewUrl, setBillPreviewUrl] = useState<string | null>(null)

    // initial map address (matches the office shown in the UI)
    const initialMapQuery =
        "Office No.3, 3rd Floor, Navsarjan Municipal Shopping Center, Movdi Main Road, Rajkot 360004, India"
    const [, setMapSrc] = useState<string>(
        `https://www.google.com/maps?q=${encodeURIComponent(initialMapQuery)}&z=15&output=embed`
    )

    const locDebounceRef = useRef<number | null>(null)

    // generate simple captcha on mount
    useEffect(() => {
        regenerateCaptcha()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function regenerateCaptcha() {
        const x = Math.floor(Math.random() * 8) + 1
        const y = Math.floor(Math.random() * 8) + 1
        setA(x)
        setB(y)
        setSum("")
    }

    // generic change handler for inputs / textarea / select
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target
        setForm((s) => ({ ...s, [name]: value }))
    }

    // debounce map update when user types location
    useEffect(() => {
        if (locDebounceRef.current) {
            window.clearTimeout(locDebounceRef.current)
        }
        locDebounceRef.current = window.setTimeout(() => {
            if (form.location && String(form.location).trim().length > 2) {
                updateMapForLocation(form.location)
            }
        }, 700)
        return () => {
            if (locDebounceRef.current) window.clearTimeout(locDebounceRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form.location])

    // accept address or "lat,lng"
    function updateMapForLocation(query: string | number) {
        if (query === undefined || query === null) return
        const qStr = String(query).trim()
        const latlngMatch = qStr.match(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/)
        if (latlngMatch) {
            const lat = latlngMatch[1]
            const lng = latlngMatch[3]
            setMapSrc(`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`)
        } else {
            setMapSrc(`https://www.google.com/maps?q=${encodeURIComponent(qStr)}&z=15&output=embed`)
        }
    }

    // geolocation helper to fill location as lat,lng
    function useMyLocation() {
        if (!navigator.geolocation) {
            setStatus("Geolocation not available in your browser.")
            return
        }
        setStatus("Detecting location...")
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude.toFixed(6)
                const lng = pos.coords.longitude.toFixed(6)
                const latlng = `${lat},${lng}`
                setForm((s) => ({ ...s, location: latlng }))
                updateMapForLocation(latlng)
                setStatus("")
            },
            (err) => {
                console.error(err)
                setStatus("Unable to get location. Please allow location access or enter address manually.")
            },
            { enableHighAccuracy: true, timeout: 9000 }
        )
    }


    // --------- CAPTCHA handling (updated) ----------
    // limit input to digits only; allow empty string so user can delete
    function handleSumChange(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value
        if (val === "" || /^[0-9]*$/.test(val)) {
            setSum(val)
        }
    }

    // validate on blur or Enter
    const [captchaStatus, setCaptchaStatus] = useState<null | boolean>(null) // null = unchecked, true/false = result

    function validateCaptchaValue(): boolean {
        const numeric = sum.trim() === "" ? NaN : Number(sum.trim())
        const correct = !Number.isNaN(numeric) && numeric === a + b
        setCaptchaStatus(correct)
        return correct
    }

    function handleCaptchaBlur() {
        setFocused("")
        if (sum.trim() !== "") validateCaptchaValue()
    }

    function handleCaptchaKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault()
            validateCaptchaValue()
        }
    }
    // ------------------------------------------------

    // --- SUBMIT: send to Web3Forms ---
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus("")

        // captcha check (trim and parse safely)
        if (!validateCaptchaValue()) {
            setStatus("Please solve the captcha correctly.")
            return
        }

        // validation
        if (!form.first || !form.email || !form.message) {
            setStatus("Please fill Name, Email and Message.")
            return
        }

        setIsSubmitting(true)
        setStatus("Submitting...")

        try {
            const payload = new FormData()
            // required by Web3Forms
            payload.append("access_key", "c8409d60-24a0-4996-b8c5-98c141b397aa")
            // basic fields
            payload.append("name", form.first)
            payload.append("email", form.email)
            payload.append("phone", form.phone || "")
            payload.append("message", form.message)
            payload.append("location", form.location || "")
            payload.append("subject", "Website Contact Form - Creasun Contact")
            // optional: additional metadata fields
            payload.append("billAmount", billAmount || "")
            payload.append("billUnit", billUnit)
            // attach file if provided (append both common keys to improve chance of acceptance)
            if (billFile) {
                // single-file key
                payload.append("file", billFile, billFile.name)
                // some endpoints expect attachments[] array style
                payload.append("attachments[]", billFile, billFile.name)
            }

            // Example: capture UTM or source fields if needed:
            // payload.append("source", "website")
            // payload.append("page", window.location.href)

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: payload,
            })

            if (!res.ok) {
                // handle non-2xx
                const text = await res.text()
                console.error("Web3Forms non-OK response:", res.status, text)
                setStatus("Error submitting the form. Please try again later.")
                setIsSubmitting(false)
                return
            }

            const data = await res.json()
            if (data.success) {
                setStatus("Thanks! We'll get back to you soon.")
                // reset local UI state
                setForm({ first: "", email: "", phone: "", message: "", location: "" })
                setSum("")
                setBillAmount("")
                setBillUnit("INR")
                setBillFile(null)
                if (billPreviewUrl) {
                    URL.revokeObjectURL(billPreviewUrl)
                    setBillPreviewUrl(null)
                }
                // refresh captcha and map
                regenerateCaptcha()
                setMapSrc(`https://www.google.com/maps?q=${encodeURIComponent(initialMapQuery)}&z=15&output=embed`)
            } else {
                // web3forms returned success:false
                console.warn("Web3Forms response:", data)
                setStatus(data.message || "Submission failed. Please try again.")
            }
        } catch (err) {
            console.error("Submit error:", err)
            setStatus("Network error. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    // cleanup preview URL on unmount
    useEffect(() => {
        return () => {
            if (billPreviewUrl) URL.revokeObjectURL(billPreviewUrl)
        }
    }, [billPreviewUrl])

    return (
        <div className="w-full  py-8 md:py-10 ">
            {/* Contact Info Cards Section */}
            <div className="py-10 px-6 " style={{ background: `linear-gradient(180deg, #f8fbff 0%, #f0f8ff 100%)` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: BRAND.deepBlue }}>
                            Get In Touch
                        </h2>
                        <p className="text-lg" style={{ color: BRAND.textGrayish }}>
                            Multiple ways to connect with our solar energy experts
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Phone Card */}
                        <div
                            className="rounded-2xl p-8 shadow-lg shadow-black/30 border-2 transition-all bg-white hover:text-blue-950 duration-300 hover:shadow-xl hover:bg-[#F5B835] hover:-translate-y-2"
                            style={{
                                borderColor: `${BRAND.skyBlue}20`,
                            }}
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: `${BRAND.skyBlue}65` }}>
                                <Phone className="w-8 h-8" style={{ color: BRAND.skyBlue }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Call Us</h3>
                            <p className="mb-4">Speak directly with our solar experts</p>
                            <a href="tel:+919624120591" className="font-semibold flex items-center gap-2 transition-all duration-100 hover:gap-3">
                                +91 96241 20591
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <p className="text-xs mt-3">Mon-Sat: 9:30 AM - 6:30 PM</p>
                        </div>

                        {/* Email Card */}
                        <div
                            className="rounded-2xl p-8 hover:bg-[#021A5E]  hover:text-[#F5B835] shadow-lg shadow-black/30 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            style={{
                                borderColor: `${BRAND.sunYellow}20`,
                            }}
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: `${BRAND.sunYellow}20` }}>
                                <Mail className="w-8 h-8" style={{ color: BRAND.sunYellow }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email Us</h3>
                            <p className="mb-4">Send us a detailed inquiry</p>
                            <a href="mailto:creasunenergy24@gmail.com" className="font-semibold flex items-center gap-2 transition-all  hover:gap-3">
                                creasunenergy24@gmail.com
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <p className="text-xs mt-3">We respond within 24 hours</p>
                        </div>

                        {/* Location Card */}
                        <div
                            className="rounded-2xl p-8 shadow-lg shadow-black/30 border-2 transition-all bg-white hover:text-blue-950 duration-300 hover:shadow-xl hover:bg-[#F5B835] hover:-translate-y-2"
                            style={{
                                borderColor: `${BRAND.skyBlue}20`,
                            }}
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: `${BRAND.lightTint}40` }}>
                                <MapPin className="w-8 h-8" style={{ color: BRAND.deepBlue }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                            <p className="mb-4">Come to our Rajkot facility</p>
                            <a href={`https://www.google.com/maps?q=${encodeURIComponent(initialMapQuery)}`} target="_blank" rel="noreferrer" className="font-semibold flex items-center gap-2 transition-all duration-300 hover:gap-3">
                                View on Maps
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <p className="text-xs mt-3">Office No.3, Navsarjan Municipal Shopping Center, Rajkot</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div id="contact-form " className="py-20 px-6 overflow-hidden  bg-cover bg-center bg-no-repeat  " style={{
                backgroundImage: `url(${bgImage})`,
            }}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: BRAND.deepBlue }}>
                            Send us a Message
                        </h2>
                        <p className="text-lg" style={{ color: BRAND.textGrayish }}>
                            Fill out the form below and our team will get back to you shortly with a personalized solution.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-3" style={{ color: BRAND.deepBlue }}>
                                    Full Name
                                </label>
                                <input
                                    name="first"
                                    value={form.first}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("first")}
                                    onBlur={() => setFocused("")}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                                    style={{
                                        borderColor: focused === "first" ? BRAND.skyBlue : BRAND.lightTint,
                                        background: focused === "first" ? `${BRAND.skyBlue}05` : "#fafbff",
                                        boxShadow: focused === "first" ? `0 0 0 3px ${BRAND.lightTint}` : "none",
                                    }}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-3" style={{ color: BRAND.deepBlue }}>
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("email")}
                                    onBlur={() => setFocused("")}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                                    style={{
                                        borderColor: focused === "email" ? BRAND.skyBlue : BRAND.lightTint,
                                        background: focused === "email" ? `${BRAND.skyBlue}05` : "#fafbff",
                                        boxShadow: focused === "email" ? `0 0 0 3px ${BRAND.lightTint}` : "none",
                                    }}
                                    type="email"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone + Location */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-3" style={{ color: BRAND.deepBlue }}>
                                    Phone Number
                                </label>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("phone")}
                                    onBlur={() => setFocused("")}
                                    placeholder="+91 98765 43210"
                                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                                    style={{
                                        borderColor: focused === "phone" ? BRAND.skyBlue : BRAND.lightTint,
                                        background: focused === "phone" ? `${BRAND.skyBlue}05` : "#fafbff",
                                        boxShadow: focused === "phone" ? `0 0 0 3px ${BRAND.lightTint}` : "none",
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-3" style={{ color: BRAND.deepBlue }}>
                                    Location
                                </label>
                                <div className="relative">
                                    <input
                                        name="location"
                                        value={form.location}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("location")}
                                        onBlur={() => setFocused("")}
                                        placeholder="Enter your address or lat,lng "
                                        className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200"
                                        style={{
                                            borderColor: focused === "location" ? BRAND.skyBlue : BRAND.lightTint,
                                            background: focused === "location" ? `${BRAND.skyBlue}05` : "#fafbff",
                                            boxShadow: focused === "location" ? `0 0 0 3px ${BRAND.lightTint}` : "none",
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={useMyLocation}
                                        className="absolute right-2 top-2 inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md font-medium"
                                        style={{
                                            background: `${BRAND.lightTint}`,
                                            color: `${BRAND.deepBlue}`,
                                            boxShadow: "0 6px 16px rgba(3,30,108,0.06)",
                                        }}
                                    >
                                        Use my location
                                    </button>
                                </div>
                                <p className="mt-2 text-xs text-gray-500">Start typing address or click "Use my location" to auto-fill coordinates.</p>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold mb-3" style={{ color: BRAND.deepBlue }}>
                                How can we help?
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                onFocus={() => setFocused("message")}
                                onBlur={() => setFocused("")}
                                placeholder="Tell us about your solar energy needs, budget, or any questions you have..."
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 resize-none"
                                style={{
                                    borderColor: focused === "message" ? BRAND.skyBlue : BRAND.lightTint,
                                    background: focused === "message" ? `${BRAND.skyBlue}05` : "#fafbff",
                                    boxShadow: focused === "message" ? `0 0 0 3px ${BRAND.lightTint}` : "none",
                                }}
                                required
                            />
                        </div>

                        {/* Electricity bill area */}
                        <div className="rounded-xl p-6 flex flex-col gap-4" style={{ background: `${BRAND.lightTint}10`, border: `1px solid ${BRAND.lightTint}` }}>
                            <div className="flex gap-3 items-start">
                                <div className="flex-1">
                                    <label className="text-sm font-medium mb-1 block" style={{ color: BRAND.deepBlue }}>
                                        Monthly Bill
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            name="billAmount"
                                            value={billAmount}
                                            onChange={(e) => setBillAmount(e.target.value)}
                                            placeholder="Enter amount (numbers only)"
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200"
                                            style={{ borderColor: "#eef2f7" }}
                                        />
                                        <select value={billUnit} onChange={(e) => setBillUnit(e.target.value as "INR" | "kWh")} className="px-3 py-2 rounded-lg border border-gray-200" style={{ borderColor: "#eef2f7" }}>
                                            <option value="INR">₹ (INR)</option>
                                            <option value="kWh">kWh</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Captcha */}
                        <div className="rounded-xl p-6 flex flex-col sm:flex-row sm:items-end gap-4" style={{ background: `${BRAND.lightTint}10`, border: `1px solid ${BRAND.lightTint}` }}>
                            <div className="flex-1">
                                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: BRAND.textGrayish }}>
                                    Security Verification
                                </p>
                                <div className="text-2xl font-bold mt-2" style={{ color: BRAND.deepBlue }}>
                                    {a} + {b} = <span style={{ color: BRAND.sunYellow }}>?</span>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                <input
                                    value={sum}
                                    onChange={handleSumChange}
                                    onFocus={() => setFocused("captcha")}
                                    onBlur={handleCaptchaBlur}
                                    onKeyDown={handleCaptchaKeyDown}
                                    placeholder="0"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    aria-label="Security verification answer"
                                    className="w-full sm:w-24 px-4 py-3 rounded-lg border-2 text-center font-bold transition-all duration-200"
                                    style={{
                                        borderColor: focused === "captcha" ? BRAND.skyBlue : BRAND.lightTint,
                                        background: focused === "captcha" ? `${BRAND.skyBlue}05` : "#fafbff",
                                        boxShadow: focused === "captcha" ? `0 0 0 3px ${BRAND.lightTint}` : "none",
                                    }}
                                />

                                <div style={{ minWidth: 110 }}>
                                    {captchaStatus === true && (
                                        <div style={{ color: "green", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                                            <CheckCircle className="w-4 h-4" /> Correct
                                        </div>
                                    )}
                                    {captchaStatus === false && (
                                        <div style={{ color: "#b91c1c", fontWeight: 600 }}>✕ Incorrect</div>
                                    )}

                                    <button
                                        type="button"
                                        onClick={regenerateCaptcha}
                                        className="mt-2 text-xs font-medium"
                                        style={{ color: BRAND.deepBlue, background: "transparent", border: "none", cursor: "pointer" }}
                                    >
                                        Try another
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg text-lg"
                            style={{
                                background: `linear-gradient(135deg, ${BRAND.skyBlue}, ${BRAND.deepBlue})`,
                            }}
                        >
                            {isSubmitting ? (
                                <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.28)" strokeWidth="4" />
                                    <path d="M22 12a10 10 0 00-10-10" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            ) : (
                                <Zap className="w-5 h-5" />
                            )}
                            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                        </button>

                        {/* Status */}
                        {status && (
                            <div
                                className={`p-4 rounded-xl text-sm font-medium transition-all duration-200 flex items-start gap-3 ${status.includes("Thanks") ? "border-l-4" : "border-l-4"}`}
                                style={{
                                    background: status.includes("Thanks") ? `${BRAND.sunYellow}65` : "#fef2f2",
                                    borderLeftColor: status.includes("Thanks") ? BRAND.sunYellow : "#dc2626",
                                    color: status.includes("Thanks") ? BRAND.deepBlue : "#991b1b",
                                }}
                            >
                                {status.includes("Thanks") && <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />}
                                <span>{status}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="py-10"  >
                <div className="w-full mx-auto">
                    <h2 className="text-4xl font-bold  mb-12 text-center">Visit Our Shope </h2>

                    <div className="">
                        <div className="  overflow-hidden shadow-2xl h-96">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.697116525583!2d70.7898326!3d22.270909200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb798b3be4e5%3A0xe53601b9884a054!2sCreasun%20Energy!5e1!3m2!1sen!2sin!4v1764665710256!5m2!1sen!2sin" width="600" height="450" title="Creasun Energy Location" className="w-full h-full" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
