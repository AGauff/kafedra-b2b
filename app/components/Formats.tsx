const formats = [
  {
    tag: 'Online',
    title: 'Онлайн',
    items: [
      'Лекции в записи — смотрите в удобное время',
      'Живые вебинары с экспертами',
      'Доступ к материалам после обучения',
    ],
  },
  {
    tag: 'Hybrid',
    title: 'Онлайн + Офлайн',
    items: [
      'Обучение с выездом на техническую базу в Нижнем Новгороде',
      'Weekend Bootcamp',
      'Интенсивы 2–4 дня под задачу вашей команды',
    ],
  },
  {
    tag: 'Индивидуальные программы',
    title: 'Кастомная программа',
    items: [
      'Разработаем программу под запрос компании',
      'Подбираем оптимальную конфигурацию под цели команды',
      'Стоимость формируется индивидуально после брифинга',
    ],
  },
]

export default function Formats() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
        Форматы
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-12">
        Подберём формат под задачу и бюджет
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {formats.map((f, i) => (
          <div key={i} className="border border-gray-200 p-8">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-6">
              {f.tag}
            </span>
            <h3 className="text-xl font-bold text-black mb-4">{f.title}</h3>
            <ul className="space-y-3">
              {f.items.map((item, j) => (
                <li key={j} className="text-gray-500 text-sm leading-relaxed">→ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
