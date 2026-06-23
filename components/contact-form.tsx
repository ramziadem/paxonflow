"use client";

import { FormEvent, useState } from "react";


export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`New inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        "",
        message || "No message provided.",
      ].join("\n"),
    );

    setSubmitted(true);
    formData.append("access_key", "b67a0f7d-1540-4726-89d2-55571c0a3719");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success sent email. We'll get back to you soon!" : "Error to sent Email. Please try again later.");
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel glow-border rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full  mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300/50"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full  mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300/50"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2 text-sm text-slate-300">
        <span>Business</span>
        <input
          name="company"
          type="text"
          placeholder="Agency, brokerage, or small business"
          className="w-full  mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300/50"
        />
      </label>

      <label className="mt-4 block space-y-2 text-sm text-slate-300">
        <span>What do you want automated?</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your workflow, tools, pain points, and timeline."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 mt-4 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300/50"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <button
          type="submit"
          className="cursor-pointer inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
        >
          Send inquiry
        </button>
      </div>

      {submitted ? <p className="mt-4 text-sm text-emerald-300">{result}</p> : null}
    </form>
  );
}