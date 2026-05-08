"use client";

import { useState } from "react";

const EMAIL = "hudsonashweiner@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend() {
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      ``,
      notes,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Red Card Thrift Inquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const canSend = name.trim() && email.trim() && notes.trim();

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <div className="text-4xl">✓</div>
        <p className="font-heading font-bold text-xl tracking-widest">
          MESSAGE READY
        </p>
        <p className="text-white/50 text-sm max-w-xs">
          Your email app opened with everything filled in. Just hit send and
          we&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setName("");
            setEmail("");
            setPhone("");
            setNotes("");
            setSent(false);
          }}
          className="mt-2 font-heading text-xs tracking-widest text-white/30 hover:text-white transition-colors"
        >
          SEND ANOTHER
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSend();
      }}
      className="flex flex-col gap-5"
    >
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-heading text-xs tracking-widest text-white/40">
            NAME <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First and last name"
            required
            className="bg-navy border border-navy-border text-white text-sm placeholder:text-white/25 px-3 py-2.5 focus:outline-none focus:border-brand-red transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-heading text-xs tracking-widest text-white/40">
            EMAIL <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="bg-navy border border-navy-border text-white text-sm placeholder:text-white/25 px-3 py-2.5 focus:outline-none focus:border-brand-red transition-colors"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label className="font-heading text-xs tracking-widest text-white/40">
          PHONE{" "}
          <span className="text-white/20 font-normal normal-case tracking-normal text-[11px]">
            (optional)
          </span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(303) 555-0100"
          className="bg-navy border border-navy-border text-white text-sm placeholder:text-white/25 px-3 py-2.5 focus:outline-none focus:border-brand-red transition-colors"
        />
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-2">
        <label className="font-heading text-xs tracking-widest text-white/40">
          MESSAGE <span className="text-brand-red">*</span>
        </label>
        <textarea
          rows={5}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Tell us what you're looking for, what you have to sell, or which sport you'd like us to carry..."
          required
          className="bg-navy border border-navy-border text-white text-sm placeholder:text-white/25 px-3 py-2.5 resize-none focus:outline-none focus:border-brand-red transition-colors"
        />
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={!canSend}
          className="border border-brand-red text-brand-red font-heading text-xs tracking-widest px-8 py-3 hover:bg-brand-red hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          SEND MESSAGE
        </button>
        <p className="text-white/25 text-xs font-heading tracking-widest">
          * REQUIRED
        </p>
      </div>
    </form>
  );
}
