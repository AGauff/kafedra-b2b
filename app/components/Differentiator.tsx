const resources = [
  { title: 'Студия dreamlaser', photo: 'https://static.tildacdn.com/tild3561-3661-4362-b636-373535623433/photo.jpg' },
  { title: 'Парк оборудования', photo: 'https://static.tildacdn.com/tild6362-3461-4535-b635-313465623535/photo.jpg' },
  { title: 'Пространство ЦЕХ', photo: 'https://static.tildacdn.com/tild3761-3334-4265-b130-313834613561/photo.jpg' },
  { title: 'Работа на площадке', photo: 'https://static.tildacdn.com/tild6465-3864-4265-b535-363534313865/photo.jpg' },
]

const tags = ['Студия dreamlaser', 'Проекционное оборудование', 'Пространство ЦЕХ', 'Лазеры и свет', 'Медиасерверы', 'Intervals Festival']

export default function Differentiator() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div>
          <span className="inline-block bg-white text-black text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
            Главное отличие
          </span>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
            Обучение на реальной технической базе действующей студии
          </h2>
          <p className="text-sm text-white/50 leading-relaxed mb-4">
            83% студентов прошлых потоков выбрали тариф с офлайн-практикой. Это не лекция в конференц-зале — это работа с проекторами, медиасерверами, лазерами и световым оборудованием на студии dreamlaser в Нижнем Новгороде.
          </p>
          <p className="text-sm text-white/50 leading-relaxed mb-8">
            Спикеры — действующие специалисты, которые реализуют проекты прямо сейчас. Не теоретики, а практики международного уровня.
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span key={i} className="text-xs border border-white/20 text-white/60 px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Photos grid */}
        <div className="grid grid-cols-2 gap-1">
          {resources.map((r, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <img src={r.photo} alt={r.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute bottom-3 left-3 text-xs text-white font-bold">
                {r.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
