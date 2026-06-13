import BlurredShape from "./../assets/blurred-shape.svg";

export default function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-4 inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-brand-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-brand-200/50"
              data-aos="fade-up"
            >
              <span className="inline-flex bg-linear-to-r from-brand-500 to-brand-200 bg-clip-text text-transparent">
                Contact
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-brand-200),var(--color-gray-50),var(--color-brand-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-6 font-nacelle text-3xl font-semibold uppercase tracking-[0.08em] text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Ready to build something sharp?
            </h2>
            <p
              className="mx-auto mb-8 max-w-2xl text-lg text-brand-100/75 md:text-xl"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Bring us the idea, the challenge, or the product you want to improve. We will help turn it into a clear plan, a polished interface, and production-ready software.
            </p>
            <div className="mx-auto flex max-w-md flex-col justify-center gap-3 sm:flex-row">
              <div data-aos="fade-up" data-aos-delay={300}>
                <a
                  className="btn group w-full bg-linear-to-t from-brand-600 to-brand-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                  href="mailto:hello@code640.com"
                >
                  Talk to Code 640
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
