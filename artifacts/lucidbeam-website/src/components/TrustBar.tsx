const TRUST_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privacy-first",
    desc: "No accounts, no profiling, no behavioral data collected.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 3l2.09 6.26L20 10l-5.27 4.87L16.18 21 12 17.77 7.82 21l1.45-6.13L4 10l5.91-.74z" />
      </svg>
    ),
    title: "User-controlled filters",
    desc: "You decide what to include or exclude. Your preferences stay local.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "Cleaner discovery",
    desc: "Research-focused results without manipulative recommendation loops.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Independent project",
    desc: "Built by one person, guided by user interest — not surveillance incentives.",
  },
];

export default function TrustBar() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-divider mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="card-glass card-glass-hover rounded-xl p-5 flex flex-col gap-3"
            >
              <div className="lb-cyan">{item.icon}</div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-[hsl(215_20%_55%)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
