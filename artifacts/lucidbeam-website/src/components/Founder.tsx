export default function Founder() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest lb-cyan mb-3 block">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Made by Aaron</h2>
        </div>

        <div className="card-glass rounded-2xl p-8 sm:p-10">
          {/* Portrait + name block centered at top */}
          <div className="flex flex-col items-center mb-8">
            {/* Portrait */}
            <div
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 mb-5"
              style={{
                border: "2px solid hsl(174 72% 56% / 0.35)",
                boxShadow: "0 0 0 5px hsl(174 72% 56% / 0.07), 0 4px 24px hsl(174 72% 56% / 0.12)",
              }}
            >
              <img
                src="/aaron-profile.jpg"
                alt="Aaron, founder of LucidBeam"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 15%",
                  display: "block",
                }}
              />
            </div>

            {/* Name + title */}
            <h3 className="text-lg font-semibold text-white mb-1">Aaron</h3>
            <p className="text-sm lb-cyan">Independent creator & developer</p>
          </div>

          {/* Subtle divider */}
          <div className="w-12 h-px bg-[hsl(174_72%_56%/0.25)] mx-auto mb-8" />

          {/* Bio */}
          <div className="space-y-4 text-[hsl(215_20%_60%)] text-sm leading-relaxed max-w-xl mx-auto text-center sm:text-left">
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
    </section>
  );
}
