import { statisticsPlaceholders } from "../data/sections";

export function StatisticsSection() {
  return (
    <section className="bg-bg py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Микрокредиты в цифрах</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Статистика нужна для понимания, а не для страха</h2>
          <p className="mt-5 leading-8 text-text-secondary">
            Данные будут добавляться только из официальных источников. Мы не используем цифры ради давления или сенсации.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statisticsPlaceholders.map((title) => (
            <article key={title} className="section-card">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-5 leading-7 text-text-secondary">Данные будут добавлены из официальных источников.</p>
              <p className="mt-5 text-sm text-text-muted">Источник: будет добавлен</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

