import { literacyCards } from "../data/sections";

export function FinancialLiteracySection() {
  return (
    <section id="literacy" className="bg-bg-2 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="section-kicker">Финансовая грамотность</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Спокойное решение начинается с понимания</h2>
          <p className="mt-5 leading-8 text-text-secondary">
            Финансовая грамотность — это не сложные термины. Это умение заранее понять последствия решения и выбрать вариант, который не ухудшит ситуацию.
          </p>
        </div>
        <div className="grid gap-4">
          {literacyCards.map(({ title, text, icon: Icon }) => (
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
