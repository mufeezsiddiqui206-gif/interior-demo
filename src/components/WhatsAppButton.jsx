import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/business'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="CONTACT"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} fill="white" className="text-[#25D366]" />
    </motion.a>
  )
}
