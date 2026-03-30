export default function Founder() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest lb-cyan mb-3 block">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Made by Aaron</h2>
        </div>

        <div className="card-glass rounded-2xl p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Portrait — centered on mobile, left-anchored on desktop */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div
                className="overflow-hidden"
                style={{
                  width: "440px",
                  maxWidth: "100%",
                  height: "540px",
                  borderRadius: "16px",
                  border: "2px solid hsl(174 72% 56% / 0.35)",
                  boxShadow: "0 0 0 4px hsl(174 72% 56% / 0.07), 0 4px 24px hsl(174 72% 56% / 0.12)",
                }}
              >
                <img
                  src="/aaron-profile.jpg"
                  alt="Aaron, founder of LucidBeam"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white mb-1">Aaron</h3>
              <p className="text-sm lb-cyan mb-6">Independent creator & developer</p>

              <div className="w-10 h-px bg-[hsl(174_72%_56%/0.25)] mb-6 mx-auto sm:mx-0" />

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
