const resources = [
    { title: 'Техническая мультимедиа-студия dreamlaser', photo: 'https://static.tildacdn.com/tild3561-3661-4362-b636-373535623433/photo.jpg' },
    { title: 'Парк оборудования', photo: 'https://static.tildacdn.com/tild6362-3461-4535-b635-313465623535/photo.jpg' },
    { title: 'Мультимедийное пространство ЦЕХ *', photo: 'https://static.tildacdn.com/tild3761-3334-4265-b130-313834613561/photo.jpg' },
    { title: 'Креативная студия dreamlaser', photo: 'https://static.tildacdn.com/tild6465-3864-4265-b535-363534313865/photo.jpg' },
    { title: 'Индустриальная среда Intervals Festival', photo: 'https://static.tildacdn.com/tild3833-6233-4431-b932-376664306539/photo.jpg' },
    { title: 'Международная арт-среда', photo: 'https://static.tildacdn.com/tild6465-3561-4466-b130-653334336565/photo.jpg' },
    { title: 'Intervals Education', photo: 'https://static.tildacdn.com/tild3435-6561-4433-b035-656464656635/photo.jpg' },
    { title: 'Доступ к реальным арт-практикам', photo: 'https://static.tildacdn.com/tild3661-3531-4465-b932-386433363561/photo.jpg' },
  ]
  
  export default function Resources() {
    return (
      <section className="w-full px-8 md:px-16 py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
          Ресурсная база Kafedra
        </h2>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resources.map((r, i) => (
            <div key={i}>
              <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden mb-3">
                <img src={r.photo} alt={r.title} className="w-full h-full object-cover" />
              </div>
              <span className="inline-block bg-black text-white text-xs font-bold px-2 py-1">
                {r.title}
              </span>
            </div>
          ))}
        </div>
      </section>
    )
  }