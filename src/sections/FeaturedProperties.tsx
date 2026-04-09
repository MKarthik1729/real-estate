import { motion } from 'framer-motion'
import colors from '../theme/colors'

type PropertyItem = {
  title: string
  price: string
  location: string
  type: string
  image: string
  badge: string
}

const properties: PropertyItem[] = [
  {
    title: 'Azure Bay Villa',
    price: '₹9.2 Cr',
    location: 'Goa, Candolim',
    type: 'Seaside Villa',
    image: '/images/modern-villa.jpg',
    badge: 'Beachfront',
  },
  {
    title: 'Antara Residences',
    price: '₹6.5 Cr',
    location: 'Bengaluru, Whitefield',
    type: 'Sky Villas',
    image: '/images/premium-apartment.jpg',
    badge: 'Signature',
  },
  {
    title: 'Verdant Heights',
    price: '₹3.8 Cr',
    location: 'Pune, Lavasa',
    type: 'Hillside Homes',
    image: '/images/aerial-real-estate.jpg',
    badge: 'Gated',
  },
  {
    title: 'Opaline Courts',
    price: '₹12.4 Cr',
    location: 'Mumbai, Worli',
    type: 'Penthouse Suite',
    image: '/images/luxury-house.jpg',
    badge: 'Signature',
  },
  {
    title: 'Sapphire Plots',
    price: '₹1.2 Cr',
    location: 'Ahmedabad, Thaltej',
    type: 'Gated Plots',
    image: '/images/plots-land.jpg',
    badge: 'Ready-to-build',
  },
  {
    title: 'Elysian Frame',
    price: '₹7.3 Cr',
    location: 'Kerala, Alleppey',
    type: 'Backwater Villa',
    image: '/images/interior-luxury.jpg',
    badge: 'Curated',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const FeaturedProperties = () => (
  <motion.section
    id="properties"
    className="py-16"
    style={{ backgroundColor: colors.light }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="container mx-auto max-w-6xl space-y-8 px-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-accent">Curated</p>
        <h2 className="text-3xl font-semibold text-primary">Featured Properties</h2>
        </div>
        <p className="text-sm text-text/80">Hand selected residences, ready to tour.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <motion.article
            key={property.title}
            className="group overflow-hidden rounded-[30px] border bg-surface shadow-xl transition-all"
            style={{ borderColor: colors.border }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 160 }}
          >
            <div
              className="h-56 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${property.image})` }}
            >
              <span className="m-4 inline-flex rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                {property.badge}
              </span>
            </div>
            <div className="space-y-2 p-6 text-primary">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-primary">{property.title}</h3>
                <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {property.price}
                </span>
              </div>
              <p className="text-sm text-muted/90">{property.location}</p>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-muted/70">
                {property.type}
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-accent hover:text-accent">
                View Details <span aria-hidden>→</span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </motion.section>
)

export default FeaturedProperties
