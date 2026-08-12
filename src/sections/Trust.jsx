import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Route } from 'lucide-react'
import { trustPoints } from '../data/business'

const ease = [0.22, 1, 0.36, 1]
const icons = [MapPin, MessageCircle, Route]

export default function Trust() {
  return (
    <section className="bg-navy px-6 py-20 text-warmwhite md:px-10 md:py-24">
      <div className="mx-auto max-w-content grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {trustPoints.map((point, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <Icon size={20} className="mt-1 shrink-0 text-brass" />
              <div>
                <h3 className="font-display text-lg text-warmwhite">
                  {point.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-warmwhite/50">
                  {point.text}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
