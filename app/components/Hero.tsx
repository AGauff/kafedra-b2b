export default function Hero() {
  return (
    <section className="relative w-full h-screen max-h-[900px] flex flex-col bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://static.tildacdn.com/tild3632-6131-4337-b561-643363343864/noroot.png"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 z-[1]" />
      <div className="absolute top-0 left-0 w-full z-[2] px-8 md:px-16 pt-8">
        <img
          src="https://static.tildacdn.com/tild3761-3231-4963-b235-323335623836/Group_1480.svg"
          className="w-full"
        />
      </div>
      <div className="relative z-[3] px-8 md:px-16 pb-12 mt-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 max-w-3xl leading-tight">
          Научим вашу команду создавать мультимедиа-проекты от идеи до реализации
        </h1>
        <p className="text-xs md:text-sm text-white/50 max-w-xl mb-6 leading-relaxed">
          Практические программы на базе студии dreamlaser. 20 лет опыта, 5000+ проектов, реальное оборудование и действующие специалисты индустрии.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="bg-white text-black text-xs font-bold px-6 py-3 hover:bg-gray-200 transition-colors">Оставить заявку</a>
          <a href="#programs" className="border border-white/30 text-white text-xs font-bold px-6 py-3 hover:bg-white hover:text-black transition-colors">Смотреть программы</a>
        </div>
      </div>
    </section>
  )
}
