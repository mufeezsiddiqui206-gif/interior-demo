import { motion } from 'framer-motion'
import { MapPin, Clock, Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import { business, whatsappLink } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

const rows = [
  { icon: MapPin, label: 'Address', value: business.address },
  { icon: Phone, label: 'Phone', value: business.phone, href: business.phoneHref },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: business.whatsapp,
    href: whatsappLink,
  },
  { icon: Mail, label: 'Email', value: business.email, href: `mailto:${business.email}` },
  { icon: Clock, label: 'Opening Hours', value: business.openingHours },
]

export default function Location() {
  return (
    <section className="bg-charcoal px-6 py-24 text-warmwhite md:px-10 md:py-32">
      <div className="mx-auto max-w-content grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="md:col-span-5"
        >
          <span className="font-mono text-[11px] tracking-widest2 text-brass">
            FIND US
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] md:text-5xl">
            {business.city}, {business.state}
          </h2>

          {business.googleMaps && business.googleMaps !== '[VERIFY GOOGLE MAPS LINK]' ? (
            <a
              href={business.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="VIEW"
              className="mt-8 inline-flex items-center gap-2 border border-warmwhite/30 px-6 py-3.5 font-mono text-[11px] tracking-widest2 uppercase text-warmwhite transition-all duration-300 ease-premium hover:border-brass hover:text-brass"
            >
              Open in Google Maps
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <div className="mt-8 aspect-[4/3] w-full max-w-sm border border-warmwhite/15 bg-navydeep">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center px-6">
                <MapPin size={22} className="text-brass" />
                <p className="font-mono text-[11px] tracking-widest2 text-warmwhite/40">
                  MAP EMBED PENDING VERIFIED ADDRESS
                </p>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="md:col-span-7"
        >
          <div className="border-t border-warmwhite/10">
            {rows.map((row) => {
              const Icon = row.icon
              const content = (
                <div className="flex items-center justify-between gap-4 border-b border-warmwhite/10 py-6">
                  <div className="flex items-center gap-4">
                    <Icon size={18} className="shrink-0 text-brass" />
                    <span className="font-mono text-[11px] tracking-widest2 text-warmwhite/40">
                      {row.label.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-right font-sans text-sm text-warmwhite/80">
                    {row.value}
                  </span>
                </div>
              )
              return row.href ? (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith('http') ? '_blank' : undefined}
                  rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block transition-opacity duration-300 hover:opacity-70"
                >
                  {content}
                </a>
              ) : (
                <div key={row.label}>{content}</div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
