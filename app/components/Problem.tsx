const problems = [
  { title: 'Концепции оторваны от технологий', desc: 'Креативные идеи невозможно реализовать — команда не понимает ограничений проекторов, экранов, лазеров и серверов.' },
  { title: 'Ошибки на этапе продакшна', desc: 'Контент готовится без учёта технических требований — пересъёмки, переделки, срыв сроков и перерасход бюджета.' },
  { title: 'Долгий путь от идеи до прототипа', desc: 'Без навыков работы с мультимедиа-инструментами прототипирование занимает недели вместо дней.' },
  { title: 'Не получается поставить задачу подрядчику', desc: 'Без понимания пайплайна ТЗ получаются размытыми, подрядчики делают не то, бюджет уходит на итерации.' },
]

export default function Problem() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-16 max-w-2xl">
        Вашей команде не хватает практических навыков в мультимедиа?
      </h2>

      <div className="flex flex-col">
        {problems.map((p, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[60px_1fr_1fr] gap-4 md:gap-8 py-8 border-t border-gray-200">
            <span className="text-4xl font-bold text-gray-200">{i + 1}</span>
            <div>
              <h3 className="text-base font-bold text-black mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
            <div />
          </div>
        ))}
      </div>
    </section>
  )
}
