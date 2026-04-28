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
    </section>
  )
}
