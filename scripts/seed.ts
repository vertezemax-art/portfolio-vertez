import { config } from "dotenv";
import { createClient } from "@sanity/client";

// Скрипт запускается вне Next.js, поэтому загружаем .env.local самостоятельно.
config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  throw new Error("Не заданы NEXT_PUBLIC_SANITY_PROJECT_ID или SANITY_API_TOKEN в .env.local.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

/**
 * Документы создаются сразу опубликованными: используются обычные _id,
 * а не drafts._id. Повторный запуск безопасен благодаря createIfNotExists.
 */
const cases = [
  {
    _id: "seed-case-taskflow", _type: "case", title: "TaskFlow", status: "published", publishedAt: "2026-11-04T09:00:00.000Z",
    category: "Веб-сервис", summary: "Минималистичный сервис для планирования задач и контроля личного прогресса.", role: "Веб-разработчик", period: "Учебный проект · 3 недели",
    challenge: "Создать спокойный интерфейс, в котором пользователь быстро фиксирует задачу, выбирает приоритет и видит, что уже сделано, без лишних настроек.",
    process: [
      { _key: "taskflow-research", title: "Сценарии", text: "Выделил четыре ключевых действия: добавить задачу, назначить приоритет, сменить статус и отфильтровать список. Это позволило не перегружать главный экран." },
      { _key: "taskflow-ui", title: "Интерфейс", text: "Собрал форму быстрого добавления, список с визуальной иерархией и понятные пустые состояния для новых пользователей." },
      { _key: "taskflow-adaptive", title: "Адаптация", text: "Проверил сценарии на небольших экранах: действия остаются доступны с клавиатуры и без горизонтальной прокрутки." }
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Local Storage"], result: "Получился учебный прототип с понятным путём от создания задачи до отслеживания прогресса. Главный вывод: на старте важнее ясные сценарии и состояния, чем набор дополнительных функций."
  },
  {
    _id: "seed-case-weatherhub", _type: "case", title: "WeatherHub", status: "published", publishedAt: "2026-11-04T09:00:00.000Z",
    category: "Дашборд", summary: "Погодный дашборд с текущими условиями и прогнозом, собранными в одном экране.", role: "Веб-разработчик", period: "Учебный проект · 2 недели",
    challenge: "Наглядно показать несколько видов метеоданных, чтобы пользователь за несколько секунд понимал текущую погоду и мог спланировать день.",
    process: [
      { _key: "weatherhub-data", title: "Модель данных", text: "Определил минимальный набор данных: температура, ощущаемая температура, влажность, ветер и прогноз. Отдельно продумал загрузку, ошибку и отсутствие данных." },
      { _key: "weatherhub-hierarchy", title: "Иерархия", text: "Разделил текущие условия и прогноз по значимости. Крупные значения и пиктограммы помогают быстро считать главное." },
      { _key: "weatherhub-api", title: "Интеграция", text: "Подключил погодный API и нормализовал ответ, чтобы компоненты получали единый формат данных." }
    ],
    tools: ["React", "TypeScript", "Weather API", "CSS"], result: "Собран учебный дашборд с обработкой ключевых состояний интерфейса. Проект закрепил практику интеграции внешнего API и показал ценность продуманной иерархии данных."
  },
  {
    _id: "seed-case-morning-brew", _type: "case", title: "Morning Brew", status: "published", publishedAt: "2026-11-04T09:00:00.000Z",
    category: "Лендинг", summary: "Промо-сайт кофейни с атмосферной подачей меню и быстрым переходом к заказу.", role: "Веб-разработчик", period: "Учебный проект · 1 неделя",
    challenge: "Сделать эмоциональный лендинг, который знакомит с брендом, помогает изучить меню и естественно ведёт к целевому действию.",
    process: [
      { _key: "morningbrew-flow", title: "Сценарий страницы", text: "Выстроил путь от первого впечатления к ассортименту, преимуществам и контактам. Призывы к действию повторяются в нужных точках, но не конкурируют с контентом." },
      { _key: "morningbrew-layout", title: "Адаптивная вёрстка", text: "Собрал гибкую сетку, крупную типографику и карточки меню; проверил читаемость и размер интерактивных элементов на мобильных устройствах." },
      { _key: "morningbrew-a11y", title: "Полировка", text: "Добавил состояния наведения и фокуса, семантическую разметку и поддержку prefers-reduced-motion для пользователей с отключённой анимацией." }
    ],
    tools: ["Next.js", "Tailwind CSS", "Figma", "Vercel"], result: "Готов учебный лендинг с адаптивной подачей и ясным пользовательским путём. В ходе работы отработаны композиция промо-страницы, семантика и доступные интерактивные элементы."
  }
];

async function seed() {
  const results = await Promise.all(cases.map((document) => client.createIfNotExists(document)));
  console.log(`Готово: в dataset «${dataset}» добавлено или найдено ${results.length} учебных кейса.`);
}

seed().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error("Не удалось создать учебные кейсы:", message);
  process.exitCode = 1;
});
