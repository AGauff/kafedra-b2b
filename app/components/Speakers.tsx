export default function Speakers() {
  const speakers = [
    {
      name: 'Борис Кислицин',
      photo: 'https://static.tildacdn.com/tild3864-6161-4463-a163-313061373338/photo.jpg',
    },
    {
      name: 'Антон Колодяжный',
      photo: 'https://static.tildacdn.com/tild6338-3462-4161-b263-373336616433/photo.jpg',
    },
    {
      name: 'Павел Змунчила',
      photo: 'https://static.tildacdn.com/tild3661-6233-4565-a530-313865663930/photo.jpg',
    },
    {
      name: 'Илья Балакин',
      photo: 'https://static.tildacdn.com/tild3362-3336-4265-b535-383766613864/photo.jpg',
    },
    {
      name: 'Даниил Радченко',
      photo: 'https://static.tildacdn.com/tild3534-6434-4261-b731-323631323931/photo.jpg',
    },
  ]

  return (
    <section className="w-full px-8 md:px-16 py-16 bg-white border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-6">
            Спикеры и эксперты
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug">
            Команда спикеров Kafedra — практикующие специалисты международного уровня.
          </h2>
        </div>
        <div className="flex items-end">
          <p className="text-sm text-black leading-relaxed">
            Они создают мультимедиа-проекты, которыми живёт индустрия: световые шоу, сцены для крупных мероприятий, архитектурные видеомэппинги, арт-инсталляции, иммерсивные проекты.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {speakers.map((s) => (
          <div key={s.name}>
            <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3">
              <img
                src={s.photo}
                alt={s.name}
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <p className="text-sm text-black">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
