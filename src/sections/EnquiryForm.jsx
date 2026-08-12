import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { services } from '../data/business'

const ease = [0.22, 1, 0.36, 1]

const contactMethods = ['Phone Call', 'WhatsApp', 'Email']

const fieldClasses =
  'w-full border-b border-charcoal/20 bg-transparent py-3 font-sans text-base text-charcoal placeholder:text-stone focus:border-brass transition-colors duration-300 outline-none'

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    contactMethod: '',
    message: '',
  })

  const update = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // This is a demo form. Connect to a real submission endpoint,
    // form service, or CRM before launch.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex flex-col items-start gap-4 border border-line bg-warmwhite p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brass text-charcoal">
          <Check size={22} />
        </span>
        <h3 className="font-display text-2xl text-charcoal">
          Enquiry received.
        </h3>
        <p className="max-w-sm font-sans text-sm leading-relaxed text-stone">
          Thank you for reaching out. This is a demo confirmation — once
          connected to a live endpoint, the team will follow up shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 font-mono text-[11px] tracking-widest2 uppercase text-brass underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2"
    >
      <div>
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Full Name"
          value={values.name}
          onChange={update('name')}
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          required
          placeholder="Phone Number"
          value={values.phone}
          onChange={update('phone')}
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={update('email')}
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="location" className="sr-only">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Location"
          value={values.location}
          onChange={update('location')}
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="service" className="sr-only">
          Service Required
        </label>
        <select
          id="service"
          required
          value={values.service}
          onChange={update('service')}
          className={`${fieldClasses} ${!values.service ? 'text-stone' : ''}`}
        >
          <option value="" disabled>
            Service Required
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contactMethod" className="sr-only">
          Preferred Contact Method
        </label>
        <select
          id="contactMethod"
          value={values.contactMethod}
          onChange={update('contactMethod')}
          className={`${fieldClasses} ${
            !values.contactMethod ? 'text-stone' : ''
          }`}
        >
          <option value="" disabled>
            Preferred Contact Method
          </option>
          {contactMethods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Message"
          value={values.message}
          onChange={update('message')}
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          data-cursor="CONTACT"
          className="group inline-flex items-center gap-2 bg-charcoal px-8 py-4 font-mono text-[11px] tracking-widest2 uppercase text-warmwhite transition-all duration-300 ease-premium hover:bg-brass hover:text-charcoal"
        >
          Send Enquiry
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </form>
  )
}
