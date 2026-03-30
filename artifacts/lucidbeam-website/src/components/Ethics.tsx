import { useState } from "react";

export default function Ethics() {
  const [charterOpen, setCharterOpen] = useState(false);

  return (
    <>
      <section id="ethics" className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-16" />

          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest lb-cyan mb-3 block">Ethics</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Built without surveillance incentives
            </h2>
            <p className="text-[hsl(215_20%_60%)] leading-relaxed max-w-2xl mx-auto">
              Most video platforms make money by keeping you on-site as long as possible. They do this through recommendation loops, notification triggers, and behavioral profiling. LucidBeam is designed around a different idea: help you research what you came for, then let you leave.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "No accounts required",
              "No behavioral profiling",
              "No selling user data",
              "No manipulative recommendations",
              "No addictive loop design",
              "No screen-time maximization",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[hsl(174_72%_56%/0.15)] bg-[hsl(174_72%_56%/0.04)]">
                <svg className="w-4 h-4 lb-cyan flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm text-[hsl(210_40%_85%)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setCharterOpen(!charterOpen);
                if (!charterOpen) {
                  setTimeout(() => {
                    const el = document.getElementById("ethics-charter");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg btn-ghost text-sm"
            >
              {charterOpen ? "Hide" : "Read"} the full charter
              <svg
                className={`w-4 h-4 transition-transform ${charterOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {charterOpen && <EthicsCharter />}
    </>
  );
}

function EthicsCharter() {
  return (
    <section id="ethics-charter" className="py-16 px-4 sm:px-6 bg-[hsl(222_47%_5%)]">
      <div className="max-w-3xl mx-auto">
        <div className="section-divider mb-12" />
        <h2 className="text-2xl font-bold text-white mb-3">LucidBeam Ethics & Trust Charter</h2>
        <p className="text-sm text-[hsl(215_20%_50%)] mb-10">Plain English. No legal theatre.</p>

        <div className="space-y-10">
          {CHARTER_SECTIONS.map((section) => (
            <div key={section.title} className="border-l-2 border-[hsl(174_72%_56%/0.3)] pl-5">
              <h3 className="text-base font-semibold lb-cyan mb-2">{section.title}</h3>
              <p className="text-[hsl(215_20%_60%)] text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CHARTER_SECTIONS = [
  {
    title: "Core Promise",
    body: "LucidBeam will not collect your personal data, sell your information to third parties, or design features intended to maximize your time on screen. The tool exists to help you find what you're looking for, not to trap you in a loop.",
  },
  {
    title: "Purpose",
    body: "LucidBeam is a focused research interface for YouTube. It is designed for people who want to search with intention — researchers, learners, and professionals who need relevant video content without algorithmic noise.",
  },
  {
    title: "What LucidBeam Is",
    body: "A privacy-respecting front end that routes YouTube searches through a backend proxy. It shows you results, lets you apply filters, and gets out of the way. Your search preferences and channel exclusions are stored locally in your browser.",
  },
  {
    title: "What LucidBeam Is Not",
    body: "LucidBeam is not a replacement for YouTube. It does not host videos. It does not have its own recommendation engine. It does not build a profile of your interests over time. It does not have an advertising business.",
  },
  {
    title: "Privacy by Design",
    body: "There is no account system in the current user flow. You do not create a profile. Your filter choices and excluded channels live in your browser's local storage — they do not leave your device. LucidBeam does not log which searches you perform.",
  },
  {
    title: "Infrastructure Reality",
    body: "LucidBeam uses the YouTube Data API through a server-side proxy. Your YouTube API key stays server-side and is never exposed to the browser. The search request is sent to YouTube through LucidBeam's backend, and results are returned to you.",
  },
  {
    title: "Third Parties",
    body: "LucidBeam may use an optional third-party AI service to score content and help identify likely AI-generated or low-quality videos. If that service is unavailable or not configured, the filter fails open — meaning search still works, the filter is simply skipped.",
  },
  {
    title: "Monetisation",
    body: "LucidBeam is free to use. It is supported by voluntary donations via Buy Me a Coffee. There are no ads, no sponsored results, no paid placement, and no subscription tiers that restrict access to basic functionality.",
  },
  {
    title: "Measurement",
    body: "LucidBeam may collect minimal operational metrics such as server request counts for the purpose of keeping the service running. No personally identifying information is collected or retained as part of this.",
  },
  {
    title: "Limitations",
    body: "LucidBeam depends on the YouTube Data API and is subject to its availability and rate limits. Some filters are interface-level controls and do not represent deep backend ranking logic. Results reflect what YouTube's API returns, filtered and sorted by your preferences.",
  },
  {
    title: "Future-Lock Commitments",
    body: "If the direction of LucidBeam were to change materially — for example if an account system or behavioral tracking were introduced — that change would be communicated clearly and would not happen without notice. The current model is no accounts, no tracking.",
  },
  {
    title: "Final Statement",
    body: "LucidBeam is an independent project. It is not backed by venture capital, advertising revenue, or a data brokerage. It exists because one person believed it was worth building. The goal is a search tool that respects your time and your privacy.",
  },
];
