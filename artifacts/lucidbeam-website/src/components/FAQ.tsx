import { useState } from "react";

const FAQS = [
  {
    q: "What is LucidBeam?",
    a: "LucidBeam is a privacy-first video research interface built on top of YouTube. It lets you search for videos with filtering controls that you choose, without an account, without tracking, and without a recommendation algorithm designed to keep you watching indefinitely.",
  },
  {
    q: "Is LucidBeam free?",
    a: "Yes, LucidBeam is free to use. It's an independent project supported by voluntary donations via Buy Me a Coffee. There are no paywalls, no subscription tiers, and no ads.",
  },
  {
    q: "Do I need an account?",
    a: "No. LucidBeam has no account system. You open the tool, search for a topic, and browse results. Your filter preferences are saved locally in your browser — not in any database.",
  },
  {
    q: "Does LucidBeam track me?",
    a: "LucidBeam is designed not to. There's no behavioral profiling, no cross-session tracking, and no selling of user data. Your search preferences and channel exclusions live in your browser's local storage. The service may collect minimal operational metrics (like server request counts) to keep things running, but not personally identifying information.",
  },
  {
    q: "Why did you build this?",
    a: "Frustration. Most video platforms use recommendation loops and behavioral tracking to maximize screen time — not to help you actually learn something. LucidBeam is an attempt to build a research tool that respects your intent: you search for something, you get relevant results, and you leave when you're done.",
  },
  {
    q: "Does LucidBeam replace YouTube?",
    a: "No. LucidBeam is a search interface that uses the YouTube Data API. It doesn't host videos and doesn't replace YouTube itself — it just gives you a cleaner, more controlled way to find videos on a topic.",
  },
  {
    q: "How does AI filtering work?",
    a: "LucidBeam can use an optional AI scoring service to help identify and exclude likely AI-generated or low-quality clickbait from results. If that service is unavailable or not configured, the filter fails open — meaning search still works normally, and the filter is simply not applied. It's designed not to break your experience.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[hsl(217_32%_14%)]">
      <button
        className="w-full text-left py-5 flex justify-between items-center gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-medium text-[hsl(210_40%_90%)] group-hover:text-white transition-colors">
          {q}
        </span>
        <svg
          className={`w-4 h-4 flex-shrink-0 lb-cyan transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-sm text-[hsl(215_20%_58%)] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-[hsl(222_47%_5%)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest lb-cyan mb-3 block">Questions</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FAQ</h2>
        </div>

        <div>
          {FAQS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
