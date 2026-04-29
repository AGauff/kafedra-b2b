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
      <div className="grid grid-cols-1 md:grid-cols-[35%_65%] items-start">
        <div className="md:sticky md:top-24 pb-12 md:pb-0 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.05] tracking-tight">
            Кому<br />подойдёт
          </h2>
          <p className="text-sm text-gray-400 mt-3">От новичков до профессионалов</p>
        </div>

        <div>
          {audiences.map((a, i) => (
            <div key={i} className="mb-16 last:mb-0">
              <div className="flex items-stretch mb-1 gap-1">
                <span className="bg-black text-white text-sm font-medium flex items-center justify-start pl-4" style={{width: '130px', minHeight: '48px'}}>
                  {a.letter}
                </span>
                <span className="bg-[#e8e8e8] text-black text-lg md:text-xl font-medium flex items-center px-5 py-1 flex-1">
                  {a.name}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mt-3 pl-[138px]">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
