import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden">
            <motion.p
              className="font-display text-2xl tracking-[0.35em] text-warmwhite"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              DEMO
            </motion.p>
          </div>
          <motion.div
            className="mt-8 h-px bg-stone/40 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            <motion.div
              className="h-full bg-brass"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
