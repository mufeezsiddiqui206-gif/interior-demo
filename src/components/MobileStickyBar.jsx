import { motion } from 'framer-motion'
import { Phone, ArrowUpRight } from 'lucide-react'
import { business } from '../data/business'

export default function MobileStickyBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden border-t border-line bg-warmwhite/95 backdrop-blur-md"
    >
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-line py-4 font-mono text-[11px] tracking-widest2 uppercase text-charcoal"
      >
        <Phone size={14} />
        Call
      </a>
      <a
        href="#contact"
        className="flex flex-[1.4] items-center justify-center gap-2 bg-charcoal py-4 font-mono text-[11px] tracking-widest2 uppercase text-warmwhite"
      >
        Get in Touch
        <ArrowUpRight size={14} />
      </a>
    </motion.div>
  )
}
