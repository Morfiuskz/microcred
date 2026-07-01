import { useMemo, useState } from "react";
import { Check, Minus } from "lucide-react";
import { selfCheckQuestions } from "../data/sections";

export function SelfCheckSection() {
  const [checked, setChecked] = useState<string[]>([]);
  const allChecked = checked.length === selfCheckQuestions.length;
  const message = useMemo(
    () =>
      allChecked
        ? "Хорошо. Теперь изучите условия конкретной МФО и проверьте договор."
        : "Если хотя бы один пункт вызывает сомнение, лучше не спешить с оформлением.",
    [allChecked],
  );

  const toggle = (question: string) => {
    setChecked((current) => (current.includes(question) ? current.filter((item) => item !== question) : [...current, question]));
  };

  return (
    <section className="bg-bg-2 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="section-kicker">Самопроверка</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Проверьте себя за 30 секунд</h2>
          <p className="mt-5 max-w-md leading-8 text-text-secondary">
            Это не игровой тест и не разрешение на заем. Это спокойная проверка перед серьезным решением.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-4 shadow-deep sm:p-6">
          <div className="space-y-3">
            {selfCheckQuestions.map((question) => {
              const active = checked.includes(question);
              return (
                <button
                  key={question}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggle(question)}
                  className="flex w-full items-start gap-4 rounded-md border border-border bg-surface-2/60 p-4 text-left transition hover:border-accent/45 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border ${active ? "border-accent bg-accent text-bg" : "border-white/20 text-text-muted"}`}>
                    {active ? <Check size={15} aria-hidden="true" /> : <Minus size={15} aria-hidden="true" />}
                  </span>
                  <span className="leading-7 text-text-secondary">{question}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-5 rounded-md border border-accent/20 bg-accent-soft p-5">
            <p className="text-sm text-text-muted">Отмечено {checked.length} из {selfCheckQuestions.length}</p>
            <p className="mt-2 text-xl font-semibold text-text">{message}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

