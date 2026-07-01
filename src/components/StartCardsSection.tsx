import { ArrowRight } from "lucide-react";
import { startCards } from "../data/sections";

export function StartCardsSection() {
  return (
    <section className="bg-bg-2 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="section-kicker">Маршрут</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">С чего начать</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {startCards.map(({ title, text, icon: Icon }) => (
            <article key={title} className="section-card min-h-64">
              <Icon className="text-accent" size={28} aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-8 text-text-secondary">{text}</p>
              <ArrowRight className="mt-7 text-accent" size={21} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

