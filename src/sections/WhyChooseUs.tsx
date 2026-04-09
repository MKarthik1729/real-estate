import { motion } from 'framer-motion'
import {
  FaCheckCircle,
  FaFileContract,
  FaHome,
  FaMoneyBillWave,
} from 'react-icons/fa'
import colors from '../theme/colors'

const features = [
  {
    title: 'Trusted Agents',
    description: 'Dedicated luxury advisors available 24/7 for private tours.',
    icon: FaHome,
  },
  {
    title: 'Verified Properties',
    description: 'Every listing has been inspected, accredited, and documented.',
    icon: FaCheckCircle,
  },
  {
    title: 'Best Prices',
    description: 'Data-backed pricing with negotiation support for high-value assets.',
    icon: FaMoneyBillWave,
  },
  {
    title: 'Easy Documentation',
    description: 'Loan facilitation, legal reviews, and possession timelines handled.',
    icon: FaFileContract,
  },
]

const WhyChooseUs = () => (
  <motion.section
    id="why"
    className="py-16 text-primary"
    style={{ backgroundColor: colors.light }}
  >
    <div className="container mx-auto max-w-6xl space-y-10 px-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.5em] text-accent">Why Us</p>
        <h2 className="text-3xl font-semibold">A bespoke service that protects your investment</h2>
        <p className="max-w-2xl text-sm text-text/80 text-secondary">
          We blend concierge-level service with data intelligence so every property feels effortless.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <motion.article
              key={feature.title}
              className="flex gap-4 rounded-3xl border bg-white p-6 transition hover:-translate-y-1 hover:border-accent/80"
              style={{ borderColor: colors.border }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted/80">{feature.description}</p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  </motion.section>
)

export default WhyChooseUs
