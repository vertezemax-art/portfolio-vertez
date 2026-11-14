"use client";

import { useEffect, useRef, useState } from "react";
import type { Case } from "@/lib/types";

export default function Cases({ cases }: { cases: Case[] }) {
  const [selected, setSelected] = useState<Case | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selected) return;
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [selected]);

  return <>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cases.map((item, index) => <button key={item._id} onClick={() => setSelected(item)} className="focus-ring group overflow-hidden rounded-2xl border border-[#e5e7e3] bg-[#f5f5f5] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className={`relative aspect-video overflow-hidden ${index % 2 ? "bg-[#e8f5d8]" : "bg-[#e8eeee]"}`} style={item.coverUrl ? { backgroundImage: `url(${item.coverUrl})`, backgroundPosition: "center", backgroundSize: "cover" } : undefined}>
          {!item.coverUrl && <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-[#6b705c]/20" />}
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#1a1a1a] shadow-sm backdrop-blur">{item.category}</span>
        </div>
        <div className="p-6"><h3 className="text-xl font-bold tracking-tight text-[#1a1a1a]">{item.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-[#536056]">{item.summary}</p><div className="mt-6 flex items-center justify-between gap-4 text-sm font-semibold"><span className="text-[#5f6f52]">{item.role}</span><span className="text-[#1a1a1a] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></div></div>
      </button>)}
    </div>
    {selected && <div role="dialog" aria-modal="true" aria-labelledby="case-title" className="fixed inset-0 z-50 flex items-end bg-black/40 p-3 backdrop-blur-sm md:items-center md:justify-center" onMouseDown={() => setSelected(null)}>
      <article className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#fafafa] p-6 shadow-2xl md:p-10" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-6"><div><p className="text-sm font-bold tracking-wide text-[#6b705c]">{selected.category}</p><h2 id="case-title" className="mt-2 text-3xl font-bold tracking-[-0.04em] text-[#1a1a1a] md:text-5xl">{selected.title}</h2></div><button ref={closeButton} onClick={() => setSelected(null)} className="focus-ring rounded-full border border-[#1a1a1a] px-4 py-2 text-sm font-bold text-[#1a1a1a] transition hover:bg-[#1a1a1a] hover:text-white">Закрыть</button></div>
        <div className="mt-10 grid gap-8 text-[#536056] md:grid-cols-2"><Detail title="Задача / проблема"><p>{selected.challenge}</p></Detail><Detail title="Роль и сроки"><p>{selected.role}<br />{selected.period}</p></Detail></div>
        <Detail title="Процесс" className="mt-10"><ol className="grid gap-4 md:grid-cols-2">{selected.process?.map((step, index) => <li key={step.title} className="rounded-2xl bg-white p-5"><span className="text-sm font-bold text-[#6b705c]">0{index + 1}</span><h3 className="mt-2 font-bold text-[#1a1a1a]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#536056]">{step.text}</p></li>)}</ol></Detail>
        <div className="mt-10 grid gap-8 md:grid-cols-2"><Detail title="Инструменты"><ul className="flex flex-wrap gap-2">{selected.tools?.map((tool) => <li key={tool} className="rounded-full border border-[#6b705c]/30 bg-[#a3a894]/20 px-3 py-1 text-sm text-[#1a1a1a]">{tool}</li>)}</ul></Detail><Detail title="Результат и выводы"><p>{selected.result}</p></Detail></div>
      </article>
    </div>}
  </>;
}

function Detail({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return <section className={className}><h3 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#5f6f52]">{title}</h3>{children}</section>;
}
