// ============================================================================
// DEMO — CENTRAL BUSINESS DATA
// ----------------------------------------------------------------------------
// Every fact on the website is pulled from this file. Once the business
// owner confirms real details, replace the values marked [VERIFY] below.
// Nothing outside this file should need to change for a content update.
// ============================================================================

export const business = {
  name: 'DEMO',
  shortName: 'DEMO',
  category: '[VERIFY BUSINESS CATEGORY]',
  description:
    'DEMO is a Dharashiv-based professional business focused on providing [VERIFY SERVICES] to its clients.',
  tagline: 'Business built on trust.',

  city: 'Dharashiv',
  state: 'Maharashtra',
  country: 'India',

  phone: '[VERIFY PHONE NUMBER]',
  phoneHref: 'tel:+910000000000', // [VERIFY] replace with real number, e.g. +919876543210
  whatsapp: '[VERIFY WHATSAPP NUMBER]',
  whatsappNumber: '910000000000', // [VERIFY] digits only, country code first, no + or spaces
  email: '[VERIFY EMAIL ADDRESS]',

  address: '[VERIFY FULL ADDRESS], Dharashiv, Maharashtra, India',
  googleMaps: '[VERIFY GOOGLE MAPS LINK]',

  instagram: '[VERIFY INSTAGRAM HANDLE]',
  facebook: '[VERIFY FACEBOOK PAGE]',

  openingHours: '[VERIFY OPENING HOURS]',
}

export const whatsappMessage =
  'Hi DEMO, I would like to enquire about your services.'

export const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`

// ----------------------------------------------------------------------------
// SERVICES — placeholder structure only. Do not invent real service names.
// Replace name/description/detail for each entry once the owner confirms
// what DEMO actually offers.
// ----------------------------------------------------------------------------
export const services = [
  {
    id: '01',
    name: '[SERVICE NAME 1]',
    short: 'Replace with a one-line summary of this service.',
    detail:
      'Replace with the actual service description once confirmed by the business owner. This space is reserved for an explanation of what the service includes and who it is for.',
  },
  {
    id: '02',
    name: '[SERVICE NAME 2]',
    short: 'Replace with a one-line summary of this service.',
    detail:
      'Replace with the actual service description once confirmed by the business owner. This space is reserved for an explanation of what the service includes and who it is for.',
  },
  {
    id: '03',
    name: '[SERVICE NAME 3]',
    short: 'Replace with a one-line summary of this service.',
    detail:
      'Replace with the actual service description once confirmed by the business owner. This space is reserved for an explanation of what the service includes and who it is for.',
  },
  {
    id: '04',
    name: '[SERVICE NAME 4]',
    short: 'Replace with a one-line summary of this service.',
    detail:
      'Replace with the actual service description once confirmed by the business owner. This space is reserved for an explanation of what the service includes and who it is for.',
  },
  {
    id: '05',
    name: '[SERVICE NAME 5]',
    short: 'Replace with a one-line summary of this service.',
    detail:
      'Replace with the actual service description once confirmed by the business owner. This space is reserved for an explanation of what the service includes and who it is for.',
  },
  {
    id: '06',
    name: '[SERVICE NAME 6]',
    short: 'Replace with a one-line summary of this service.',
    detail:
      'Replace with the actual service description once confirmed by the business owner. This space is reserved for an explanation of what the service includes and who it is for.',
  },
]

// ----------------------------------------------------------------------------
// WHY WORK WITH US — brand-positioning statements, not factual claims.
// ----------------------------------------------------------------------------
export const whyUs = [
  {
    title: 'Clarity',
    text: 'Clear communication from the beginning.',
  },
  {
    title: 'Professional Approach',
    text: 'A structured approach to client requirements.',
  },
  {
    title: 'Personal Attention',
    text: 'Understanding the requirement before recommending a solution.',
  },
  {
    title: 'Reliable Communication',
    text: 'Making it easy for clients to stay connected.',
  },
]

// ----------------------------------------------------------------------------
// VALUES
// ----------------------------------------------------------------------------
export const values = [
  {
    title: 'Integrity',
    text: 'Transparent and straightforward communication.',
  },
  {
    title: 'Responsibility',
    text: 'Taking client requirements seriously.',
  },
  {
    title: 'Quality',
    text: 'Focus on delivering work with attention to detail.',
  },
  {
    title: 'Relationships',
    text: 'Building long-term professional relationships.',
  },
]

// ----------------------------------------------------------------------------
// PROCESS — a real ordered sequence, so numbering is meaningful here.
// ----------------------------------------------------------------------------
export const process = [
  {
    id: '01',
    title: 'Discuss',
    text: "Understand the client's requirement.",
  },
  {
    id: '02',
    title: 'Analyze',
    text: 'Understand the scope and possible approach.',
  },
  {
    id: '03',
    title: 'Execute',
    text: 'Work according to the agreed requirements.',
  },
  {
    id: '04',
    title: 'Deliver',
    text: 'Complete the agreed work and communicate the next steps.',
  },
]

// ----------------------------------------------------------------------------
// WORK / PORTFOLIO — leave empty until real projects are confirmed.
// When this array is empty, the site automatically shows a services-in-action
// section instead of a portfolio grid (see Work.jsx).
// ----------------------------------------------------------------------------
export const work = [
  // {
  //   client: '[VERIFY]',
  //   category: '[VERIFY]',
  //   description: '[VERIFY]',
  //   image: '[REPLACE WITH REAL IMAGE]',
  // },
]

// ----------------------------------------------------------------------------
// TESTIMONIALS — placeholders only. Do not fabricate names or quotes.
// ----------------------------------------------------------------------------
export const testimonials = [
  {
    quote: 'REAL CLIENT TESTIMONIAL WILL APPEAR HERE.',
    name: '[VERIFY CLIENT NAME]',
    role: '[VERIFY]',
  },
  {
    quote: 'REAL CLIENT TESTIMONIAL WILL APPEAR HERE.',
    name: '[VERIFY CLIENT NAME]',
    role: '[VERIFY]',
  },
]

// ----------------------------------------------------------------------------
// FAQ
// ----------------------------------------------------------------------------
export const faqs = [
  {
    q: `What services does ${business.name} provide?`,
    a: `${business.name} currently offers ${services
      .map((s) => s.name)
      .join(', ')}. [Replace this list once the exact services are confirmed.]`,
  },
  {
    q: 'Where are you located?',
    a: `${business.city}, ${business.state}.`,
  },
  {
    q: 'How can I contact you?',
    a: `Call ${business.phone}, message on WhatsApp at ${business.whatsapp}, or email ${business.email}.`,
  },
  {
    q: 'How do I get a quotation?',
    a: 'Contact us with your requirements and the team can discuss the scope and next steps.',
  },
  {
    q: 'Do you serve customers outside Dharashiv?',
    a: '[VERIFY — confirm the actual service area with the business owner.]',
  },
]

// ----------------------------------------------------------------------------
// TRUST SECTION
// ----------------------------------------------------------------------------
export const trustPoints = [
  {
    title: 'Local Presence',
    text: `${business.city}, ${business.state}`,
  },
  {
    title: 'Direct Communication',
    text: 'Easy call and WhatsApp contact.',
  },
  {
    title: 'Clear Process',
    text: 'Understand → Plan → Execute → Deliver.',
  },
]

// ----------------------------------------------------------------------------
// NAVIGATION
// ----------------------------------------------------------------------------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]
