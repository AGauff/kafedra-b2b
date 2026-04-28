const logos = [
  { src: 'https://static.tildacdn.com/tild6662-3461-4237-b038-366361376539/Group_1.png', alt: 'dreamlaser' },
  { src: 'https://static.tildacdn.com/tild6133-6639-4666-a239-313661646138/Group_1158.png', alt: 'CISTERN' },
  { src: 'https://static.tildacdn.com/tild3463-3335-4132-b436-356261366330/Vector.png', alt: 'ЦЕХ' },
  { src: 'https://static.tildacdn.com/tild3634-3038-4265-a133-623335383466/IF_-_logo_-_one_line.svg', alt: 'Intervals Festival' },
]

export default function Proof() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight max-w-4xl mb-16">
        Kafedra — это образовательная платформа от компании dreamlaser, работающей в индустрии мультимедиа технологий уже 20 лет.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-6 mb-16">
        <div className="row-span-2">
          <img
            src="https://static.tildacdn.com/tild3564-6431-4161-b130-323566363464/noroot.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-t-2 border-gray-200 pt-4">
          <h3 className="bg-gray-100 text-black text-xs font-bold uppercase tracking-widest px-3 py-2 inline-block mb-4">
            Kafedra x dreamlaser
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            В портфолио dreamlaser — тысячи реализованных проектов по всему миру. Специалисты компании накопили огромный опыт, которым готовы поделиться.
          </p>
        </div>
        <div className="border-t-2 border-gray-200 pt-4">
          <h3 className="bg-gray-100 text-black text-xs font-bold uppercase tracking-widest px-3 py-2 inline-block mb-4">
            Индустрия
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Наша школа — не изолированная теория, а живая часть индустрии. Мы сотрудничаем с ведущими студиями, фестивалями и культурными площадками.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center pt-12 border-t border-gray-200">
        {logos.map((l) => (
          <img key={l.alt} src={l.src} alt={l.alt} className="h-8 md:h-10 object-contain" />
        ))}
      </div>
    </section>
  )
}
