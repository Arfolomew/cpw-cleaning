"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1FC6C7] focus:bg-white/15 transition-all duration-150";

  return (
    <section id="contact" className="bg-[#1A1E32] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1FC6C7] font-semibold text-xs uppercase tracking-widest mb-3 inline-block border-b-2 border-[#FF662A] pb-1">
            Get Started
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Request a Free Estimate
          </h2>
          <p className="text-white/60 mt-3">
            Fill out the form and we&apos;ll get back to you the same day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div>
            {status === "success" ? (
              <div className="bg-green-500/20 border border-green-500/40 rounded-xl p-8 text-center">
                <svg
                  className="w-14 h-14 text-green-400 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="text-white font-bold text-xl mb-2">Request Sent!</h3>
                <p className="text-white/70">
                  Thanks! Andrew will follow up with you shortly. For immediate
                  assistance, call{" "}
                  <a href="tel:9804353637" className="text-[#1FC6C7] font-semibold">
                    (980) 435-3637
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Property Address"
                  value={form.address}
                  onChange={handleChange}
                  className={inputClass}
                />
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} ${
                    !form.service ? "text-white/40" : "text-white"
                  }`}
                >
                  <option value="" disabled className="bg-[#1A1E32] text-white/40">
                    Select a Service *
                  </option>
                  <option value="Window Cleaning" className="bg-[#1A1E32] text-white">Window Cleaning</option>
                  <option value="Gutter Cleaning" className="bg-[#1A1E32] text-white">Gutter Cleaning</option>
                  <option value="Pressure Washing" className="bg-[#1A1E32] text-white">Pressure Washing</option>
                  <option value="Paver Sealing" className="bg-[#1A1E32] text-white">Paver Sealing</option>
                  <option value="Solar Panel Cleaning" className="bg-[#1A1E32] text-white">Solar Panel Cleaning</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Additional details (optional)"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-[#FF662A] text-white font-bold text-lg rounded-lg hover:bg-[#e5551f] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 shadow-lg shadow-[#FF662A]/20 cursor-pointer"
                >
                  {status === "loading" ? "Sending..." : "Send My Request"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1FC6C7]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-6 h-6 text-[#1FC6C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Phone</p>
                <a
                  href="tel:9804353637"
                  className="text-white text-xl font-bold hover:text-[#1FC6C7] transition-colors duration-150"
                >
                  (980) 435-3637
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1FC6C7]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-6 h-6 text-[#1FC6C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</p>
                <p className="text-white/60 text-sm italic">Coming soon — call or text us for now</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1FC6C7]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-6 h-6 text-[#1FC6C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Hours</p>
                <div className="text-white space-y-1">
                  <p className="font-medium">Mon–Fri: 8am–7pm</p>
                  <p className="font-medium">Saturday: 9am–6pm</p>
                  <p className="text-white/50">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-[#1FC6C7] font-semibold text-sm mb-2">Serving All of Pinellas &amp; Pasco County</p>
              <p className="text-white/60 text-sm leading-relaxed">
                New Port Richey, Clearwater, Tarpon Springs, Palm Harbor, Dunedin, Largo, and more. Same-day quotes available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
