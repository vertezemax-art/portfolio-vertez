import Cases from "@/components/cases";
import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/PricingSection";
import SiteHeader from "@/components/site-header";
import { getCases } from "@/lib/cases";

const skills = ["Python", "Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity CMS", "Node.js", "Git", "Figma"];

export default async function Home() {
  const cases = await getCases();

  return <main>
    <SiteHeader />
    <HeroSection />

    <section id="about" className="border-y border-[var(--line)] bg-white">
      <div className="mx-auto grid max-w-6xl gap-9 px-5 py-24 sm:px-6 md:grid-cols-[.55fr_1.45fr] md:py-32">
        <p className="text-sm font-bold tracking-[0.14em] text-[#6b705c]">01 / ОБО МНЕ</p>
        <div><h2 className="max-w-3xl text-3xl font-bold tracking-[-0.04em] text-[#1a1a1a] md:text-5xl">Превращаю идеи в работающие веб-продукты.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[#536056]">Разрабатываю веб-приложения на React и Next.js. Фокусируюсь на производительности, чистом коде и пользовательском опыте. Работаю с современными инструментами: TypeScript, Python, Tailwind CSS, Sanity CMS. Открыт к коммерческим проектам и сотрудничеству со стартапами.</p></div>
      </div>
    </section>

    <section id="cases" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-6 md:py-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-bold tracking-[0.14em] text-[#6b705c]">02 / ВЫБРАННЫЕ РАБОТЫ</p><h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-[#1a1a1a] md:text-6xl">Кейсы</h2></div><p className="max-w-xs text-sm leading-6 text-[#536056]">Нажмите на карточку, чтобы открыть задачу, процесс и результат.</p></div>
      <Cases cases={cases} />
    </section>

    <PricingSection />

    <section className="bg-[#1a1a1a] text-white">
      <div className="mx-auto grid max-w-6xl gap-9 px-5 py-24 sm:px-6 md:grid-cols-[.55fr_1.45fr] md:py-32">
        <p className="text-sm font-bold tracking-[0.14em] text-[#6b705c]">03 / НАВЫКИ</p>
        <div><h2 className="text-3xl font-bold tracking-[-0.04em] md:text-5xl">Стек технологий и инструменты</h2><div className="mt-9 flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white">{skill}</span>)}</div></div>
      </div>
    </section>

    <section id="contacts" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-6 md:py-32">
      <p className="text-sm font-bold tracking-[0.14em] text-[#6b705c]">04 / КОНТАКТЫ</p>
      <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.05em] text-[#1a1a1a] md:text-7xl">Есть задача? Давайте обсудим.</h2>
      <div className="mt-10 flex flex-col gap-4 text-lg font-semibold sm:flex-row sm:items-center sm:gap-8"><a className="focus-ring underline decoration-[#6b705c] decoration-4 underline-offset-5" href="mailto:maximpolodipl@gmail.com">maximpolodipl@gmail.com</a><a className="focus-ring text-[#5f6f52] transition hover:text-[#1a1a1a]" href="https://t.me/verteze_m" target="_blank" rel="noreferrer">Telegram: @verteze_m ↗</a></div>
    </section>
    <footer className="border-t border-[var(--line)] px-6 py-7 text-center text-sm text-[#536056]">© 2026 Максим Вертезе</footer>
  </main>;
}
