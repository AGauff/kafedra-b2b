'use client'
import { useState } from 'react'

const segments = [
  {
    title: 'Продуктовые команды',
    problem: 'Долгое прототипирование, сложности с визуальным представлением идей',
    action: 'Обучаем создавать интерактивные демо и визуальные прототипы на основе мультимедиа-инструментов',
    result: 'Ускорение проверки гипотез и повышение качества коммуникации',
  },
  {
    title: 'Event-команды',
    problem: 'Слабое понимание возможностей технологий и ошибки в тех. требованиях продакшна',
    action: 'Практикуем навыки на реальных мультимедиа-сетапах — свет, лазеры, экраны, техническая интеграция',
    result: 'Качественные тех. требования, реалистичные концепции мероприятий',
  },
  {
    title: 'Креативные команды',
    problem: 'Интерпретация идей не соответствует техническим возможностям, слабые питчи',
    action: 'Обучаем мультимедиа-пайплайну и продакшну, чтобы концепции были технически реализуемы',
    result: 'Более сильные, убедительные концепции и питчи',
  },
  {
    title: 'Дизайн-команды',
    problem: 'Недостаток мультимедиа- и motion-мышления, инструменты ограничены',
    action: 'Обучаем структуре мультимедиа-пайплайна и методам визуализации в динамике',
    result: 'Интересные решения, расширение инструментов и возможностей',
  },
  {
    title: 'R&D и инновации',
    problem: 'Сложно быстро тестировать новые форматы и технологии, недостаток экспериментальной среды',
    action: 'Предоставляем практическую среду для быстрых экспериментов',
    result: 'Больше готовых прототипов, проверка идей в реальных условиях',
  },
]

export default function Audience() {
  const [active, setActive] = useState(0)
  const seg = segments[active]

  return (
    <section className="w-full px-8 md:px-16 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
        Кому подходят программы
      </h2>

      {/* Табы */}
      <div className="flex flex-wrap gap-2 mb-10">
  {segments.map((s, i) => (
    <button
      key={i}
      onClick={() => setActive(i)}
      className={`px-4 py-2 text-xs font-bold tracking-widest transition-colors border border-black ${
        active === i
          ? 'bg-white text-black'
          : 'bg-black text-white hover:bg-white hover:text-black'
      }`}
    >
      {s.title}
    </button>
  ))}
</div>

      {/* Контент */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Левая колонка — текст */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">Проблема</span>
            <p className="text-sm text-black leading-relaxed">{seg.problem}</p>
          </div>
          <div>
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">Что мы делаем</span>
            <p className="text-sm text-black leading-relaxed">{seg.action}</p>
          </div>
          <div>
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">Результат</span>
            <p className="text-sm text-black leading-relaxed">{seg.result}</p>
          </div>
        </div>

        {/* Правая колонка — плейсхолдер */}
        <div className="w-full bg-gray-100" style={{ height: '360px' }} />
      </div>
    </section>
  )
}