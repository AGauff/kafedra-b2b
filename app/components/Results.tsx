const results = [
    'Системное понимание мультимедиа-процессов и технических ограничений',
    'Оптимизацию бюджетов и снижение зависимости от внешних подрядчиков',
    'Рост внутренней экспертизы и уверенности команды в работе с технологиями',
    'Ускорение циклов проектирования и подготовки решений',
    'Повышение точности постановок ТЗ и снижение производственных ошибок',
    'Повышение качества коммуникации с клиентами и стейкхолдерами',
    'Единую методологию и практические инструменты для всей команды',
  ]
  
  export default function Results() {
    return (
      <section className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
        <div className="bg-black px-8 md:px-16 py-16 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-white text-black text-xs font-bold uppercase tracking-widest px-2 py-1 mb-8">
              Общие результаты для компании
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-10">
              После программ Kafedra команда получает:
            </h2>
            <ul className="space-y-5">
              {results.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="inline-flex items-center justify-center bg-white text-black text-xs font-bold w-5 h-5 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-white leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="h-full min-h-[500px] px-8 md:px-16 py-16 bg-black">
  <div className="w-full h-full bg-gray-800" />
</div>
      </section>
    )
  }