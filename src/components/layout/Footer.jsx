import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <Container>
        {/* Main */}
        <div className="py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
            {/* Brand */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                {site.name}
              </p>

              <h2 className="mt-7 max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                Punya ide untuk website atau sistem digital?
              </h2>

              <a
                href="mailto:hello@nusacode.com"
                className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-gray-400">
                hello@nusacode.com
                <span className="text-lg">↗</span>
              </a>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Navigation
              </p>

              <nav className="mt-6">
                <ul className="space-y-3">
                  {site.navLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path || "/"}
                        className="text-sm text-gray-300 transition-colors hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Contact
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <a
                  href="https://wa.me/628979673149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-white">
                  WhatsApp
                </a>

                <a
                  href="mailto:syechanmochsinalthubaiti@gmail.com"
                  className="block transition-colors hover:text-white">
                  Email
                </a>

                <span className="block text-gray-500">Jakarta, Indonesia</span>
              </div>

              {/* Socials */}
              <div className="mt-8 flex gap-4">
                {site.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-gray-500 transition-colors hover:text-white">
                    <SocialIcon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-gray-800 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>

          <p>Built with React & Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({ name }) {
  const icons = {
    instagram: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),

    facebook: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true">
        <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.625v22.75C0 25.4.6 26 1.6 26h11.6v-7.5h-3.1V12h3.1V8.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.4.1 2.7.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.7v2.3h3.6l-.5 6.5h-3v7.5h6c1 0 1.6-.6 1.6-1.625V1.625C23.275.6 22.675 0 22.675 0z" />
      </svg>
    ),

    tiktok: (
      <svg
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  };

  return icons[name] || null;
}
