"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "PaxonFlow removed the spreadsheet chaos and gave us one clean client pipeline. We saved hours every week and our team finally stopped duplicating work.",
    name: "Megan Carter",
    role: "Operations Director, Northstar Insurance",
  },
  {
    quote:
      "The onboarding sequence now handles itself. Leads move from form to booked call to proposal without us babysitting every step.",
    name: "James Patel",
    role: "Founder, Cedar Street Advisory",
  },
  {
    quote:
      "We were paying for too many tools and still missing follow-ups. The new workflow cut our stack in half and improved conversions.",
    name: "Sophie Reed",
    role: "Managing Partner, BrightHarbor Finance",
  },
  {
    quote:
      "The reporting dashboard finally tells us what is happening in the business in plain English. That alone changed how we make decisions.",
    name: "Daniel Brooks",
    role: "CEO, Everline Protection",
  },
  {
    quote:
      "The automation audit uncovered revenue leaks we had ignored for months. The implementation paid for itself faster than expected.",
    name: "Amelia Jones",
    role: "Principal, Westbridge Risk",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="glass-panel glow-border overflow-hidden rounded-[2rem] p-6 sm:p-8">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((item) => (
            <article key={item.name} className="w-full shrink-0">
              <div className="space-y-5">
                <p className="text-lg leading-8 text-slate-100 sm:text-xl">
                  “{item.quote}”
                </p>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-amber-300" : "w-5 h-5 bg-slate-600 cursor-pointer"
            }`}
          />
        ))}
      </div>
    </div>
  );
}