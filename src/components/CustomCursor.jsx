import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const [label, setLabel] = useState('')
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (!isFinePointer || prefersReducedMotion) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const handleOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      setLabel(target ? target.getAttribute('data-cursor') : '')
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleOver)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2 hidden md:flex"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center rounded-full bg-charcoal text-warmwhite transition-all duration-200 ease-premium ${
          label ? 'h-16 w-16' : 'h-2.5 w-2.5'
        }`}
      >
        {label && (
          <span className="font-mono text-[10px] tracking-widest2 uppercase">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
