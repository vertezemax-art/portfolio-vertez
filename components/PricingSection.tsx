"use client";

const telegramUrl = (message: string) => `https://t.me/verteze_m?text=${encodeURIComponent(message)}`;

export default function PricingSection() {
  const plans = [
    {
      name: "Лендинг / One Page",
      description: "Одностраничный сайт или промо-страница, которая загружается мгновенно.",
      price: "от 30 000 ₽",
      features: ["Дизайн + верстка на Next.js", "Адаптивность под все устройства", "Базовое SEO и аналитика", "Срок: 5–7 дней", "14 дней поддержки после запуска"],
      buttonText: "Заказать лендинг",
      buttonLink: telegramUrl("Здравствуйте! Хочу заказать лендинг. Расскажите подробнее."),
      popular: false,
    },
    {
      name: "Полная разработка",
      description: "Многостраничный сайт или веб-приложение с админкой на Sanity CMS.",
      price: "от 80 000 ₽",
      features: ["До 10 уникальных страниц", "Интеграция Sanity CMS для контента", "Высокая производительность (Lighthouse 90+)", "Доступность (Accessibility AA)", "Срок: 3–5 недель", "30 дней поддержки после запуска"],
      buttonText: "Обсудить проект",
      buttonLink: telegramUrl("Здравствуйте! Интересует полная разработка сайта. Давайте обсудим."),
      popular: true,
    },
    {
      name: "Технический партнер",
      description: "Выделенный разработчик для поддержки и развития вашего продукта.",
      price: "от 40 000 ₽ / мес",
      features: ["20 часов работы в месяц", "Приоритетная поддержка (ответ в день обращения)", "Доработка функционала и фиксы", "Мониторинг производительности", "Пауза или отмена в любой момент"],
      buttonText: "Стать партнером",
      buttonLink: telegramUrl("Здравствуйте! Хочу обсудить техническое партнерство и поддержку."),
      popular: false,
    },
  ];

  return <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
    <div className="mb-14 text-center"><p className="mb-4 text-sm font-bold tracking-wider text-[#5f6f52]">03 / УСЛУГИ И ЦЕНЫ</p><h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-6xl">Три формата сотрудничества.</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-[#536056]">Прозрачные условия. Фиксированная цена. Никаких скрытых платежей.</p></div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {plans.map((plan) => <div key={plan.name} className={`relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${plan.popular ? "border-[#6B705C] shadow-md" : "border-gray-100 shadow-sm"}`}>
        {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6B705C] px-4 py-1 text-xs font-bold text-white">ПОПУЛЯРНЫЙ ВЫБОР</div>}
        <h3 className="mb-3 text-xl font-bold text-[#1A1A1A]">{plan.name}</h3><p className="mb-6 min-h-[40px] text-sm text-[#536056]">{plan.description}</p>
        <div className="mb-8"><span className="text-4xl font-bold tracking-tight text-[#1A1A1A]">{plan.price}</span></div>
        <ul className="mb-8 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-[#536056]"><svg className="mt-0.5 h-5 w-5 shrink-0 text-[#6B705C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{feature}</span></li>)}</ul>
        <a href={plan.buttonLink} target="_blank" rel="noopener noreferrer" className={`block min-h-[44px] w-full rounded-xl px-6 py-3 text-center font-medium transition-transform duration-150 active:scale-95 ${plan.popular ? "bg-[#1A1A1A] text-white hover:bg-[#78A348]" : "border border-[#78A348] bg-white text-[#1A1A1A] hover:bg-[#78A348] hover:text-white"}`}>{plan.buttonText}</a>
      </div>)}
    </div>
    <p className="mt-10 text-center text-xs text-[#536056]">Фиксированная цена после 30-минутного звонка. Без скрытых платежей — никогда.</p>
  </section>;
}
