import { motion } from 'framer-motion'
import { values } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

export default function Values() {
  return (
    <section className="bg-charcoal px-6 py-24 text-warmwhite md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease }}
          className="font-display text-4xl md:text-5xl"
        >
          What we value
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 divide-y divide-warmwhite/10 border-y border-warmwhite/10 md:mt-20 md:grid-cols-4 md:divide-x md:divide-y-0">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="px-0 py-8 md:px-8 md:py-10 first:pl-0"
            >
              <span className="font-mono text-xs text-brass">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl text-warmwhite">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-warmwhite/50">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
