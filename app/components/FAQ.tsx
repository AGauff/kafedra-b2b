'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Сколько стоит корпоративная программа?',
    a: 'Стоимость зависит от формата, длительности и количества участников. Мы формируем предложение после брифинга — напишите нам, и мы подготовим расчёт под вашу задачу.',
  },
  {
    q: 'Сколько времени занимает подготовка программы?',
    a: 'Для готовых программ (Multimedia Foundation, Weekend Bootcamp) — запуск возможен в течение 2–3 недель. Кастомная программа — от 3 до 6 недель на разработку и согласование.',
  },
  {
    q: 'Можно ли оплатить от юрлица?',
    a: 'Да, мы работаем с юридическими лицами. Оформляем договор, выставляем счёт, предоставляем закрывающие документы.',
  },
  {
    q: 'Обязательно ли ехать в Нижний Новгород?',
    a: 'Нет — есть полностью онлайн-формат. Но офлайн-практика на технической базе — наш главный дифференциатор. 83% студентов выбирают тариф с выездом, потому что именно на площадке происходит основное обучение.',
  },
  {
    q: 'Какой минимальный размер группы?',
    a: 'Мы работаем с группами от 3–5 человек. Для индивидуальных запросов тоже найдём решение — обсудим на брифинге.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
        Вопросы
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-12">
        Частые вопросы
      </h2>

      <div className="max-w-2xl">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-gray-200">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-5 pr-10 relative flex items-start gap-4"
            >
              <span className="text-sm font-bold text-black leading-snug">{f.q}</span>
              <span className="absolute right-0 top-5 text-xl text-gray-400 leading-none">
                {open === i ? '−' : '+'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? 'max-h-40 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
