export default function Footer() {
  return (
    <footer className="border-t border-[hsl(217_32%_12%)] py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/lucidbeam-logo.png"
              alt="LucidBeam"
              className="h-7 w-auto rounded"
            />
            <span className="text-xs text-[hsl(215_20%_45%)]">
              An independent project.
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a
              href="https://web-scraper-tool-aaronpeek.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[hsl(215_20%_50%)] hover:text-[hsl(174_72%_56%)] transition-colors"
            >
              Try LucidBeam
            </a>
            <a
              href="https://buymeacoffee.com/aaronpeekn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[hsl(215_20%_50%)] hover:text-[hsl(174_72%_56%)] transition-colors"
            >
              Support the Project
            </a>
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-[hsl(217_32%_10%)] text-center">
          <p className="text-xs text-[hsl(215_20%_35%)]">
            Privacy-first. No tracking. No accounts. No selling data.
          </p>
        </div>
      </div>
    </footer>
  );
}
