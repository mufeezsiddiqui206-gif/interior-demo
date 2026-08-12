import { Instagram, Facebook, ArrowUpRight } from 'lucide-react'
import { business, navLinks } from '../data/business'

export default function Footer() {
  const hasInstagram = business.instagram && !business.instagram.startsWith('[VERIFY')
  const hasFacebook = business.facebook && !business.facebook.startsWith('[VERIFY')

  return (
    <footer className="bg-ink px-6 pt-20 pb-8 text-warmwhite md:px-10 md:pt-28">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-14 border-b border-warmwhite/10 pb-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <span className="font-display text-2xl tracking-[0.1em]">
              {business.shortName}
            </span>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-warmwhite/50">
              Professional service, clear communication and solutions
              designed around your requirements.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-widest2 uppercase text-brass"
            >
              Get in Touch
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <p className="font-mono text-[11px] tracking-widest2 text-warmwhite/40">
              NAVIGATE
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-warmwhite/70 hover:text-warmwhite transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-widest2 text-warmwhite/40">
              CONTACT
            </p>
            <ul className="mt-5 flex flex-col gap-3 font-sans text-sm text-warmwhite/70">
              <li>Phone: {business.phone}</li>
              <li>WhatsApp: {business.whatsapp}</li>
              <li>Email: {business.email}</li>
              <li>
                {business.city}, {business.state}
              </li>
            </ul>

            {(hasInstagram || hasFacebook) && (
              <div className="mt-6 flex items-center gap-4">
                {hasInstagram && (
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-warmwhite/60 hover:text-brass transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                )}
                {hasFacebook && (
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-warmwhite/60 hover:text-brass transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-4 pt-8 md:flex-row md:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-warmwhite/30">
            &copy; 2026 {business.name}
          </p>
          <p className="font-mono text-[11px] tracking-wide text-warmwhite/30">
            {business.city}, {business.state}, {business.country}
          </p>
        </div>
      </div>
    </footer>
  )
}
