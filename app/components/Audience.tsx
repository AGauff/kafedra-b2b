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
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.1]">
            Кому<br />подходят<br />программы
          </h2>
          <p className="text-sm text-gray-400 mt-3">От корпоративных команд до R&D</p>
        </div>

        <div className="flex flex-col">
          {audiences.map((a, i) => (
            <div key={i} className="mb-12">
              <div className="flex items-stretch gap-0 mb-3">
                <span className="inline-flex items-center justify-center bg-black text-white text-base font-bold px-6 py-3 min-w-[80px]">
                  {a.letter}
                </span>
                <span className="bg-gray-200 text-black text-xl md:text-2xl font-bold px-6 py-3 flex items-center flex-1">
                  {a.name}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
