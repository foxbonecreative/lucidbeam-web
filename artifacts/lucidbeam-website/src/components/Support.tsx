export default function Support() {
  return (
    <section id="support" className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="section-divider mb-16" />

        <div className="card-glass rounded-2xl p-10 sm:p-14 glow-cyan relative overflow-hidden">
          {/* Subtle glow decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[hsl(174_72%_56%/0.06)] blur-3xl rounded-full" />
          </div>

          <div className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest lb-cyan mb-4 block">Support</span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Believe in independent tools?
            </h2>

            <p className="text-[hsl(215_20%_60%)] leading-relaxed mb-8 max-w-md mx-auto">
              LucidBeam is free to use. If you find value in privacy-first, independent software — you can help keep it going here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://buymeacoffee.com/aaronpeekn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 rounded-lg btn-primary text-base font-semibold glow-cyan-sm"
              >
                Support the Project
              </a>
              <a
                href="https://web-scraper-tool-aaronpeek.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 rounded-lg btn-ghost text-base"
              >
                Try LucidBeam
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
