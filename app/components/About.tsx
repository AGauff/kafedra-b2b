export default function About() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
            О Kafedra
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-6">
            Образовательная платформа от dreamlaser
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 mb-4">
            dreamlaser — международная компания с 20-летним опытом в мультимедиа. Более 5 000 реализованных проектов: шоу, иммерсивные пространства, интерактивные инсталляции, архитектурный видеомэппинг.
          </p>
          <p className="text-sm leading-relaxed text-gray-500 mb-8">
            Kafedra передаёт этот опыт через структурированные образовательные программы. Мы учим тому, что используем в реальной работе — на том же оборудовании, с теми же людьми.
          </p>
          <div className="flex flex-wrap gap-2">
            {['20+ лет опыта', '5 000+ проектов', 'Международные проекты', 'Собственная техническая база'].map((b, i) => (
              <span key={i} className="text-xs border border-gray-200 text-gray-500 px-3 py-1.5">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full min-h-[400px]">
          <img
            src="https://static.tildacdn.com/tild3564-6431-4161-b130-323566363464/noroot.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
