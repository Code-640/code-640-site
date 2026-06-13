import BlurredShapeGray from "./../assets/blurred-shape-gray.svg";
import BlurredShape from "./../assets/blurred-shape.svg";
import Spotlight from "./Spotlight";

export default function Features() {
  const renderTitle = (title: string) =>
    title.split(' & ').map((part, index, parts) => (
      <span key={`${title}-${part}`}>
        {part}
        {index < parts.length - 1 && (
          <span className="px-1 font-[Arial] normal-case tracking-normal text-gray-300">
            &amp;
          </span>
        )}
      </span>
    ));

  const items = [
    {
      title: 'Premium Websites',
      description: 'High-end institutional websites built for credibility, performance, and a first impression that feels unmistakably professional.',
      arrowClass: 'rotate-0',
      icon: <svg className="mb-3 fill-brand-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" /><path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" /></svg>
    },
    {
      title: 'Web Apps & Platforms',
      description: 'Custom applications, dashboards, portals, and SaaS-style products designed around real workflows and scalable architecture.',
      arrowClass: 'rotate-0',
      icon: <svg className="mb-3 fill-brand-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" /><path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" /></svg>
    },
    {
      title: 'UI/UX Design',
      description: 'Interfaces planned with clarity, hierarchy, and conversion in mind, from product flows to refined visual systems.',
      arrowClass: '-rotate-45',
      icon: <svg className="mb-3 fill-brand-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" /><path fillOpacity=".48" d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z" /></svg>
    },
    {
      title: 'Automation & Integrations',
      description: 'Smart connections between tools, APIs, CRMs, payment flows, and internal operations to remove manual work.',
      arrowClass: 'rotate-0',
      icon: <svg className="mb-3 fill-brand-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path fillOpacity=".48" d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z" /><path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" /><path d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z" opacity=".48" /><path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" /></svg>
    },
    {
      title: 'Landing Pages & Campaigns',
      description: 'Fast, focused pages for launches, offers, and lead generation, built to communicate value and move visitors to action.',
      arrowClass: 'rotate-0',
      icon: <svg className="mb-3 fill-brand-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path fillOpacity=".48" d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" /><path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" /></svg>
    },
    {
      title: 'Maintenance & Evolution',
      description: 'Ongoing improvements, monitoring, fixes, and new features so your product keeps getting faster, safer, and more useful.',
      arrowClass: '-rotate-45',
      icon: <svg className="mb-3 fill-brand-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path fillOpacity=".48" d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z" /><path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" /></svg>
    },
  ];

  return (
    <section id="services" className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <img
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <img
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-brand-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-brand-200/50">
              <span className="inline-flex bg-linear-to-r from-brand-500 to-brand-200 bg-clip-text text-transparent">
                What We Do
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-brand-200),var(--color-gray-50),var(--color-brand-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold uppercase tracking-[0.08em] text-transparent md:text-4xl">
              Digital services built for launch, scale, and impact.
            </h2>
            <p className="text-lg text-brand-100/75">
              We turn strategy, design, and engineering into polished web experiences that look premium, load fast, and support real business goals.
            </p>
          </div>
          {/* Items */}
          <Spotlight className="group mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.title}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800/80 p-px shadow-lg shadow-black/10 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-brand-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-brand-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950/95 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  <div
                    className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                    aria-hidden="true"
                  >
                    <svg
                      className={`transition-transform duration-300 ${item.arrowClass}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width={9}
                      height={8}
                      fill="none"
                    >
                      <path
                        fill="#F4F4F5"
                        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                      />
                    </svg>
                  </div>
                  <div className="relative z-10 p-5">
                    {item.icon}
                    <h3 className="mb-1 font-army tracking-wider text-[1rem] font-semibold text-gray-200 lowercase">
                      {renderTitle(item.title)}
                    </h3>
                    <p className="text-brand-100/75">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
