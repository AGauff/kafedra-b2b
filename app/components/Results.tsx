const results = [
  { title: 'Ускорение циклов', desc: 'Быстрее от идеи до реализации — меньше итераций, меньше переделок, короче путь к результату.' },
  { title: 'Оптимизация бюджетов', desc: 'Снижение зависимости от подрядчиков и сокращение производственных ошибок, которые стоят денег.' },
  { title: 'Точные ТЗ', desc: 'Команда может грамотно ставить задачи техническим специалистам и контролировать результат.' },
  { title: 'Внутренняя экспертиза', desc: 'Рост компетенций и уверенности команды в работе с мультимедиа-технологиями.' },
  { title: 'Единая методология', desc: 'Общий язык, процессы и инструменты для всей команды — от креатива до продакшна.' },
  { title: 'Качество коммуникации', desc: 'Улучшение презентаций для клиентов и стейкхолдеров с пониманием визуального языка.' },
]

export default function Results() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white border-t border-gray-200">
      <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
        Результаты для бизнеса
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-12 max-w-2xl">
        Что получит компания после обучения
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
        {results.map((r, i) => (
          <div key={i} className="bg-white p-8">
            <span className="inline-flex items-center justify-center bg-black text-white text-xs font-bold w-6 h-6 mb-4">
              {i + 1}
            </span>
            <h4 className="text-base font-bold text-black mb-2">{r.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
