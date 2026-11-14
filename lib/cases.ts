import { createClient } from "next-sanity";
import type { Case } from "./types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const readToken = process.env.SANITY_API_READ_TOKEN;
const configured = Boolean(projectId);

const demoCases: Case[] = [
  {
    _id: "demo-1", title: "[Название проекта 01]", category: "Корпоративный сайт", role: "Веб-разработчик", period: "[Укажите сроки]",
    summary: "[Одной строкой: какую задачу решает проект.]", challenge: "[Добавьте задачу клиента или проблему, которую требовалось решить.]",
    process: [{ title: "Исследование", text: "[Опишите вводные, аудит и ключевые ограничения.]" }, { title: "Разработка", text: "[Опишите принятые технические и продуктовые решения.]" }],
    tools: ["[Технология]", "[Технология]"], result: "[Добавьте результат, выводы и подтверждённые показатели — без неподтверждённых цифр.]"
  },
  {
    _id: "demo-2", title: "[Название проекта 02]", category: "Веб-сервис", role: "Веб-разработчик", period: "[Укажите сроки]",
    summary: "[Кратко опишите суть работы и ценность для пользователя.]", challenge: "[Добавьте исходную задачу или проблему.]",
    process: [{ title: "Проектирование", text: "[Опишите структуру, логику интерфейса и решения.]" }, { title: "Запуск", text: "[Опишите интеграции, тестирование и публикацию.]" }],
    tools: ["[Технология]", "[Технология]"], result: "[Добавьте результат проекта и ключевые выводы.]"
  },
  {
    _id: "demo-3", title: "[Название проекта 03]", category: "Лендинг", role: "Веб-разработчик", period: "[Укажите сроки]",
    summary: "[Расскажите в одной строке, что было создано.]", challenge: "[Добавьте задачу клиента.]",
    process: [{ title: "Подготовка", text: "[Опишите подготовительный этап.]" }, { title: "Реализация", text: "[Опишите ход работы и важные решения.]" }],
    tools: ["[Технология]", "[Технология]"], result: "[Добавьте результат и то, что вы узнали в ходе работы.]"
  }
];

const query = `*[_type == "case" && status == "published"] | order(publishedAt desc) {
  _id, title, summary, category, role, period, challenge,
  process[]{title, text}, tools, result,
  "coverUrl": cover.asset->url
}`;

export async function getCases(): Promise<Case[]> {
  if (!configured) return demoCases;
  try {
    const client = createClient({ projectId: projectId!, dataset, apiVersion: "2025-01-01", token: readToken, useCdn: !readToken });
    return await client.fetch<Case[]>(query);
  } catch {
    return demoCases;
  }
}
