import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { business } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

const lineReveal = {
  hidden: { y: '110%' },
  show: (i = 0) => ({
    y: 0,
    transition: { duration: 0.9, ease, delay: 0.15 + i * 0.1 },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal pt-28"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imgY, scale: imgScale }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80"
          alt="Demo imagery — a professional business workspace, for illustrative purposes only"
          className="h-full w-full object-cover object-center opacity-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/30" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-widest2 text-warmwhite/50 [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-brass" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-16 md:px-10 md:pb-24">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-mono text-xs tracking-widest2 text-brass"
          >
            {business.name.toUpperCase()} &middot; {business.city.toUpperCase()}
          </motion.p>
        </div>

        <h1 className="mt-6 font-display font-medium text-warmwhite">
          <span className="block overflow-hidden">
            <motion.span
              custom={0}
              variants={lineReveal}
              initial="hidden"
              animate="show"
              className="block text-[13vw] leading-[0.98] tracking-tight md:text-[7.2vw]"
            >
              Business built
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              custom={1}
              variants={lineReveal}
              initial="hidden"
              animate="show"
              className="block text-[13vw] leading-[0.98] tracking-tight md:text-[7.2vw] text-brass"
            >
              on trust.
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="max-w-md font-sans text-base leading-relaxed text-warmwhite/70 md:text-lg"
          >
            Professional service, clear communication and solutions designed
            around your requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              data-cursor="CONTACT"
              className="group inline-flex items-center gap-2 bg-brass px-7 py-3.5 font-mono text-[11px] tracking-widest2 uppercase text-charcoal transition-all duration-300 ease-premium hover:bg-warmwhite"
            >
              Get in Touch
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-warmwhite/30 px-7 py-3.5 font-mono text-[11px] tracking-widest2 uppercase text-warmwhite transition-all duration-300 ease-premium hover:border-warmwhite hover:bg-warmwhite/5"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex items-center gap-3 border-t border-warmwhite/10 pt-5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brass" />
          <span className="font-mono text-[11px] tracking-widest2 text-warmwhite/50">
            {business.city.toUpperCase()} &middot; {business.state.toUpperCase()}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
