import { motion } from 'framer-motion'
import { work, services } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

const serviceImages = [
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=900&q=80',
]

export default function Work() {
  const hasWork = work && work.length > 0

  return (
    <section className="bg-offwhite px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-4xl text-charcoal md:text-5xl"
          >
            {hasWork ? 'Our work' : 'Our services in action'}
          </motion.h2>
          {!hasWork && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="max-w-sm font-sans text-sm text-stone"
            >
              A portfolio will appear here once real project details are
              confirmed. For now, here's a look at the areas we work in.
            </motion.p>
          )}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
          {hasWork
            ? work.map((item, i) => (
                <motion.div
                  key={item.client + i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                  data-cursor="VIEW"
                  className="group overflow-hidden"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-line">
                    <img
                      src={item.image}
                      alt={item.client}
                      className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 font-mono text-[11px] tracking-widest2 text-brass">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-charcoal">
                    {item.client}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-stone">
                    {item.description}
                  </p>
                </motion.div>
              ))
            : services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease, delay: i * 0.06 }}
                  className="group overflow-hidden"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-line">
                    <img
                      src={serviceImages[i % serviceImages.length]}
                      alt="Demo imagery — illustrative only"
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-premium group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 font-mono text-[11px] tracking-widest2 text-brass">
                    {service.id}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-charcoal">
                    {service.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-stone">
                    {service.short}
                  </p>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  )
}
