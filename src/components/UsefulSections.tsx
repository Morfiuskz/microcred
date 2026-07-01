import { usefulSections } from "../data/sections";

export function UsefulSections() {
  return (
    <section id="questions" className="bg-bg py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Полезные разделы</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Короткие ответы по ситуации</h2>
          </div>
          <p className="max-w-md leading-8 text-text-secondary">
            Разделы будут развиваться как библиотека спокойных практических материалов.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {usefulSections.map(({ title, text, icon: Icon }) => (
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

