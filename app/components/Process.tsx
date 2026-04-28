const steps = [
  { num: '01', title: 'Заявка', desc: 'Вы оставляете заявку — мы связываемся и уточняем задачу.' },
  { num: '02', title: 'Брифинг', desc: 'Проводим встречу, разбираемся в целях команды и подбираем формат.' },
  { num: '03', title: 'Программа', desc: 'Формируем предложение — готовая программа или кастомная адаптация.' },
  { num: '04', title: 'Запуск', desc: 'Согласовываем детали, подписываем договор и стартуем обучение.' },
]

export default function Process() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
        Как начать
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-12 max-w-2xl">
        Четыре шага до запуска программы
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-gray-200">
        {steps.map((s) => (
          <div key={s.num} className="bg-white p-8">
            <span className="text-4xl font-bold text-gray-100 block mb-4">{s.num}</span>
            <h4 className="text-base font-bold text-black mb-2">{s.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
