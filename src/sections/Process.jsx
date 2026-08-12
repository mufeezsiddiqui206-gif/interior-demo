import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { process } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.5'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="bg-warmwhite px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease }}
          className="font-display text-4xl text-charcoal md:text-5xl"
        >
          How we work
        </motion.h2>

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* connecting line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line md:left-[27px]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] top-2 w-px bg-brass md:left-[27px]"
          />

          <div className="flex flex-col gap-14 md:gap-20">
            {process.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                className="relative flex items-start gap-6 pl-12 md:gap-10 md:pl-16"
              >
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-charcoal bg-warmwhite font-mono text-xs text-charcoal md:h-14 md:w-14">
                  {step.id}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-charcoal md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md font-sans text-base leading-relaxed text-stone">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
