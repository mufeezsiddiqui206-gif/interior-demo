import { motion } from 'framer-motion'
import { whyUs } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-warmwhite px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease }}
          className="font-display text-4xl text-charcoal md:text-5xl"
        >
          Why work with us?
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-20 md:grid-cols-4">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="border-t border-line pt-6"
            >
              <h3 className="font-display text-xl text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-stone">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
