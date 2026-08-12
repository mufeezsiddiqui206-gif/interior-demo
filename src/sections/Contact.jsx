import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { business, whatsappLink } from '../data/business'
import EnquiryForm from './EnquiryForm'

const ease = [0.22, 1, 0.36, 1]

export default function Contact() {
  return (
    <section id="contact" className="bg-warmwhite px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-4xl leading-[1.08] text-charcoal md:text-5xl"
            >
              Let&rsquo;s discuss your requirement.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="mt-6 max-w-sm font-sans text-base leading-relaxed text-stone"
            >
              Have a question or looking for a professional solution? Get in
              touch with {business.name}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="mt-10 flex flex-col gap-3"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CONTACT"
                className="group inline-flex w-fit items-center gap-2 border border-charcoal px-6 py-3.5 font-mono text-[11px] tracking-widest2 uppercase text-charcoal transition-all duration-300 ease-premium hover:bg-charcoal hover:text-warmwhite"
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </a>
              <a
                href={business.phoneHref}
                data-cursor="CONTACT"
                className="group inline-flex w-fit items-center gap-2 border border-charcoal/20 px-6 py-3.5 font-mono text-[11px] tracking-widest2 uppercase text-charcoal/70 transition-all duration-300 ease-premium hover:border-charcoal hover:text-charcoal"
              >
                <Phone size={14} />
                Call Now &middot; {business.phone}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="md:col-span-7 border border-line bg-offwhite p-8 md:p-12"
          >
            <p className="font-mono text-[11px] tracking-widest2 text-brass">
              SEND AN ENQUIRY
            </p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
