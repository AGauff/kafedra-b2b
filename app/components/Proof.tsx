const logos = [
  { src: 'https://static.tildacdn.com/tild6662-3461-4237-b038-366361376539/Group_1.png', alt: 'dreamlaser' },
  { src: 'https://static.tildacdn.com/tild6133-6639-4666-a239-313661646138/Group_1158.png', alt: 'CISTERN' },
  { src: 'https://static.tildacdn.com/tild3463-3335-4132-b436-356261366330/Vector.png', alt: 'ЦЕХ' },
  { src: 'https://static.tildacdn.com/tild3634-3038-4265-a133-623335383466/IF_-_logo_-_one_line.svg', alt: 'Intervals Festival' },
]

const cases = [
  {
    tag: 'Multimedia Foundation · 3 потока',
    title: 'Студенты создали финальные проекты на реальном оборудовании',
    desc: 'Каждый поток завершается защитой проектов — мультимедиа-инсталляций, созданных на технической базе dreamlaser.',
  },
  {
    tag: 'Intervals Education · 2025',
    title: 'Kafedra — куратор образовательной программы Intervals Festival',
    desc: 'Крупнейший международный фестиваль мультимедиа-искусства в России. Kafedra курирует образовательное направление.',
  },
  {
    tag: 'Партнёрство',
    title: 'Сотрудничество с ведущими студиями и арт-пространствами',
    desc: 'Спикеры — действующие специалисты из dreamlaser и партнёрских студий, работающие над международными проектами.',
  },
  {
    tag: 'Планы',
    title: 'Публичная выставка студенческих работ в ЦЕХ',
    desc: 'Финальные проекты четвёртого потока будут представлены в мультимедийном пространстве ЦЕХ — открытый показ для индустрии.',
  },
]

export default function Proof() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
        Экосистема и партнёры
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-12 max-w-2xl">
        Kafedra работает в индустриальной среде, а не в вакууме
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap gap-8 items-center mb-12 pb-12 border-b border-gray-200">
        {logos.map((l) => (
          <img key={l.alt} src={l.src} alt={l.alt} className="h-5 object-contain opacity-50 hover:opacity-100 transition-opacity" />
        ))}
      </div>

      {/* Cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <div key={i} className="border border-gray-200 p-8 hover:border-gray-400 transition-colors">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-4">
              {c.tag}
            </span>
            <h4 className="text-base font-bold text-black mb-2 leading-snug">{c.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
