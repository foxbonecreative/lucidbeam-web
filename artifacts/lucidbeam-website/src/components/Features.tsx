const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: "Sort by date",
    desc: "Surface the most recent content first, not what the algorithm decides to promote.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <line x1="4" y1="4" x2="20" y2="20" />
      </svg>
    ),
    label: "Unwatched only",
    desc: "Focus your session on content you haven't seen before.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    label: "Verified channels",
    desc: "Optionally limit results to channels that have verified status on YouTube.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Small creators",
    desc: "Surface independent voices, not just content from large well-funded channels.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    label: "Exclude likely AI-generated",
    desc: "An optional AI scoring service helps filter out likely AI-generated clickbait. If unavailable, filtering fails open so search always works.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    label: "Channel exclusions",
    desc: "Block specific channels you find unhelpful. Your exclusion list lives locally on your device.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 bg-[hsl(222_47%_5%)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest lb-cyan mb-3 block">Controls</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Focused search controls</h2>
          <p className="mt-4 text-[hsl(215_20%_60%)] max-w-xl mx-auto">
            LucidBeam gives you a set of filters to shape your research session. No dark patterns. No hidden ranking adjustments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => (
            <div
              key={feature.label}
              className="card-glass card-glass-hover rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="lb-cyan">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-white mb-1.5">{feature.label}</h3>
                <p className="text-sm text-[hsl(215_20%_55%)] leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[hsl(215_20%_45%)] max-w-lg mx-auto">
          Filter preferences are stored locally in your browser. LucidBeam does not transmit your filter choices to any server.
        </p>
      </div>
    </section>
  );
}
