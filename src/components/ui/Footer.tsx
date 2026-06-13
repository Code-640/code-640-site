import logo from '../../logo.svg';
import FooterIllustration from "./../../assets/footer-illustration.svg";

const navLinks = [
  { label: 'Hero banner', href: '#home' },
  { label: 'Who We Are', href: '#about' },
  { label: 'What We Do', href: '#services' },
  { label: 'Featured Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const projectLinks = [
  { label: 'Clamp', href: 'https://clamp.code640.com' },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-80"
          aria-hidden="true"
        >
          <img
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid gap-10 border-t py-10 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:grid-cols-[1.3fr_1fr_1fr] md:py-14">
          <div>
            <a href="#home" aria-label="Code 640 home">
              <img src={logo} className="app-logo" alt="Code 640" width={200} />
            </a>
            <p className="mt-4 max-w-md text-sm text-brand-100/75">
              Full-stack development studio building sharp, fast, and scalable digital products.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-200">Landing page</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-brand-100/75 transition hover:text-brand-500"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-200">Featured Work</h3>
            <ul className="space-y-2 text-sm">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-brand-100/75 transition hover:text-brand-500"
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="pb-5 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Code 640. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
