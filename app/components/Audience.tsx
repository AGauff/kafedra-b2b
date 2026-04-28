const audiences = [
  { letter: 'A', name: 'Event-команды', desc: 'Продюсерам шоу, фестивалей и мероприятий, которым важно понимать возможности мультимедиа и процесс взаимодействия с техническими специалистами.' },
  { letter: 'B', name: 'Продуктовые команды', desc: 'Тем, кто создаёт интерактивные решения и визуальные демо — быстрое прототипирование с использованием мультимедиа-инструментов.' },
  { letter: 'C', name: 'Креативные команды', desc: 'Дизайнерам, сценографам, моушн-дизайнерам, которые хотят системно взглянуть на процесс и создавать технически реализуемые концепции.' },
  { letter: 'D', name: 'Дизайн-команды', desc: 'Специалистам, которые готовят контент для мультимедиа-проектов: работа с разрешениями, видеомэппингом, многоканальным видео.' },
  { letter: 'E', name: 'R&D и инновации', desc: 'Командам, которые исследуют новые технологии для создания иммерсивных пространств, инсталляций и интерактивных решений.' },
]

export default function Audience() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Кому подходят программы
          </h2>
          <p className="text-xs text-gray-400 mt-2">От корпоративных команд до R&D</p>
        </div>
      </div>

      <div className="flex flex-col">
        {audiences.map((a, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-8 py-8 border-t border-gray-200">
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center bg-gray-100 text-black text-sm font-bold w-10 h-10">
                {a.letter}
              </span>
            </div>
            <div>
              <h3 className="bg-gray-100 text-black text-sm font-bold px-4 py-2.5 inline-block mb-3">
                {a.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
