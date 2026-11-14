"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const animation = (values: number[], duration: number, delay = 0) => reduceMotion ? {} : {
    animate: { y: values }, transition: { duration, delay, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }
  };

  return <section id="top" className="hero-grain mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-8 px-5 py-16 sm:px-6 md:grid-cols-2 md:gap-16 md:py-20">
    <div className="max-w-2xl">
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#5f6f52]">Веб-разработчик · React / Next.js</p>
      <h1 className="text-4xl font-bold tracking-[-0.065em] text-[#1a1a1a] sm:text-5xl md:text-7xl">Максим Вертезе<span className="text-[#c2410c]">.</span></h1>
      <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#1a1a1a] sm:text-3xl">Веб, который работает.</h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-[#536056] sm:text-lg">Создаю быстрые продукты на React и Next.js для стартапов и студий.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {["Python", "Next.js", "React", "TypeScript", "Tailwind", "Sanity"].map((tech) => <span key={tech} className="rounded-full border border-gray-200 bg-white/60 px-4 py-2 text-sm font-medium text-[#1a1a1a] shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#6b705c]/30 hover:shadow-md">{tech}</span>)}
      </div>
      <div className="mt-9 flex flex-wrap gap-3">
        <a href="#contacts" className="focus-ring min-h-[44px] rounded-full bg-[#5f6f52] px-6 py-3.5 font-bold text-white transition-transform duration-150 hover:scale-105 hover:bg-[#4f5d42] active:scale-95">Связаться со мной</a>
        <a href="#cases" className="bg-white text-[#1A1A1A] border border-[#6B705C]/40 hover:bg-[#F8F9F7] hover:border-[#6B705C] active:scale-95 transition-all duration-200 font-medium rounded-full px-8 py-4 min-h-[48px] shadow-sm">Мои кейсы ↓</a>
      </div>
      <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"><h3 className="text-sm font-bold text-[#1a1a1a]">Быстрая загрузка</h3><p className="mt-1 text-xs text-gray-500">Сайт работает менее чем за 1 секунду</p></div>
        <div className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"><h3 className="text-sm font-bold text-[#1a1a1a]">Адаптивность</h3><p className="mt-1 text-xs text-gray-500">Идеально на любом устройстве</p></div>
        <div className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"><h3 className="text-sm font-bold text-[#1a1a1a]">SEO-оптимизация</h3><p className="mt-1 text-xs text-gray-500">Видимость в поисковых системах</p></div>
      </div>
    </div>
    <div className="relative mx-auto h-[400px] w-full max-w-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#b5d56a] to-[#7ec8c8] p-7 shadow-xl sm:h-[450px]">
      <div className="relative z-10"><p className="font-bold tracking-tight">🟢 ОТКРЫТ К НОВЫМ ПРОЕКТАМ</p><p className="mt-2 text-sm text-[#38574f]">Отвечаю в течение 24 часов</p></div>
      <motion.div {...animation([-10, 10], 4)} className="absolute -bottom-[4.5rem] -right-12 size-72 rounded-full shadow-lg blur-sm" style={{ background: "radial-gradient(circle at 30% 30%, #FDBA74 0%, #F97316 50%, #EA580C 100%)" }} />
      <motion.div {...animation([-15, 5], 3, 0.5)} className="absolute -bottom-5 left-7 size-[9.5rem] rounded-full shadow-lg blur-sm" style={{ background: "radial-gradient(circle at 30% 30%, #FDA4AF 0%, #FB7185 50%, #E11D48 100%)" }} />
      <motion.div {...animation([-8, 8], 2.5, 1)} className="absolute bottom-[6.5rem] left-[46%] size-[4.5rem] rounded-full shadow-lg blur-sm" style={{ background: "radial-gradient(circle at 30% 30%, #FDE68A 0%, #FBBF24 50%, #F59E0B 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#7ec8c8]/50 to-transparent" />
    </div>
  </section>;
}
