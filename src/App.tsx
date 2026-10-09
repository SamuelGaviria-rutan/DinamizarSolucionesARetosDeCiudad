import futumedImage from "./assets/futumed.jpg";
import talentoImage from "./assets/talento.jpg";

const initiatives = [
  {
    name: "Futumed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    coverClassName: "bg-futumed",
    eyebrow: "Salud y futuro",
    imageUrl: futumedImage,
    imageAlt:
      "Profesional de la salud trabajando con tecnología médica en un laboratorio",
    imagePosition: "object-center",
  },
  {
    name: "Talento",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    coverClassName: "bg-talento",
    eyebrow: "Conocimiento y ciudad",
    imageUrl: talentoImage,
    imageAlt:
      "Grupo de jóvenes compartiendo conocimientos en un espacio de encuentro",
    imagePosition: "object-center",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-white px-5 py-8 text-brand sm:px-10 sm:py-10 md:h-dvh md:overflow-hidden md:px-8 md:py-6 lg:px-12 lg:py-8 xl:px-16">
      <div className="mx-auto max-w-[1280px] md:grid md:h-full md:grid-rows-[auto_minmax(0,1fr)] md:gap-5 lg:gap-7">
        <header className="border-t border-brand pt-5 sm:pt-6">
          <div className="grid gap-x-8 gap-y-0 md:grid-cols-12">
            <div className="md:col-span-8 lg:col-span-12">
              <h1 className="mt-[9px] mb-[-8px] max-w-4xl text-center text-balance font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.04em] lg:mx-0 lg:max-w-[1100px]">
                Dinamizar soluciones a retos de ciudad
              </h1>
            </div>
          </div>
        </header>

        <section
          aria-label="Iniciativas"
          className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-16 md:mt-0 md:min-h-0 md:grid-cols-2 lg:gap-x-8"
        >
          {initiatives.map((initiative) => (
            <article
              id={initiative.name.toLowerCase()}
              key={initiative.name}
              className="group flex min-w-0 scroll-mt-6 flex-col md:min-h-0"
            >
              <div
                className={`flex flex-col p-4 text-black sm:p-5 md:min-h-0 md:flex-1 lg:p-5 ${initiative.coverClassName}`}
              >
                <div className="mb-3 flex min-h-7 items-center justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.08em]">
                    {initiative.eyebrow}
                  </span>
                  <span className="text-sm font-semibold" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <figure className="aspect-[4/3] overflow-hidden border border-black/20 bg-white md:min-h-0 md:flex-1 md:aspect-auto">
                  <img
                    src={initiative.imageUrl}
                    alt={initiative.imageAlt}
                    width="1400"
                    height="1050"
                    loading="lazy"
                    className={`h-full w-full object-cover ${initiative.imagePosition}`}
                  />
                </figure>
              </div>

              <div className="flex flex-col border-b border-brand py-5 md:shrink-0 md:py-3 lg:py-4">
                <div className="flex items-start justify-between gap-6">
                  <h2 className="font-display text-[clamp(2rem,3.25vw,3rem)] font-semibold leading-none tracking-[-0.035em]">
                    {initiative.name}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mt-1 h-3 w-3 shrink-0 bg-brand"
                  />
                </div>
                <p className="mt-3 max-w-[58ch] text-pretty text-base leading-snug lg:text-lg">
                  {initiative.description}
                </p>
                <a
                  href={`#${initiative.name.toLowerCase()}`}
                  className="mt-2 inline-flex min-h-11 w-fit items-center text-base font-semibold text-brand underline decoration-1 underline-offset-4 transition-opacity duration-200 ease-out hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none"
                  aria-label={`Ver más sobre ${initiative.name}`}
                >
                  Ver más <span aria-hidden="true">&nbsp;→</span>
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
