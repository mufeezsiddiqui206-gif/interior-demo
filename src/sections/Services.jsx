import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services, whatsappLink } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

export default function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section id="services" className="bg-navy text-warmwhite">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-4xl md:text-5xl"
          >
            What we offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="font-mono text-xs tracking-widest2 text-warmwhite/40"
          >
            SELECT A SERVICE TO EXPLORE
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
          {/* Left: service list */}
          <div className="md:col-span-5 border-t border-warmwhite/10">
            {services.map((service, i) => (
              <button
                key={service.id}
                onClick={() => setActive(i)}
                data-cursor="EXPLORE"
                className={`group flex w-full items-center justify-between border-b border-warmwhite/10 py-5 text-left transition-colors duration-300 ${
                  active === i ? 'text-brass' : 'text-warmwhite/60 hover:text-warmwhite'
                }`}
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-mono text-xs">{service.id}</span>
                  <span className="font-display text-xl md:text-2xl">
                    {service.name}
                  </span>
                </span>
                <motion.span
                  animate={{
                    x: active === i ? 0 : -8,
                    opacity: active === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease }}
                  className="hidden md:block"
                >
                  <ArrowUpRight size={18} />
                </motion.span>
              </button>
            ))}
          </div>

          {/* Right: active service detail */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <span className="font-display text-[7rem] leading-none text-warmwhite/10 md:text-[9rem]">
                    {current.id}
                  </span>
                  <h3 className="-mt-6 font-display text-3xl text-warmwhite md:text-4xl">
                    {current.name}
                  </h3>
                  <p className="mt-4 font-sans text-sm uppercase tracking-wide text-brass">
                    {current.short}
                  </p>
                  <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-warmwhite/60">
                    {current.detail}
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="CONTACT"
                  className="mt-10 inline-flex w-fit items-center gap-2 border border-warmwhite/30 px-6 py-3.5 font-mono text-[11px] tracking-widest2 uppercase text-warmwhite transition-all duration-300 ease-premium hover:border-brass hover:text-brass"
                >
                  Enquire About This Service
                  <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
