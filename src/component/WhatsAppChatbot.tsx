"use client"

import React, { useEffect, useRef, useState, type JSX } from "react"

type Props = {
  phone?: string // international format without '+', e.g. "919624120591"
  autoOpenDelay?: number // milliseconds before auto-open (0 to disable auto-open)
  hideOnMobile?: boolean
}

export default function WhatsAppChatbot({
  phone = "919624120591",
  autoOpenDelay = 2500, // default 2.5s delay before auto-open
  hideOnMobile = false,
}: Props): JSX.Element {
  // Colors
  const WA_GREEN = "#25D366"
  const WA_DARK = "#075E54"
  const BRAND_DEEP_BLUE = "#0A2E9E"
  const BRAND_YELLOW = "#F5B835"

  // State
  const [open, setOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>("Hello, I want a quote for solar installation.")
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [botTyping, setBotTyping] = useState<boolean>(false)
  const [botVisible, setBotVisible] = useState<string>("")
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Bot greeting and typing interval ref
  const botFull =
    "Hi 👋 I'm Creasun Assistant — I can help with quotes, site visits and product info. How can I help you today?"
  const typingIntervalRef = useRef<number | null>(null)
  const autoOpenTimeoutRef = useRef<number | null>(null)

  // Detect mobile
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Auto-open after configured delay (if > 0). Clean up on unmount.
  useEffect(() => {
    if (autoOpenDelay && autoOpenDelay > 0) {
      autoOpenTimeoutRef.current = window.setTimeout(() => {
        setOpen(true)
        startBotTyping()
      }, autoOpenDelay)
    }
    return () => {
      if (autoOpenTimeoutRef.current) {
        window.clearTimeout(autoOpenTimeoutRef.current)
        autoOpenTimeoutRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoOpenDelay])

  // Click outside to close
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!open) return
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [open])

  // Bot typing simulation (reveals characters one-by-one)
  function startBotTyping() {
    // if already have bot message or typing, do not restart
    if (messages.some((m) => m.from === "bot")) return
    setBotTyping(true)
    setBotVisible("")
    const chars = Array.from(botFull)
    let i = 0
    if (typingIntervalRef.current) {
      window.clearInterval(typingIntervalRef.current)
    }
    typingIntervalRef.current = window.setInterval(() => {
      i++
      setBotVisible(chars.slice(0, i).join(""))
      if (i >= chars.length) {
        if (typingIntervalRef.current) {
          window.clearInterval(typingIntervalRef.current)
          typingIntervalRef.current = null
        }
        setBotTyping(false)
        // push final bot message to history after a small delay to make it feel natural
        setTimeout(() => {
          setMessages((m) => [...m, { from: "bot", text: botFull }])
          setBotVisible("")
        }, 320)
      }
    }, 25) // typing speed (ms per char)
  }

  // Build WhatsApp URL
  function waUrl(msg: string) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
  }

  // Send action (open wa.me and add message to UI)
  function send() {
    const msg = (text || "").trim()
    if (!msg) return
    window.open(waUrl(msg), "_blank", "noopener,noreferrer")
    setMessages((m) => [...m, { from: "user", text: msg }])
    setText("")
  }

  // Keyboard: Enter sends (Shift+Enter newline)
  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  // Quick replies
  const quickReplies = [
    "Need rooftop system quote",
    "Residential solar inquiry",
    "Commercial solar — site visit",
    "Interested in panels & inverters",
  ]

  // Cleanup on unmount - clear typing interval and auto open timeout
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        window.clearInterval(typingIntervalRef.current)
        typingIntervalRef.current = null
      }
      if (autoOpenTimeoutRef.current) {
        window.clearTimeout(autoOpenTimeoutRef.current)
        autoOpenTimeoutRef.current = null
      }
      // revoke any object urls if used (not used here, but safe place)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`fixed z-50 right-6 md:right-8 bottom-8 flex flex-col items-end gap-3 ${hideOnMobile && isMobile ? "hidden" : ""}`}
    >
      {/* Chat Card (expands when open) */}
      <div
        className={`origin-bottom-right transform transition-all duration-300 ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: WA_DARK, color: "white" }}>
            <div className="w-10 h-10 rounded-full grid place-items-center bg-white/10" aria-hidden>
              {/* WhatsApp icon (white) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 0 5.373 0 12a11.92 11.92 0 001.67 6.19L0 24l5.98-1.6A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.16-3.48-8.52z" fill="white" opacity="0.06"/>
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49 2.98 1.29 2.98.86 3.52.81.53-.05 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" fill="white"/>
              </svg>
            </div>

            <div className="flex-1">
              <div className="text-sm font-bold">Creasun Energy</div>
              <div className="text-xs opacity-90">{botTyping ? "Assistant is typing..." : "Usually replies within a few hours"}</div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded-md hover:bg-white/10 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 6L6 18" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="px-4 py-3 bg-linear-to-b from-white to-[#f7fbff] min-h-[140px] max-h-56 overflow-auto">
            <div className="flex flex-col gap-3">
              {messages.map((m, idx) => (
                <div key={idx} className={`${m.from === "bot" ? "self-start" : "self-end"} max-w-[84%]`}>
                  <div
                    className={`px-3 py-2 rounded-lg text-sm ${m.from === "bot" ? "bg-white border" : "bg-[linear-gradient(135deg,#F5B835,#0A2E9E)] text-white"}`}
                    style={m.from === "bot" ? { boxShadow: "0 6px 18px rgba(3,30,108,0.04)" } : { boxShadow: "0 6px 20px rgba(10,46,158,0.12)" }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Bot typing partial */}
              {botTyping && (
                <div className="self-start max-w-[84%]">
                  <div className="px-3 py-2 rounded-lg bg-white border text-sm" style={{ boxShadow: "0 6px 18px rgba(3,30,108,0.04)" }}>
                    <div className="flex items-end gap-2">
                      <span>{botVisible}</span>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.12s" }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.24s" }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick replies and input */}
          <div className="p-3 bg-white/80 border-t">
            <div className="flex flex-wrap gap-2 mb-2">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => setText(q)}
                  className="text-xs px-3 py-1.5 rounded-full border hover:shadow-sm transition"
                  style={{ borderColor: "#e6eefc", background: "#fbfdff" }}
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="flex items-start gap-2">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={onKeyDown}
                rows={2}
                placeholder="Type a message..."
                className="flex-1 resize-none px-3 py-2 rounded-lg border text-sm focus:outline-none"
                style={{ borderColor: "#eef2f7", background: "#fff" }}
                aria-label="Message"
              />

              <div className="flex flex-col gap-2">
                <button
                  onClick={send}
                  aria-label="Send to WhatsApp"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-white font-semibold shadow transition-transform hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${BRAND_YELLOW}, ${BRAND_DEEP_BLUE})` }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 2l-7 20 2-7 7-13z" fill="white" opacity="0.12" />
                  </svg>
                  <span className="text-sm">Send</span>
                </button>

                <a href={`tel:+91${phone}`} className="text-xs text-gray-500 underline hidden md:inline-block">
                  Call
                </a>
              </div>
            </div>

            <div className="mt-2 text-[12px] text-gray-500">Clicking Send opens WhatsApp with your message.</div>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => {
          setOpen((s) => {
            const next = !s
            if (next && messages.length === 0 && !botTyping) startBotTyping()
            return next
          })
        }}
        aria-label="Open WhatsApp chat with Creasun Energy"
        className="relative group w-16 h-16 md:w-14 md:h-14 rounded-full grid place-items-center shadow-2xl transform transition-transform duration-200 hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${WA_GREEN}, ${WA_DARK})`,
          border: `3px solid ${BRAND_YELLOW}`,
        }}
      >
        {/* pulse */}
        <span
          className="absolute -inset-3 rounded-full animate-ping"
          style={{ background: BRAND_YELLOW, opacity: 0.12, filter: "blur(6px)" }}
          aria-hidden
        />
        {/* icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 0 5.373 0 12a11.92 11.92 0 001.67 6.19L0 24l5.98-1.6A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.16-3.48-8.52z" fill="white" opacity="0.06"/>
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49 2.98 1.29 2.98.86 3.52.81.53-.05 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" fill="white"/>
        </svg>

        {/* hover label */}
        <span
          className="absolute -right-36 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-white drop-shadow-lg transition-opacity duration-200 opacity-0 group-hover:opacity-100 md:block hidden"
          style={{ background: `linear-gradient(90deg, ${BRAND_DEEP_BLUE}, ${BRAND_YELLOW})` }}
        >
          Chat with us
        </span>
      </button>
    </div>
  )
}
