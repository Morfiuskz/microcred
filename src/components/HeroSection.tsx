import { ArrowRight, Clock3 } from "lucide-react";
import heroImage from "../../assets/hero-veranda.jpg";
import { Firefly } from "./Firefly";

export function HeroSection() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden bg-bg">
      <img
        src={heroImage}
        alt="Тихая вечерняя веранда обычного дома с видом на степь и горы Казахстана"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#071827_0%,rgba(7,24,39,0.96)_25%,rgba(7,24,39,0.74)_47%,rgba(7,24,39,0.16)_78%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,24,39,0.68)_0%,rgba(7,24,39,0.1)_42%,#071827_100%)]" aria-hidden="true" />
      <Firefly />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-24 pt-32 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-text-secondary backdrop-blur">
            <Clock3 size={16} aria-hidden="true" />
            Здесь не продают займ. Здесь помогают разобраться.
          </p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-text sm:text-5xl md:text-7xl">
            Прежде чем оформить микрокредит — разберитесь спокойно
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary">
            microcredit.kz помогает понять, как работают микрокредиты в Казахстане, какие есть риски, на что смотреть в договоре и когда лучше поискать другой вариант.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg shadow-glow transition hover:bg-[#FFD15A] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-bg" href="#about">
              Разобраться в микрокредитах
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="inline-flex items-center justify-center rounded-md border border-accent/55 px-5 py-3 text-sm font-semibold text-text transition hover:bg-accent-soft focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-bg" href="#overdue">
              Что делать при просрочке
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
