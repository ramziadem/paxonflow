import ContactForm from "@/components/contact-form";
import TestimonialCarousel from "@/components/testimonial-carousel";
import ZohoCalendar from "@/components/zoho-calendar";
import Logo from "@/app/Logo.png"
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Workflow Audit",
    description:
      "Map the full client journey, find leaks, remove repeat manual tasks, and build a clear plan for automation.",
  },
  {
    title: "Client Onboarding System",
    description:
      "Turn inbound leads into booked consultations, signed agreements, and organized client records automatically.",
  },
  {
    title: "CRM + Pipeline Setup",
    description:
      "Build one source of truth for leads, tasks, renewals, handoffs, and follow-ups so nothing gets lost.",
  },
  {
    title: "Sales + Proposal Automations",
    description:
      "Automate quotes, reminders, invoices, and follow-up sequences so your team closes faster with less friction.",
  },
  {
    title: "Reporting Dashboard",
    description:
      "Surface the numbers that matter in a dashboard that makes cash flow, lead flow, and team load easy to see.",
  },
  {
    title: "Fractional Automation Support",
    description:
      "Ongoing optimization, new workflow builds, and monthly support to keep your systems sharp as you grow.",
  },
];

const packages = [
  {
    name: "Starter Sprint",
    price: "$1,249 / £949",
    description: "Best for solo operators or small teams that need a fast clarity reset.",
    items: ["Workflow audit", "One core automation", "CRM cleanup", "1-week handoff"],
  },
  {
    name: "Growth Engine",
    price: "$3,499 / £2,749",
    description: "Ideal for agencies and small businesses ready to reduce subscription waste.",
    items: ["Client onboarding", "Lead nurture sequence", "Dashboard setup", "Training session"],
    featured: true,
  },
  {
    name: "Scale Partner",
    price: "$6,499+ / £4,999+",
    description: "For businesses that want a full operating system and monthly strategic support.",
    items: ["Multi-step workflows", "Team handoff system", "Reporting suite", "Priority support"],
  },
];

const caseStudies = [
  {
    title: "Insurance lead-to-policy engine",
    summary:
      "Rebuilt the intake and follow-up flow so prospects moved from enquiry to consultation without manual chasing.",
    metric: "38% more booked calls",
  },
  {
    title: "SMB operations cleanup",
    summary:
      "Consolidated scattered tools into one workflow, removing duplicate tasks across sales, onboarding, and invoicing.",
    metric: "11 hours saved weekly",
  },
  {
    title: "Client retention dashboard",
    summary:
      "Created a visibility layer for renewals, follow-ups, and dormant accounts to stop revenue slipping away.",
    metric: "22% uplift in renewals",
  },
];

const brands = ["HubSpot", "Notion", "Airtable", "Zapier", "Slack", "Google Workspace", "LinkedIn", "Google", "Facebook"];

const promotions = [
  {
    title: "Founder's Audit Credit",
    description:
      "Book a paid automation build and receive a bonus workflow audit for your next department at no extra cost.",
  },
  {
    title: "First Client Momentum Offer",
    description:
      "Launch with a discounted sprint if you are a new agency or local business ready to get live quickly.",
  },
  {
    title: "Referral Suggestion Bonus",
    description:
      "Bring in another business owner and unlock support hours or dashboard enhancements for your own stack.",
  },
];

const stats = [
  { value: "01", label: "workflow maps that remove tool chaos" },
  { value: "02", label: "systems that save money, time, and headcount" },
  { value: "03", label: "clear onboarding paths from lead to loyal client" },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-25" />
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-400/20 floating-orb" />
      <div className="pointer-events-none absolute right-[-6rem] top-64 h-80 w-80 rounded-full bg-amber-300/15 floating-orb" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image src={Logo} alt="Paxonflow Logo" className="flex h-11 w-11 items-center justify-center rounded-2xl ring-1 ring-amber-300/25" />
            <span className="text-display text-lg font-semibold tracking-[0.24em] text-white">
              PAXONFLOW
            </span>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#schedule"
              className="ml-3 rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Make a schedule
            </a>
          </nav>

          <details className="group relative lg:hidden">
            <summary className="list-none rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition hover:bg-white/10">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-72 rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/6 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#schedule"
                  className="mt-2 rounded-2xl bg-amber-300 px-4 py-3 text-center text-sm font-semibold text-slate-950"
                >
                  Make a schedule
                </a>
              </div>
            </div>
          </details>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Workflow automation for insurance firms and small businesses
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Stop losing money to tool sprawl. Build one system that runs the business.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                PaxonFlow helps insurance teams and small businesses design a full workflow engine that captures leads, automates onboarding, reduces subscription waste, and keeps every client touchpoint moving without manual chaos.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#schedule"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                Book a strategy call
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                See the systems
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.value} className="glass-panel rounded-3xl p-4">
                  <div className="text-display text-2xl font-semibold text-amber-300">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel glow-border relative overflow-hidden rounded-[2.5rem] p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
              <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">What we do</p>
                  <h2 className="mt-3 text-display text-3xl font-semibold text-white">
                    Replace scattered tools with a streamlined operating system.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    We design the full cycle: lead capture, qualification, scheduling, task handoffs, onboarding, invoicing, retention, and reporting. The result is less burn, fewer mistakes, and a more premium client experience.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.75rem] border border-cyan-300/15 bg-cyan-300/8 p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">Revenue saved</p>
                    <p className="mt-3 text-display text-3xl font-semibold text-white">30%+</p>
                    <p className="mt-2 text-sm text-slate-300">Through stack consolidation and better follow-up flows.</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-amber-300/15 bg-amber-300/8 p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-amber-100/80">Client response</p>
                    <p className="mt-3 text-display text-3xl font-semibold text-white">5 min</p>
                    <p className="mt-2 text-sm text-slate-300">Automated booking and reminders keep momentum high.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  "Lead capture",
                  "Client onboarding",
                  "Retention and reporting",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 right-6 hidden w-56 rounded-[2rem] border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/40 lg:block">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Automation stack</p>
              <div className="mt-3 space-y-3 text-sm text-slate-200">
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                  <span>Forms → CRM</span>
                  <span className="text-emerald-300">live</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                  <span>Booking → reminders</span>
                  <span className="text-emerald-300">live</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                  <span>Invoice → follow-up</span>
                  <span className="text-emerald-300">live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">About us</p>
            <h2 className="mt-3 text-display text-4xl font-semibold text-white sm:text-5xl">
              Built for businesses that want clean systems, not more software.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            We help insurance agencies and SMBs remove friction from the full lifecycle of the business. Instead of paying for a thousand disconnected tools, we design one workflow layer that protects your time, your margin, and your customer experience.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">Services</p>
            <h2 className="mt-3 text-display text-4xl font-semibold text-white sm:text-5xl">
              What we can build for you
            </h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            Each service is designed to create a measurable operational win, not just a prettier workflow diagram.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-panel hover-lift rounded-[1.75rem] p-6">
              <h3 className="text-display text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Packages</p>
            <h2 className="mt-3 text-display text-4xl font-semibold text-white sm:text-5xl">
              Strong offers for the US and UK market
            </h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            These tiers are built to make it easy for your businesses to make it fast, then expand your operations when the automation starts paying back and getting good ROI.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`glass-panel hover-lift rounded-[2rem] p-6 ${pkg.featured ? "border-amber-300/30 bg-white/7" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-display text-2xl font-semibold text-white">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{pkg.description}</p>
                </div>
                {pkg.featured ? (
                  <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-950">
                    Most popular
                  </span>
                ) : null}
              </div>

              <p className="mt-6 text-3xl font-semibold text-amber-300">{pkg.price}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="promotions" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">Promotions</p>
          <h2 className="mt-3 text-display text-4xl font-semibold text-white sm:text-5xl">
            Offers that help your business with no hidden extra fees
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {promotions.map((item) => (
            <article key={item.title} className="glass-panel rounded-[1.75rem] p-6">
              <h3 className="text-display text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-amber-400">
            Let's discuss
          </a>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Portfolio</p>
            <h2 className="mt-3 text-display text-4xl font-semibold text-white sm:text-5xl">
              Selected work and outcomes
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article key={study.title} className="glass-panel hover-lift rounded-[1.75rem] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">0{index + 1}</p>
              <h3 className="mt-4 text-display text-2xl font-semibold text-white">{study.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{study.summary}</p>
              <div className="mt-6 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/8 px-4 py-2 text-sm font-semibold text-emerald-200">
                {study.metric}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mt-3 text-display text-4xl font-semibold  text-amber-200/70 sm:text-5xl">
            Client stories
          </h2>
        </div>

        <TestimonialCarousel />
      </section>

      <section id="brands" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Trusted tools and platforms</p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-200">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/70">
              Schedule
            </p>
            <h2 className="mt-3 text-display text-4xl font-semibold text-white sm:text-5xl">
              Book a consultation
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
              The booking area is designed for a public scheduling link, so visitors
              can move straight from interest to a consultation without friction.
            </p>
          </div>

          <ZohoCalendar />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Contact</p>
            <h2 className="mt-3 text-display text-4xl font-semibold text-white sm:text-5xl">
              Tell us what’s slowing your business down
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
              Use the form to share your goals, current tools, and biggest pain points. We’ll reply with a clear next step and a path to a cleaner workflow.
            </p>

            <div className="mt-6 space-y-3 text-slate-300">
              <div className="rounded-2xl text-lg border border-white/10 bg-white/5 px-4 py-3">contact@paxonflow.dev</div>
              <div className="rounded-2xl text-lg border border-white/10 bg-white/5 px-4 py-3">Response time: within 1 business day</div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/8 bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Image src={Logo} alt="Paxonflow Logo" className="h-10 w-10 float-left rounded-2xl ring-1 ring-amber-300/25 mr-8" />
            <p className="text-display text-xl font-semibold text-white">PAXONFLOW</p><br />
            <p className="mt-2 text-sm text-slate-400">
              Workflow automation for insurance agencies and small businesses.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {navItems.slice(0, 5).map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white/8 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/8 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} PaxonFlow. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
