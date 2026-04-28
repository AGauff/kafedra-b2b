export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-black">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="https://static.tildacdn.com/tild3632-6131-4337-b561-643363343864/noroot.png"
      className="w-full h-full object-cover opacity-60"
    />
  </div>

  {/* Logo */}
  <div className="relative z-10 px-8 md:px-16 pt-8">
    <img
      src="https://static.tildacdn.com/tild3761-3231-4963-b235-323335623836/Group_1480.svg"
      className="w-full"
    />
  </div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0" />

  {/* Content - pushed to bottom */}
  <div className="relative z-10 px-8 md:px-16 pb-16 mt-auto">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
      Научим вашу команду создавать мультимедиа-проекты от идеи до реализации
    </h1>
    <p className="text-base md:text-lg text-white/60 max-w-2xl mb-8">
      Практические программы на базе студии dreamlaser — 20&nbsp;лет опыта, 5&nbsp;000+ проектов, реальное оборудование и действующие специалисты индустрии.
    </p>

    {/* CTA */}
    <div className="flex flex-wrap gap-3 mb-16">
      <a href="#contact" className="bg-white text-black text-sm font-bold px-8 py-4 hover:bg-gray-200 transition-colors">
        Оставить заявку
      </a>
      <a href="#programs" className="border border-white/30 text-white text-sm font-bold px-8 py-4 hover:bg-white hover:text-black transition-colors">
        Смотреть программы
      </a>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
      <div>
        <p className="text-3xl md:text-4xl font-bold text-white">20+</p>
        <p className="text-xs text-white/40 uppercase tracking-widest mt-1">лет в индустрии</p>
      </div>
      <div>
        <p className="text-3xl md:text-4xl font-bold text-white">5 000+</p>
        <p className="text-xs text-white/40 uppercase tracking-widest mt-1">реализованных проектов</p>
      </div>
      <div>
        <p className="text-3xl md:text-4xl font-bold text-white">3</p>
        <p className="text-xs text-white/40 uppercase tracking-widest mt-1">потока Multimedia Foundation</p>
      </div>
      <div>
        <p className="text-3xl md:text-4xl font-bold text-white">83%</p>
        <p className="text-xs text-white/40 uppercase tracking-widest mt-1">выбирают офлайн-практику</p>
      </div>
    </div>
  </div>
</section>
  )
}
