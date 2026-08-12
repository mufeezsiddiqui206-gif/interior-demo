import { motion } from 'framer-motion'
import { business } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  return (
    <section id="about" className="bg-offwhite px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="md:col-span-5"
        >
          <span className="font-mono text-[11px] tracking-widest2 text-brass">
            ABOUT
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] text-charcoal md:text-5xl">
            About {business.name}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="md:col-span-7"
        >
          <p className="font-sans text-lg leading-relaxed text-charcoal/80">
            {business.description}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-widest2 text-stone">
              OUR APPROACH
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
            {['Understand', 'Plan', 'Execute', 'Support'].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-3">
                <span className="font-display text-xl text-charcoal md:text-2xl">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="font-sans text-brass">&rarr;</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
