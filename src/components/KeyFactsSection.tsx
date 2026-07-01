import { keyFacts } from "../data/sections";

export function KeyFactsSection() {
  return (
    <section id="rights" className="bg-bg py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="section-kicker">Главное</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Что нужно знать до подписи</h2>
        </div>
        <ol className="grid gap-3">
          {keyFacts.map((fact, index) => (
            <li key={fact} className="flex gap-4 rounded-lg border border-border bg-surface/70 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">{index + 1}</span>
              <span className="pt-1 leading-7 text-text-secondary">{fact}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

