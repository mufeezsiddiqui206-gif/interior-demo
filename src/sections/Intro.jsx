import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Intro() {
  return (
    <section className="bg-warmwhite px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="md:col-span-4"
          >
            <span className="font-mono text-[11px] tracking-widest2 text-brass">
              OUR APPROACH
            </span>
          </motion.div>

          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-4xl leading-[1.08] text-charcoal md:text-5xl lg:text-6xl"
            >
              A better way to work together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-stone"
            >
              Every client requirement is different. Our approach is built
              around understanding the requirement clearly, communicating
              transparently and providing a focused path forward.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
