export default function Contact() {
  return (
    <section id="contact" className="w-full bg-black text-white">
      {/* CTA block */}
      <div className="px-8 md:px-16 py-24 text-center border-b border-white/10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Обсудим программу для вашей команды
        </h2>
        <p className="text-base text-white/50 mb-10 max-w-lg mx-auto">
          Оставьте заявку — мы свяжемся и подберём оптимальный формат под задачу и бюджет.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://t.me/kafedra"
            className="bg-white text-black text-sm font-bold px-8 py-4 hover:bg-gray-200 transition-colors"
          >
            Написать в Telegram
          </a>
          <a
            href="mailto:info@kafedra.school"
            className="border border-white/30 text-white text-sm font-bold px-8 py-4 hover:bg-white hover:text-black transition-colors"
          >
            info@kafedra.school
          </a>
        </div>
      </div>

      {/* Contact person */}
      <div className="px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-white/10 text-white/60 text-xs px-3 py-1 mb-8">
            По вопросам корпоративного обучения
          </span>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Роман Кихтенко</h3>
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
      </div>
    </section>
  )
}
