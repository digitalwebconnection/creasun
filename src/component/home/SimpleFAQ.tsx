
const DEFAULT_ITEMS = [
  { id: "cost", question: "How much does solar cost?", answer: "It depends on system size, equipment, and location. Incentives can reduce net price." },
  { id: "timeline", question: "How long does installation take?", answer: "On-site work is usually 1–3 days; permits/approvals add a few weeks." },
  { id: "maintenance", question: "Do panels need maintenance?", answer: "Minimal. Keep them clear of debris and schedule periodic inspections." },
  { id: "battery", question: "Do I need a battery?", answer: "Not required for grid-tied systems, but useful for backup and self-consumption." },
];

export default function SimpleFAQ({ items = DEFAULT_ITEMS }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Quick answers about solar panel installation.
        </p>
      </header>

      <div className="space-y-3">
        {items.map(({ id, question, answer }) => (
          <details
            key={id}
            className="group rounded-2xl border border-gray-800 bg-white shadow-sm open:shadow transition"
          >
            <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
              <span className="text-base font-semibold text-gray-900">
                {question}
              </span>
              <svg
                className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.06l3.71-2.83a.75.75 0 1 1 .92 1.18l-4.2 3.2a.75.75 0 0 1-.92 0l-4.2-3.2a.75.75 0 0 1-.02-1.2z" />
              </svg>
            </summary>

            <div className="px-5 pb-4">
              <p className="text-sm leading-6 text-gray-700">{answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
