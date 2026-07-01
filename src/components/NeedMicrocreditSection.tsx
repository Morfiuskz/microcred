import { alternatives } from "../data/sections";

export function NeedMicrocreditSection() {
  return (
    <section id="about" className="bg-bg py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Перед решением</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">А микрокредит действительно нужен?</h2>
            <p className="mt-5 max-w-xl leading-8 text-text-secondary">
              Иногда микрокредит может помочь закрыть срочную потребность. Но иногда безопаснее подождать, занять у близких, перенести покупку или найти другой вариант.
            </p>
            <p className="mt-7 rounded-lg border border-accent/25 bg-accent-soft p-5 leading-7 text-text">
              Если другой вариант есть — возможно, стоит сначала рассмотреть его.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {alternatives.map(({ title, text, icon: Icon }) => (
              <article key={title} className="section-card">
                <Icon className="text-accent" size={22} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-text-secondary">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

