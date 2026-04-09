import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import FeaturedProperties from './sections/FeaturedProperties'
import WhyChooseUs from './sections/WhyChooseUs'
import PremiumListings from './sections/PremiumListings'
import Testimonials from './sections/Testimonials'
import ContactSection from './sections/ContactSection'

const IMAGES_TO_PRELOAD = [
  '/images/luxury-house.jpg',
  '/images/plots-land.jpg',
  '/images/premium-apartment.jpg',
  '/images/interior-luxury.jpg',
  '/images/modern-villa.jpg',
  '/images/aerial-real-estate.jpg'
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = IMAGES_TO_PRELOAD.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve on error too to prevent infinite loading
        });
      });
      await Promise.all(promises);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-light">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-accent border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="bg-light text-primary">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <FeaturedProperties />
        <WhyChooseUs />
        <PremiumListings />
        <Testimonials />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
