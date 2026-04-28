const problems = [
  {
    num: '01',
    title: 'Концепции оторваны от технологий',
    desc: 'Креативные идеи невозможно реализовать — команда не понимает ограничений проекторов, экранов, лазеров и серверов.',
  },
  {
    num: '02',
    title: 'Ошибки на этапе продакшна',
    desc: 'Контент готовится без учёта технических требований — пересъёмки, переделки, срыв сроков и перерасход бюджета.',
  },
  {
    num: '03',
    title: 'Долгий путь от идеи до прототипа',
    desc: 'Без навыков работы с мультимедиа-инструментами прототипирование занимает недели вместо дней.',
  },
  {
    num: '04',
    title: 'Не получается поставить задачу подрядчику',
    desc: 'Без понимания пайплайна ТЗ получаются размытыми, подрядчики делают не то, бюджет уходит на итерации.',
  },
]

export default function Problem() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-white">
      <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
        Проблема
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-12 max-w-2xl">
        Вашей команде не хватает практических навыков в мультимедиа?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
        {problems.map((p) => (
          <div key={p.num} className="bg-white p-8 md:p-10">
            <span className="text-5xl font-bold text-gray-100 block mb-4">{p.num}</span>
            <h3 className="text-base font-bold text-black mb-2">{p.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
