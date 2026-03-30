const STEPS = [
  {
    number: "01",
    title: "Search for a topic",
    desc: "Enter any subject you want to research. LucidBeam routes your query through a backend proxy so your API key stays server-side and your search isn't tied to a personal account.",
  },
  {
    number: "02",
    title: "Refine with focused filters",
    desc: "Apply controls like sort by date, verified channels only, or small creators only. Exclude specific channels or filter out likely AI-generated content. Your filter preferences are stored locally on your device.",
  },
  {
    number: "03",
    title: "Explore results without the noise",
    desc: "Browse a clean, distraction-free list of relevant videos. No autoplay rabbit holes. No recommended content designed to keep you scrolling. Just the results you asked for.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest lb-cyan mb-3 block">Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-4 text-[hsl(215_20%_60%)] max-w-xl mx-auto">
            Three steps to more intentional research.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden sm:block absolute left-[calc(2rem-0.5px)] top-10 bottom-10 w-px bg-gradient-to-b from-[hsl(174_72%_56%/0.4)] via-[hsl(174_72%_56%/0.2)] to-transparent" />

          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-6 sm:gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="step-number w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold tabular-nums relative z-10">
                    {step.number}
                  </div>
                </div>
                <div className="pt-4 pb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-[hsl(215_20%_58%)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
