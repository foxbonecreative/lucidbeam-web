export default function Founder() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest lb-cyan mb-3 block">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Made by Aaron</h2>
        </div>

        <div className="card-glass rounded-2xl p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(174_72%_56%/0.3)] to-[hsl(195_80%_60%/0.2)] border border-[hsl(174_72%_56%/0.3)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="hsl(174 72% 56%)" strokeWidth="1.5" className="w-9 h-9">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white mb-1">Aaron</h3>
              <p className="text-sm lb-cyan mb-5">Independent creator & developer</p>

              <div className="space-y-4 text-[hsl(215_20%_60%)] text-sm leading-relaxed">
                <p>
                  I built LucidBeam out of frustration with how most video platforms work. The recommendations are designed to keep you watching, not to help you learn. The discovery mechanisms reward engagement bait over genuine content. And the whole thing is held together by behavioral surveillance.
                </p>
                <p>
                  I wanted a research tool that just showed me relevant videos for a topic — without the noise, without the manipulation, and without logging everything I search for. LucidBeam is that tool.
                </p>
                <p>
                  It's an independent project. No VC funding, no ad model, no growth-at-all-costs mandate. Just a cleaner way to find videos when you're trying to learn something.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
