export default function About() {
    return (
      <section className="w-full px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-6">
              О Кафедре
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug tracking-tight">
              Kafedra — образовательная платформа индустрии мультимедиа от компании dreamlaser
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed mb-3 text-black">
              dreamlaser — международная компания с 20-летним опытом работы в мультимедиа, реализовавшая более 5000 проектов по всему миру. Команда стояла у истоков российского мультимедиаарта и с 2005 года создаёт крупные шоу, иммерсивные проекты, интерактивные инсталляции и арт-объекты.
            </p>
            <p className="text-sm leading-relaxed text-black">
              Kafedra опирается на этот опыт и передаёт новым командам знания, которые используются в реальной индустрии мультимедиа.
            </p>
          </div>
        </div>
  
        <div className="w-full min-h-[400px]">
          <img
            src="https://static.tildacdn.com/tild3564-6431-4161-b130-323566363464/noroot.png"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    )
  }