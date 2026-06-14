
export default function HeroHome() {
  return (
    <section id="home">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-16 md:py-24">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div
              className="mb-5 inline-flex items-center rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-sm text-brand-200"
              data-aos="fade-up"
            >
              Code 640 - full-stack development studio
            </div>
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-brand-200),var(--color-gray-50),var(--color-brand-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-bold uppercase tracking-[0.01em] text-transparent md:text-6xl"
              data-aos="fade-up"
            >
              We build digital products with premium engineering.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-brand-50 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                From strategy to production, Code 640 designs and develops high-performance websites, platforms, and web apps for brands that need their digital presence to feel sharp, reliable, and built to scale.
              </p>
              <div
                className="mx-auto flex max-w-md flex-col justify-center gap-3 sm:flex-row"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <a
                  className="btn bg-linear-to-t from-brand-600 to-brand-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:from-brand-500 hover:to-brand-400"
                  href="#contact"
                >
                  Start a project
                </a>
                <a
                  className="btn border border-gray-700 bg-gray-900/70 text-gray-200 hover:border-brand-500/60 hover:text-brand-200"
                  href="#services"
                >
                  Explore services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
