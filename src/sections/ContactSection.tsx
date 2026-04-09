import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import colors from '../theme/colors'

const ContactSection = () => (
  <motion.section
    id="contact"
    className="py-16 text-primary"
    style={{ backgroundColor: colors.light }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto max-w-5xl space-y-10 px-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.5em] text-accent">Contact</p>
        <h2 className="text-3xl font-semibold">Let's design your next luxury move</h2>
        <p className="text-sm text-text/80 text-secondary">
          Share your interest, and our concierge will arrange a private walkthrough or digital dossier.
        </p>
      </div>

      <div
        className="grid gap-6 rounded-[32px] border bg-white/80 p-6 shadow-2xl md:grid-cols-[1.1fr_0.9fr]"
        style={{ borderColor: colors.border }}
      >
        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.4em] text-text/70 text-secondary">Name</label>
            <input
              type="text"
              className="w-full rounded-2xl border bg-white px-4 py-3 text-sm text-primary outline-none focus:border-accent"
              style={{ borderColor: colors.border }}
              placeholder="Saanjh Kapoor"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.4em] text-text/70 text-secondary">Phone</label>
              <input
                type="tel"
                className="w-full rounded-2xl border bg-white px-4 py-3 text-sm text-primary outline-none focus:border-accent"
                style={{ borderColor: colors.border }}
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.4em] text-text/70 text-secondary">Email</label>
              <input
                type="email"
                className="w-full rounded-2xl border bg-white px-4 py-3 text-sm text-primary outline-none focus:border-accent"
                style={{ borderColor: colors.border }}
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.4em] text-text/70 text-secondary">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-2xl border bg-white px-4 py-3 text-sm text-primary outline-none focus:border-accent"
              style={{ borderColor: colors.border }}
              placeholder="Share your location preference, timeline, or investment goals"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-primary transition hover:opacity-90"
          >
            Request A Call
          </button>
        </form>

        <div
          className="space-y-6 rounded-2xl border bg-white p-6 text-sm text-muted/80 shadow-lg"
          style={{ borderColor: colors.border }}
        >
          <p className="text-xs uppercase tracking-[0.45em] text-accent">Concierge desk</p>
          <p className="text-lg font-semibold text-primary">WhatsApp</p>
          <p>+91 98765 43210</p>
          <p>Expect a direct response within 15 mins during business hours.</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10"
          >
            <FaWhatsapp className="h-4 w-4" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>

    <a
      href="#contact"
      className="fixed bottom-6 right-4 z-40 flex items-center gap-2 rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-2xl transition hover:opacity-90 md:hidden"
      style={{ backgroundColor: colors.accent }}
    >
      WhatsApp
      <span aria-hidden>→</span>
    </a>
  </motion.section>
)

export default ContactSection
