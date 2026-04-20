export default function Contact() {
    return (
<section className="w-full px-8 md:px-16 py-24 bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px]">        <div>
          <span className="inline-block bg-white/10 text-white/60 text-xs px-3 py-1 mb-8">
            По вопросам корпоративного обучения
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Роман Кихтенко</h2>
          <p className="text-white/60 text-base mb-8">
            Партнёр и куратор образовательной платформы Kafedra
          </p>
  
          <div className="space-y-3 mb-10">
            <p className="text-white text-base">Tel: +7 910 385 0028</p>
            <p className="text-white text-base">Email: info@kafedra.school</p>
          </div>
  
          <div className="flex gap-4">
            <a href="https://kafedra.school" className="border border-white/30 text-white text-sm px-6 py-3 hover:bg-white hover:text-black transition-colors">
              kafedra.school
            </a>
            <a href="https://t.me/kafedra" className="border border-white/30 text-white text-sm px-6 py-3 hover:bg-white hover:text-black transition-colors">
              Telegram
            </a>
          </div>
        </div>
  
        <div className="w-full h-full">
  <img src="/Roman.png" className="w-full h-full object-cover object-top" />
</div>
      </section>
    )
  }