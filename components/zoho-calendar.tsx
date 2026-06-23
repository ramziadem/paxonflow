export default function ZohoCalendar() {
  return (
    <div className="glass-panel glow-border rounded-[2rem] p-6 sm:p-8">
      <div className="rounded-[1.75rem] text-center p-5">
          <a aria-label="Link to Calendar" href="https://calendly.com/contact-paxonflow/30min" target="_blank" rel="noopener noreferrer"  className="text-center rounded-full px-8 py-3 text-xl font-semibold text-emerald-900  bg-amber-200/70 hover:bg-amber-200/80">Book Now</a>
      </div>
        <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            30-minute discovery call
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            Workflow audit review
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            Build scope and next steps
            </div>
        </div>
    </div>
  );
}