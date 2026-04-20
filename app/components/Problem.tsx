export default function Problem() {
    const problems = [
      'Сложно создавать технологически реалистичные концепции',
      'Возникают ошибки в продакшне из-за непонимания технических ограничений',
      'Прототипы и визуальные решения долго проходят путь от идеи до реализации',
      'Трудно ставить корректные задачи подрядчикам и техническим специалистам',
    ]
  
    return (
      <section className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
        <div className="px-8 md:px-16 py-16 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
              Контекст проблемы
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-6">
              Введение
            </h2>
            <p className="text-sm text-black leading-relaxed mb-3">
              Современные компании создают продукты, сервисы и мероприятия, где мультимедиа и технологии становятся ключевыми инструментами.
            </p>
            <p className="text-sm text-black leading-relaxed mb-8">
              Но командам часто не хватает практического опыта, который помогал бы работать быстро и эффективно:
            </p>
  
            <ul className="space-y-4 mb-8">
              {problems.map((p, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="inline-flex items-center justify-center bg-black text-white text-xs font-bold w-5 h-5 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-black leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
  
          <p className="text-sm text-black leading-relaxed">
            Kafedra закрывает этот разрыв через практические программы, которые дают командам реальные навыки и ускоряют рабочие процессы.
          </p>
        </div>
        
        <div className="px-8 md:px-16 py-16">
  <div className="w-full h-full min-h-[400px] bg-gray-100" />
</div>

      </section>
    )
  }