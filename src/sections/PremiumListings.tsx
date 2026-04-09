import { motion } from 'framer-motion'
import colors from '../theme/colors'

const premiumListings = [
  {
    title: 'Solstice Estate',
    detail: 'Clifftop villa with infinity edges & private heli-pad.',
    price: '₹18.7 Cr',
    image: '/images/luxury-house.jpg',
  },
  {
    title: 'Luna Ridge',
    detail: 'Gated community plots with bespoke master-planning.',
    price: '₹5.4 Cr',
    image: '/images/plots-land.jpg',
  },
  {
    title: 'Aurora Terrace',
    detail: 'Skyline penthouse facing the Arabian Sea.',
    price: '₹15.3 Cr',
    image: '/images/premium-apartment.jpg',
  },
  {
    title: 'Lagoon Curve',
    detail: 'Private canal-side villas with yacht access.',
    price: '₹11.9 Cr',
    image: '/images/interior-luxury.jpg',
  },
]

const PremiumListings = () => (
  <motion.section
    id="listings"
    className="py-16"
    style={{ backgroundColor: colors.light }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-accent">Premium Listings</p>
        <h2 className="text-3xl font-semibold text-primary">Showcase</h2>
        </div>
        <p className="text-sm text-text/70">Swipe through curated high-end estates.</p>
      </div>

      <div className="mt-8 flex gap-6 overflow-x-auto pb-4 pr-4">
        {premiumListings.map((listing) => (
          <motion.article
            key={listing.title}
            className="min-w-[280px] rounded-3xl border bg-white/40 p-1 shadow-2xl backdrop-blur-lg"
            style={{ borderColor: colors.border }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="flex h-48 flex-col justify-end rounded-3xl bg-cover bg-center p-5 text-white"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${listing.image})` }}
            >
              <span className="text-xs uppercase tracking-[0.5em] text-accent">{listing.price}</span>
              <h3 className="mt-2 text-xl font-semibold">{listing.title}</h3>
              <p className="mt-1 text-sm text-white/80">{listing.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </motion.section>
)

export default PremiumListings
