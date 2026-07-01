import { risks } from "../data/sections";

export function RisksSection() {
  return (
    <section id="risks" className="bg-bg-2 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Риски без запугивания</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Спокойно о неприятных последствиях</h2>
          <p className="mt-5 leading-8 text-text-secondary">
            Риски не нужны, чтобы напугать. Они нужны, чтобы увидеть полную картину до того, как решение станет дорогим.
          </p>
        </div>
        <div id="overdue" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {risks.map(({ title, text, icon: Icon }) => (
            <article key={title} className="section-card">
              <Icon className="text-accent" size={24} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-text-secondary">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

