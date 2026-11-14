"use client";

import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <>
    <div className="bg-gradient-to-r from-[#7ec8c8] to-[#b5d56a] px-4 py-2 text-center text-xs font-bold text-[#1a1a1a]">
      Доступен с декабря 2026 — два места свободно <span aria-hidden="true">|</span> <a className="focus-ring underline underline-offset-2" href="#contacts">Записаться на звонок →</a>
    </div>
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-[#fafafa]/90"}`}>
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="focus-ring flex items-center gap-2.5 rounded-full font-bold tracking-tight">
          <img src="/icon.png" alt="Логотип" width={32} height={32} className="rounded-full object-cover" />
          <span>Maxim Verteze</span>
        </a>
        <nav aria-label="Основная навигация" className="flex items-center gap-4 text-sm font-semibold sm:gap-6">
          <a className="focus-ring hidden rounded sm:block" href="#about">Обо мне</a>
          <a className="focus-ring hidden rounded sm:block" href="#cases">Кейсы</a>
          <a className="focus-ring hidden rounded sm:block" href="#contacts">Контакты</a>
          <a className="focus-ring min-h-[44px] rounded-full bg-[#5f6f52] px-6 py-2.5 text-white transition-transform duration-150 hover:bg-[#4f5d42] active:scale-95" href="#contacts">Связаться</a>
        </nav>
      </div>
    </header>
  </>;
}
