import logo from "../../assets/logo.png";
import { navigation } from "../data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12 text-text">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.7fr_1fr] md:px-8">
        <div>
          <img src={logo} alt="microcredit.kz" className="h-12 w-auto rounded-sm bg-white/96 object-contain p-1" />
          <p className="mt-4 text-sm text-text-muted">понятно. честно. для людей.</p>
          <p className="mt-5 max-w-md leading-7 text-text-secondary">
            Независимый портал о микрокредитах в Казахстане. Мы не выдаем займы, не подбираем кредиторов и не принимаем заявки.
          </p>
        </div>
        <nav aria-label="Навигация в подвале" className="grid content-start gap-3 text-sm text-text-secondary">
          {navigation.map((item) => (
            <a key={item.href} className="hover:text-text focus:outline-none focus:ring-2 focus:ring-accent" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          <p className="leading-7 text-text-secondary">
            Сайт носит информационный характер и не является микрофинансовой организацией. Материалы не являются финансовой, юридической или инвестиционной консультацией.
          </p>
          <p className="mt-6 text-sm text-text-muted">© 2026 microcredit.kz</p>
        </div>
      </div>
    </footer>
  );
}
