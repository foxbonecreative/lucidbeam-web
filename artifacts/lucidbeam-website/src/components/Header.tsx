import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Ethics", href: "#ethics" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "#support" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(222_47%_6%/0.95)] backdrop-blur-md border-b border-[hsl(217_32%_14%)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/lucidbeam-logo.png"
              alt="LucidBeam"
              className="h-8 w-auto rounded"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-[hsl(215_20%_65%)] hover:text-[hsl(174_72%_56%)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://buymeacoffee.com/aaronpeekn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 rounded-md btn-ghost"
            >
              Support
            </a>
            <a
              href="https://web-scraper-tool-aaronpeek.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 rounded-md btn-primary"
            >
              Try LucidBeam
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[hsl(215_20%_65%)] hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[hsl(217_32%_14%)] py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-2 py-2.5 text-sm text-[hsl(215_20%_65%)] hover:text-[hsl(174_72%_56%)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="https://buymeacoffee.com/aaronpeekn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-md btn-ghost text-center"
              >
                Support the Project
              </a>
              <a
                href="https://web-scraper-tool-aaronpeek.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-md btn-primary text-center"
              >
                Try LucidBeam
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
