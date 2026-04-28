const audiences = [
  { name: 'Event-команды', desc: 'Научатся создавать технологически реализуемые шоу, правильно работать с подрядчиками и площадкой, избегать типовых ошибок в продакшне.' },
  { name: 'Продуктовые команды', desc: 'Смогут быстро прототипировать интерактивные решения и визуальные демо с использованием мультимедиа-инструментов.' },
  { name: 'Креативные команды', desc: 'Получат навыки создания концепций, которые реально можно реализовать — с пониманием технологий, оборудования и процессов.' },
  { name: 'Дизайн-команды', desc: 'Освоят подготовку контента для мультимедиа-проектов: работу с разрешениями, видеомэппингом, многоканальным видео.' },
  { name: 'R&D и инновации', desc: 'Изучат новые технологии мультимедиа для создания иммерсивных пространств, инсталляций и интерактивных решений.' },
]

export default function Audience() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
        Кому подходит
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-12 max-w-2xl">
        Программы для команд, которые работают с технологиями и визуалом
      </h2>

      <div className="flex flex-col">
        {audiences.map((a, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-10 py-6 border-b border-gray-100 items-baseline"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0" />
              <span className="text-sm font-bold text-black">{a.name}</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
