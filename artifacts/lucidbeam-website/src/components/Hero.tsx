export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex flex-col items-center justify-center pt-16 px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <img
            src="/lucidbeam-logo.png"
            alt="LucidBeam"
            className="h-14 sm:h-16 w-auto rounded-lg"
          />
        </div>

        {/* Privacy badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(174_72%_56%/0.25)] bg-[hsl(174_72%_56%/0.06)] text-xs text-[hsl(174_72%_60%)] mb-8 font-medium tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(174_72%_56%)] animate-pulse inline-block" />
          Privacy-First YouTube Research Tool
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          Search with clarity.{" "}
          <span className="text-gradient-cyan">Learn without the algorithm.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-[hsl(215_20%_62%)] leading-relaxed max-w-2xl mx-auto mb-8">
          LucidBeam helps you find useful videos with less manipulation, less noise, and more control.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://web-scraper-tool-aaronpeek.replit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 rounded-lg btn-primary text-base font-semibold glow-cyan-sm"
          >
            Try LucidBeam
          </a>
          <a
            href="https://buymeacoffee.com/aaronpeekn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 rounded-lg btn-ghost text-base"
          >
            Support the Project
          </a>
        </div>

        {/* Trust line */}
        <p className="text-sm text-[hsl(215_20%_50%)] tracking-wide">
          No accounts.&nbsp; No tracking.&nbsp; No selling data.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-[hsl(215_20%_50%)] tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-[hsl(174_72%_56%)] animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
