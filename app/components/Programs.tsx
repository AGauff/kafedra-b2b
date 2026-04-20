'use client'
import { useState } from 'react'

const programs = [
  {
    title: 'Multimedia Foundation',
    problem: 'Командам не хватает навыков и понимания того, как устроены и реализуются мультимедиа-проекты.',
    solution: 'Практическая программа, покрывающая весь путь: идея → концепция → визуал → продакшн → техническая сборка и презентация.',
    directions: null,
    results: [
      'Понимание полного мультимедиа-пайплайна — как проект проходит путь от идеи до технической реализации',
      'Умение проектировать концепцию под реальные технические возможности',
      'Навык работы с визуальными системами и их ограничениями: экраны, свет, лазеры',
      'Подготовка контента с учётом технических требований',
      'Умение ставить точные задачи подрядчикам и техническим командам',
    ],
  },
  {
    title: 'Weekend Bootcamps',
    problem: 'Команды нуждаются в быстром, сфокусированном обучении без отрыва от основной работы.',
    solution: 'Интенсивные практические программы, основанные на работе с реальным оборудованием.',
    directions: [
      { name: 'Multimedia Bootcamp', desc: 'Прототипирование сцены, инсталляции, визуального решения' },
      { name: 'Technical Bootcamp', desc: 'Практика на оборудовании: свет, лазеры, LED-экраны, управление сетапом' },
    ],
    results: [
      'Готовый прототип решения',
      'Повышение технической грамотности',
      'Командная синхронизация и общее видение',
    ],
  },
]

export default function Programs() {
  const [active, setActive] = useState(0)
  const prog = programs[active]

  return (
    <section className="w-full px-8 md:px-16 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">Программы</h2>

      {/* Табы */}
      <div className="flex flex-wrap gap-2 mb-10">
        {programs.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-xs font-bold tracking-widest transition-colors border border-black ${
              active === i
                ? 'bg-white text-black'
                : 'bg-black text-white hover:bg-white hover:text-black'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Контент */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <div>
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">Проблема</span>
            <p className="text-sm text-black leading-relaxed">{prog.problem}</p>
          </div>

          <div>
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">Решение</span>
            <p className="text-sm text-gray-500 leading-relaxed">{prog.solution}</p>
          </div>

          {prog.directions && (
            <div>
              <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">Направления</span>
              <div className="space-y-3">
                {prog.directions.map((d, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-black">→ {d.name}</p>
                    <p className="text-sm text-gray-500">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">Результаты для команды</span>
            <ul className="space-y-2">
              {prog.results.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="inline-flex items-center justify-center bg-black text-white text-xs font-bold w-5 h-5 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-black leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full aspect-[4/3] bg-gray-100" />
      </div>
    </section>
  )
}