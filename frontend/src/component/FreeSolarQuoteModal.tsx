// FreeSolarQuoteModal.tsx
"use client";

import React, { useEffect, useState, type Dispatch, type SetStateAction } from "react";

type FreeSolarQuoteModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  systemType: "on-grid" | "off-grid" | "hybrid";
  roofArea: string;
  monthlyBill: string;
  contactTime: "morning" | "afternoon" | "evening";
  comments: string;
};

const WEB3FORMS_ACCESS_KEY = "c8409d60-24a0-4996-b8c5-98c141b397aa";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function FreeSolarQuoteModal({ open, setOpen }: FreeSolarQuoteModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    address: "",
    systemType: "on-grid",
    roofArea: "",
    monthlyBill: "",
    contactTime: "morning",
    comments: "",
  });

  // lock body scroll while open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value } as FormState));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!form.phone.trim()) return "Please enter your phone number";
    if (!form.email.trim()) return "Please enter your email";
    // optional: basic phone/email pattern checks could be added here
    return null;
  };

  // Accept optional event because footer button triggers without a form event.
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e && typeof (e as React.FormEvent).preventDefault === "function") {
      e.preventDefault();
    }

    const err = validate();
    if (err) {
      // keep simple UX consistent with your previous code
      alert(err);
      return;
    }

    setSubmitting(true);

    try {
      // Build FormData for Web3Forms
      const formData = new FormData();

      // Web3Forms required key
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);

      // Subject (optional, nice to set)
      formData.append("subject", "New Free Solar Quote Request");

      // Append fields (stringify if necessary)
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("address", form.address);
      formData.append("systemType", form.systemType);
      formData.append("roofArea", form.roofArea);
      formData.append("monthlyBill", form.monthlyBill);
      formData.append("contactTime", form.contactTime);
      formData.append("comments", form.comments);

      // Optional: send a timestamp
      formData.append("submittedAt", new Date().toISOString());

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        console.log("Web3Forms Response:", data);
        setSuccess(true);

        // Reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          systemType: "on-grid",
          roofArea: "",
          monthlyBill: "",
          contactTime: "morning",
          comments: "",
        });

        // Keep success toast briefly then close
        setTimeout(() => {
          setSuccess(false);
          setOpen(false);
        }, 1200);
      } else {
        // Web3Forms returns message when success=false
        console.error("Web3Forms error:", data);
        alert("Submission failed: " + (data?.message || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong — please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/40 transition-opacity"
        />

        {/* Modal container */}
        <div className="relative z-10 w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border">
            {/* Header */}
            <div className="px-6 py-5 border-b">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Get a Free Solar Quote</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Fast, no-obligation estimate for your home or business.
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="text-gray-500 hover:text-gray-700 rounded-md p-2"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Body: scrollable */}
            <div className="px-6 py-6 max-h-[80vh] overflow-y-auto">
              {/* Note: form is used for semantics but we keep the footer outside (so we still call handleSubmit from the footer button). */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => handleSubmit(e)}>
                {/* Hidden fields in case someone submits via actual form submit */}
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New Free Solar Quote Request" />

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Full name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="Your full name"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Phone</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="e.g. +91 98765 43210"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Email</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Address / Location</span>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    placeholder="Street, City, Pincode"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">System type</span>
                  <select
                    name="systemType"
                    value={form.systemType}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none"
                  >
                    <option value="on-grid">On-grid</option>
                    <option value="off-grid">Off-grid</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Approx. roof area (sq. ft)</span>
                  <input
                    name="roofArea"
                    value={form.roofArea}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                    placeholder="e.g. 1200"
                  />
                </label>

                <label className="md:col-span-2 flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    Average monthly electricity bill (₹)
                  </span>
                  <input
                    name="monthlyBill"
                    value={form.monthlyBill}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                    placeholder="e.g. 6000"
                  />
                </label>
                <label className="md:col-span-2 flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Comments / Requirements</span>
                  <textarea
                    name="comments"
                    value={form.comments}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none resize-y"
                    placeholder="Anything else we should know?"
                  />
                </label>
              </form>
            </div>

            {/* Footer: sticky actions */}
            <div className="px-6 py-4 border-t bg-white flex items-center gap-4">
              <button
                onClick={() => handleSubmit()} // calling without event since button is outside form
                disabled={submitting}
                className="flex-1 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-semibold disabled:opacity-60"
                aria-disabled={submitting}
              >
                {submitting ? "Submitting..." : "Request Quote"}
              </button>

              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-2xl text-gray-700 bg-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success toast */}
      {success && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Request sent — we'll contact you soon!
        </div>
      )}
    </>
  );
}
