import { defineField, defineType } from "sanity";

export const caseType = defineType({
  name: "case",
  title: "Кейс",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Название", type: "string", validation: rule => rule.required() }),
    defineField({ name: "status", title: "Статус на сайте", type: "string", initialValue: "draft", options: { list: [{ title: "Черновик", value: "draft" }, { title: "Опубликован", value: "published" }] }, validation: rule => rule.required() }),
    defineField({ name: "publishedAt", title: "Дата публикации", type: "datetime" }),
    defineField({ name: "cover", title: "Обложка", type: "image", options: { hotspot: true } }),
    defineField({ name: "summary", title: "Суть в одну строку", type: "text", rows: 2, validation: rule => rule.required().max(180) }),
    defineField({ name: "category", title: "Категория", type: "string", validation: rule => rule.required() }),
    defineField({ name: "role", title: "Моя роль", type: "string", validation: rule => rule.required() }),
    defineField({ name: "period", title: "Сроки", type: "string", validation: rule => rule.required() }),
    defineField({ name: "challenge", title: "Задача или проблема", type: "text", rows: 5, validation: rule => rule.required() }),
    defineField({ name: "process", title: "Процесс", type: "array", of: [{ type: "object", fields: [defineField({ name: "title", title: "Этап", type: "string", validation: rule => rule.required() }), defineField({ name: "text", title: "Решение / описание", type: "text", rows: 4, validation: rule => rule.required() })] }] }),
    defineField({ name: "tools", title: "Инструменты", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "result", title: "Результат и выводы", type: "text", rows: 5, validation: rule => rule.required() }),
  ],
  preview: { select: { title: "title", subtitle: "status", media: "cover" } },
});
