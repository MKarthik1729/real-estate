import { useMemo, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import colors from '../theme/colors'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Properties', href: '#properties' },
  { label: 'Why Us', href: '#why' },
  { label: 'Listings', href: '#listings' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menuClass = useMemo(
    () =>
      `transition-all duration-300 ${
        open ? 'max-h-[260px] opacity-100' : 'max-h-0 opacity-0'
      }`,
    [open],
  )

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md"
      style={{ borderColor: colors.border }}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6 text-primary">
        <a className="text-lg font-semibold tracking-[0.2em] text-primary" href="#hero">
          NOVA LIFESTYLE
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-accent/70 px-4 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-primary"
          >
            Book A Viewing
          </a>
        </nav>

        <button
          className="md:hidden rounded-full border p-2 text-lg text-primary transition hover:border-accent/80"
          style={{ borderColor: colors.border }}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-white/95 text-sm text-primary ${menuClass} md:hidden shadow-lg`}
        style={{ borderColor: `${colors.border}` }}
      >
        <div className="space-y-3 px-6 pb-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block rounded-xl border border-white/10 px-4 py-2 transition hover:border-accent hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block rounded-xl bg-accent px-4 py-2 text-center font-semibold text-primary transition hover:opacity-90"
            onClick={() => setOpen(false)}
          >
            Book A Viewing
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
