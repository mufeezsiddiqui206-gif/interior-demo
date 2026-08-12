import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

export default function Testimonials() {
  return (
    <section className="bg-warmwhite px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease }}
          className="font-display text-4xl text-charcoal md:text-5xl"
        >
          What clients say
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-2 md:gap-10">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="border border-line bg-offwhite p-8 md:p-10"
            >
              <Quote size={22} className="text-brass" />
              <blockquote className="mt-5 font-display text-xl italic leading-relaxed text-charcoal md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] tracking-widest2 text-stone">
                {t.name} &middot; {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
