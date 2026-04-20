export default function Partners() {
    const logos = [
      { src: 'https://static.tildacdn.com/tild6662-3461-4237-b038-366361376539/Group_1.png', alt: 'dreamlaser' },
      { src: 'https://static.tildacdn.com/tild6133-6639-4666-a239-313661646138/Group_1158.png', alt: 'CISTERN' },
      { src: 'https://static.tildacdn.com/tild3463-3335-4132-b436-356261366330/Vector.png', alt: 'ЦЕХ' },
      { src: 'https://static.tildacdn.com/tild3634-3038-4265-a133-623335383466/IF_-_logo_-_one_line.svg', alt: 'Intervals Festival' },
    ]
  
    return (
      <section className="w-full px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-10">
            Партнёрства, фестивали, индустриальная среда
          </h2>
  
          <div className="mb-8">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">KAFEDRA by dreamlaser</span>
            <p className="text-sm text-black leading-relaxed">
              Мы работаем на базе одной из сильнейших мультимедиаплощадок страны и используем оборудование, инструменты и процессы, идентичные студийным.
            </p>
          </div>
  
          <div className="mb-8">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">Фестивали и профессиональная среда</span>
            <p className="text-sm text-black leading-relaxed">
              Команда dreamlaser — организаторы и кураторы самого масштабного в России международного фестиваля мультимедиа-искусства INTERVALS. В 2025 году Kafedra стала куратором образовательной программы Intervals Education.
            </p>
          </div>
  
          <div className="mb-10">
            <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold tracking-widest px-2 py-1 mb-3">Индустриальные связи</span>
            <p className="text-sm text-black leading-relaxed">
              Мы сотрудничаем с ведущими экспертами и студиями, арт-пространствами и фестивалями. Наши студенты учатся у практиков, работающих над актуальными проектами в международных креативных индустриях.
            </p>
          </div>
  
          <div className="flex flex-nowrap gap-6 items-center overflow-hidden">
            {logos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-5 object-contain" />
            ))}
          </div>
        </div>
  
        <div className="flex flex-col gap-0">
          <img
            src="https://static.tildacdn.com/tild6531-3530-4234-b738-643064326161/Frame_81_1.png"
            className="w-full object-cover"
            style={{ height: '280px' }}
          />
          <img
            src="http://static.tildacdn.com/tild6538-3536-4231-b635-613732616232/Frame_80.png"
            className="w-full object-cover"
            style={{ height: '280px' }}
          />
        </div>
      </section>
    )
  }