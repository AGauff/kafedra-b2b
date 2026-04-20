export default function Hero() {
    return (
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-end">
        {/* Фоновое фото */}
        <div className="absolute inset-0">
        <img 
  src="https://static.tildacdn.com/tild3632-6131-4337-b561-643363343864/noroot.png" 
  className="w-full h-full object-cover" 
/>
        </div>
  
        {/* Логотип сверху */}
        <div className="absolute top-0 left-0 w-full z-10 px-8 md:px-16 pt-8">
  <img 
    src="https://static.tildacdn.com/tild3761-3231-4963-b235-323335623836/Group_1480.svg"
    className="w-full"
  />
</div>
        {/* Тёмный градиент снизу */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0" />
  
        {/* Контент внизу */}
        <div className="relative z-10 px-8 pb-16 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Обучение для корпоративных команд
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Мультимедиа. Технологии. Практический опыт.
          </p>
        </div>
      </section>
    )
  }