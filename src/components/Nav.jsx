import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { business, navLinks } from '../data/business'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
          scrolled
            ? 'bg-warmwhite/90 backdrop-blur-md border-b border-line py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 md:px-10">
          <a href="#home" className="flex flex-col leading-none" data-cursor="">
            <span className="font-display text-lg tracking-[0.15em] text-charcoal">
              DEMO
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-[13px] tracking-wide text-charcoal/80 hover:text-brass transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            data-cursor="CONTACT"
            className="hidden md:inline-flex items-center border border-charcoal px-6 py-2.5 font-mono text-[11px] tracking-widest2 uppercase text-charcoal hover:bg-charcoal hover:text-warmwhite transition-all duration-300 ease-premium"
          >
            Get in Touch
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-6 bg-charcoal origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-[1.5px] w-6 bg-charcoal"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-6 bg-charcoal origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-charcoal px-8 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-display text-4xl text-warmwhite py-3 block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 inline-flex w-fit items-center border border-brass px-6 py-3 font-mono text-xs tracking-widest2 uppercase text-brass"
            >
              Get in Touch
            </motion.a>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 font-mono text-xs tracking-wide text-stone"
            >
              {business.city}, {business.state}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
