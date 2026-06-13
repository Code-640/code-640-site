export default function FeaturedWork() {
  const clampLogoUrl = 'https://clamp.code640.com/favicon.svg';
  const highlights = [
    'Internal product',
    'Reusable values',
    'Client-ready workflow',
  ];

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-brand-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-brand-200/50">
              <span className="inline-flex bg-linear-to-r from-brand-500 to-brand-200 bg-clip-text text-transparent">
                Featured Work
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-brand-200),var(--color-brand-50),var(--color-brand-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold uppercase tracking-[0.08em] text-transparent md:text-4xl">
              Proof that strategy and execution can move fast together.
            </h2>
            <p className="text-lg text-brand-100/75">
              Some of our best tools come from real delivery problems. Clamp started as an internal product to organize reusable values, keep client work separated, and speed up recurring decisions across projects.
            </p>
          </div>

          <article className="grid overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 md:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-64 overflow-hidden bg-[#050816] p-6 md:min-h-96">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(0,229,255,.24),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(255,61,129,.2),transparent_30%),linear-gradient(135deg,#050816,#0c0b18_48%,#171027)]" />
              <div className="absolute inset-x-8 bottom-24 h-1 rotate-[-8deg] rounded-full bg-[linear-gradient(90deg,#00E5FF,#7C3AED,#FF3D81)] opacity-80 blur-sm" />
              <div className="relative flex h-full flex-col justify-between rounded-xl border border-[#292844] bg-[#0b0a16]/80 p-6 shadow-2xl shadow-black/30">
                <div className="space-y-7">
                  <div className="flex items-center gap-4">
                    <img
                      className="h-14 w-14 rounded-2xl shadow-[0_0_28px_rgba(0,229,255,.24)]"
                      src={clampLogoUrl}
                      width={64}
                      height={64}
                      alt="Clamp logo"
                    />
                    <div>
                      <p className="text-2xl font-semibold tracking-tight text-slate-50">
                        Clamp
                      </p>
                      <p className="text-sm font-medium text-cyan-200/80">
                        Fluid typography generator
                      </p>
                    </div>
                  </div>
                  <div className="max-w-lg">
                    <p className="text-lg font-medium leading-relaxed text-[#d8cff8]">
                      Generate fluid typography tokens with CSS clamp(), preview responsive type scales, and copy production-ready CSS or Tailwind output.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 font-mono text-sm font-semibold text-cyan-200">
                  clamp(1rem, 0.62rem + 1.9vw, 3rem)
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              <p className="mb-4 inline-flex rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-200">
                Case study
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-gray-100 md:text-3xl">
                Clamp
              </h3>
              <p className="mb-6 text-brand-100/80">
                A product built by Code 640 to bring more structure to multi-client delivery. Clamp helps manage fluid font-size values across different projects, turning recurring calculations into reusable decisions that speed up implementation.
              </p>
              <ul className="mb-8 flex flex-wrap gap-2 text-sm">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                  >
                    <span className="font-army tracking-wider text-gray-100 lowercase">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                className="btn border border-gray-700 bg-gray-900/70 text-gray-200 hover:border-brand-500/60 hover:text-brand-200"
                href="https://clamp.code640.com"
                rel="noreferrer"
                target="_blank"
              >
                View project
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
