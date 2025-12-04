// FreeSolarQuoteModal.tsx
"use client";

import React, { useEffect, useState, type Dispatch, type SetStateAction } from "react";

type FreeSolarQuoteModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function FreeSolarQuoteModal({ open, setOpen }: FreeSolarQuoteModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
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
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!form.phone.trim()) return "Please enter your phone number";
    if (!form.email.trim()) return "Please enter your email";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      alert(err);
      return;
    }
    setSubmitting(true);
    try {
      // TODO: replace with real API call
      await new Promise((r) => setTimeout(r, 900));
      console.log("Free Solar Quote Request:", form);
      setSuccess(true);
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
      setTimeout(() => {
        setSuccess(false);
        setOpen(false);
      }, 1000);
    } catch (e) {
      console.error(e);
      alert("Something went wrong — please try again");
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
                  <p className="mt-1 text-sm text-gray-600">Fast, no-obligation estimate for your home or business.</p>
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
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <span className="text-sm font-medium text-gray-700">Average monthly electricity bill (₹)</span>
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
                onClick={handleSubmit as any}
                disabled={submitting}
                className="flex-1 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-semibold disabled:opacity-60"
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
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Request sent — we'll contact you soon!
        </div>
      )}
    </>
  );
}
