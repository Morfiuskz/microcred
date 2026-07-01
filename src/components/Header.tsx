import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { navigation } from "../data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-bg/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a className="flex items-center gap-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-bg" href="#top">
          <img src={logo} alt="microcredit.kz" className="h-11 w-auto rounded-sm object-contain" />
          <span className="hidden text-xs leading-5 text-text-secondary lg:block">понятно. честно.<br />для людей.</span>
        </a>
        <nav aria-label="Основная навигация" className="hidden items-center gap-7 text-sm text-text-secondary lg:flex">
          {navigation.map((item) => (
            <a key={item.href} className="transition hover:text-text focus:outline-none focus:ring-2 focus:ring-accent" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="hidden rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-bg transition hover:bg-[#FFD15A] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-bg md:inline-flex" href="#about">
          Разобраться
        </a>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-text lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <nav aria-label="Мобильная навигация" className="border-t border-border bg-bg px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <a key={item.href} className="rounded-md px-3 py-3 text-text-secondary hover:bg-surface hover:text-text focus:outline-none focus:ring-2 focus:ring-accent" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
