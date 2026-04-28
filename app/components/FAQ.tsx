'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Сколько стоит корпоративная программа?', a: 'Стоимость зависит от формата, длительности и количества участников. Мы формируем предложение после брифинга — напишите нам, и мы подготовим расчёт под вашу задачу.' },
  { q: 'Сколько времени занимает подготовка программы?', a: 'Для готовых программ (Multimedia Foundation, Weekend Bootcamp) — запуск возможен в течение 2–3 недель. Кастомная программа — от 3 до 6 недель на разработку и согласование.' },
  { q: 'Можно ли оплатить от юрлица?', a: 'Да, мы работаем с юридическими лицами. Оформляем договор, выставляем счёт, предоставляем закрывающие документы.' },
  { q: 'Обязательно ли ехать в Нижний Новгород?', a: 'Нет — есть полностью онлайн-формат. Но офлайн-практика на технической базе — наш главный дифференциатор. 83% студентов выбирают тариф с выездом.' },
  { q: 'Какой минимальный размер группы?', a: 'Мы работаем с группами от 3–5 человек. Для индивидуальных запросов тоже найдём решение — обсудим на брифинге.' },
  { q: 'Возможно ли совмещать обучение с работой?', a: 'Да, программы построены так, чтобы совмещать с основной деятельностью. Лекции в записи, вебинары вечером, офлайн-практика на выходных.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
        FAQ
      </h2>

      <div className="w-full border-t-2 border-black">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-gray-300">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-6 flex items-center justify-between gap-8"
            >
              <span className="text-sm font-medium text-black">{f.q}</span>
              <span className="text-2xl text-black shrink-0 leading-none">
                {open === i ? '−' : '+'}
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
              <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
