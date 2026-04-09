import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import colors from '../theme/colors'

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 },
  }),
}

const HeroSection = () => {
  return (
    <motion.section
      id="hero"
  className="relative min-h-screen overflow-hidden pb-24 pt-16 md:pb-32"
      style={{
        backgroundColor: colors.light,
        backgroundImage: `linear-gradient(135deg, rgba(248, 250, 252, 0.95) 40%, rgba(248, 250, 252, 0.6) 70%), url('/images/modern-villa.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/20" />
      <div className="container relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-6 px-6 text-primary">
        <motion.p
          variants={heroVariants}
          custom={0.1}
          className="text-sm uppercase tracking-[0.6em] text-accent"
        >
          Premiere Residences
        </motion.p>
        <motion.h1
          variants={heroVariants}
          custom={0.3}
          className="max-w-3xl text-4xl font-extrabold leading-tight text-primary drop-shadow-2xl md:text-6xl"
        >
          Find Your Dream Luxury Home
        </motion.h1>
        <motion.p
          variants={heroVariants}
          custom={0.5}
          className="max-w-2xl text-lg text-text/90 md:text-xl text-secondary"
        >
          From oceanfront villas to gated enclaves, we curate an exclusive collection of
          premium estates across India's most coveted addresses.
        </motion.p>

        <motion.div
          variants={heroVariants}
          custom={0.7}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#properties"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition hover:opacity-90"
          >
            Explore Properties <FaArrowRight className="h-3 w-3" />
          </a>
          <a
            href="#contact"
          className="flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition hover:border-accent"
          >
            Schedule A Tour <FaPlay className="h-3 w-3" />
          </a>
        </motion.div>

        <motion.div
          variants={heroVariants}
          custom={0.9}
          className="mt-6 flex max-w-md items-center gap-4 rounded-2xl bg-white/10 p-4 text-sm shadow-xl backdrop-blur"
        >
          <div className="h-12 w-12 rounded-full border border-white/30" />
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-accent">Concierge</p>
            <p className="text-base font-semibold">Private consultations & curated viewings</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection
