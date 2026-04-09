import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import colors from '../theme/colors'

const testimonials = [
  {
    name: 'Aanya Rao',
    title: 'Art Director, Mumbai',
    quote:
      'From the concierge handoff to the legal closure, every touchpoint felt curated and confidential.',
  },
  {
    name: 'Dev Malhotra',
    title: 'Tech Entrepreneur, Bengaluru',
    quote:
      'We toured three villas in a single day. The team displayed transparent pricing and a sharp eye for detail.',
  },
  {
    name: 'Isabelle Fernandes',
    title: 'Investor, Goa',
    quote:
      'This is real estate with a hospitality soul—personalized tours, flexible documentation, and stellar follow-through.',
  },
]

const Testimonials = () => (
  <motion.section
    id="testimonials"
    className="py-16 text-primary"
    style={{ backgroundColor: colors.light }}
  >
    <div className="container mx-auto max-w-6xl space-y-10 px-6">
      <div>
        <p className="text-xs uppercase tracking-[0.45em] text-accent">Testimonials</p>
        <h2 className="text-3xl font-semibold">What our clients appreciate</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <motion.article
            key={testimonial.name}
            className="flex h-full flex-col justify-between rounded-3xl border bg-white p-6 shadow-xl"
            style={{ borderColor: colors.border }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1 text-accent">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm text-text/80 text-secondary">“{testimonial.quote}”</p>
            <div className="mt-6 space-y-0.5"> 
              <p className="text-base font-semibold text-primary">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-text/60 text-secondary">{testimonial.title}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </motion.section>
)

export default Testimonials
