const programs = [
  {
    label: 'Основная программа',
    title: 'Multimedia Foundation',
    featured: true,
    desc: 'Полный путь мультимедиа-проекта: идея → концепция → визуал → продакшн → техническая сборка и презентация.',
    results: [
      'Понимание полного мультимедиа-пайплайна',
      'Проектирование концепции под реальные технические возможности',
      'Работа с визуальными системами: экраны, свет, лазеры',
      'Подготовка контента с учётом технических требований',
      'Умение ставить точные задачи подрядчикам',
    ],
    meta: ['Онлайн + офлайн', '~2 месяца', 'Финальный проект'],
  },
  {
    label: 'Интенсив',
    title: 'Weekend Bootcamp',
    featured: false,
    desc: 'Концентрированная офлайн-практика на технической базе dreamlaser в Нижнем Новгороде. 2–4 дня работы с реальным оборудованием.',
    results: [
      'Быстрое погружение в мультимедиа-технологии',
      'Работа с проекторами, серверами, световым оборудованием',
      'Понимание технических ограничений на практике',
      'Командная работа на площадке',
    ],
    meta: ['Офлайн', '2–4 дня', 'Нижний Новгород'],
  },
  {
    label: 'Индивидуально',
    title: 'Кастомная программа',
    featured: false,
    desc: 'Разработаем программу под конкретный запрос компании. От отдельных мастер-классов до полноценного курса с офлайн-компонентом.',
    results: [
      'Программа под ваши задачи и уровень команды',
      'Гибкий формат: онлайн, офлайн или гибрид',
      'Итоговый проект на основе реальной задачи компании',
      'Стоимость формируется после брифинга',
    ],
    meta: ['Любой формат', 'По запросу'],
  },
]

export default function Programs() {
  return (
    <section id="programs" className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
        Программы
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-12 max-w-2xl">
        Готовые программы и кастомные решения под задачу
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <div
            key={i}
            className={`border p-8 flex flex-col ${
              p.featured ? 'border-black' : 'border-gray-200'
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1">
                {p.label}
              </span>
              {p.featured && (
                <span className="inline-block bg-black text-white text-xs font-bold px-2 py-1">
                  Флагман
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-black mb-3">{p.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">{p.desc}</p>

            {/* Results */}
            <ul className="space-y-3 mb-8 flex-1">
              {p.results.map((r, j) => (
                <li key={j} className="text-sm text-black leading-relaxed flex gap-2 items-start">
                  <span className="text-gray-300 shrink-0">→</span>
                  {r}
                </li>
              ))}
            </ul>

            {/* Meta tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
              {p.meta.map((m, j) => (
                <span
                  key={j}
                  className="text-xs text-gray-400 border border-gray-200 px-3 py-1"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
