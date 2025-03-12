
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import LocationFinder from '@/components/LocationFinder';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 animate-pulse">
            <svg viewBox="0 0 60 60" className="h-full w-full fill-starbucks-green">
              <path d="M30,0C13.4,0,0,13.4,0,30s13.4,30,30,30s30-13.4,30-30S46.6,0,30,0z M30,4.7c1.3,0,2.5,0.1,3.8,0.2c-0.5,0.7-1.1,1.4-2,1.9c-1.2,0.6-2.4,0.6-3.6,0.7c-3.2,0.2-6.1,1.1-8.8,2.8c-1.6,1-3,2.1-4.2,3.6c-1.7,2.1-2.8,4.5-3.2,7.2c-0.2,1.3-0.3,2.5-0.1,3.8c0.2,1.3,0.7,2.5,1.6,3.4c1.6,1.6,3.6,2.7,5.7,3.7c4.2,2,8.9,2.9,13.4,3.9c0.9,0.2,1.9,0.4,2.8,0.7c1.5,0.4,2.7,1.5,3.5,2.8c1.1,1.7,1.2,4.1-0.4,5.8c-1.2,1.3-2.8,2.1-4.4,2.7c-2.8,1-5.6,1-8.4,0.3c-1.1-0.3-2.2-0.7-3.3-1c-0.9-0.3-1.9-0.3-2.9-0.2c-2,0.2-3.7,1.2-4.8,2.9c0,0,0,0.1-0.1,0.1c-0.5-0.7-1-1.3-1.5-2C11.4,47,7.5,39.4,8.3,30.2C9.2,20.4,14.6,13,23.4,8.4c2-1,4.1-1.9,6.3-2.8c0-0.1,0.1-0.2,0.1-0.3C29.2,5,28.4,4.7,30,4.7z M35.9,44.1c-2.9-0.8-5.7-1.6-8.6-2.3c-1.5-0.4-3-0.8-4.5-1.1c-0.5-0.1-0.7,0-0.8,0.5c-0.3,1.9,0.4,3.5,1.7,4.9c1.3,1.4,3,2.1,4.8,2.3c2.7,0.3,5.2-0.2,7.4-1.9C36.8,45.7,36.8,44.3,35.9,44.1z M34.7,10.3c2.8,0.4,4.3,0.9,6.2,2c0.4,0.2,0.8,0.5,1.2,0.8c0.3,0.2,0.5,0.1,0.8-0.1c1.9-1.7,4.1-2.7,6.5-3.4c0.2-0.1,0.4-0.1,0.7-0.2c0.1,0.2,0.2,0.3,0.3,0.5c-0.5,0.6-0.9,1.3-1.5,1.8c-1.9,1.6-4,2.8-6.3,3.5c-0.5,0.2-0.7,0.4-0.6,0.9c0.1,1.2,0.2,2.5,0,3.7c-0.4,2.9-1.8,5.3-4.3,7c-1.5,1.1-3.3,1.5-5.2,1.5c-1.9,0-3.7-0.5-5.4-1.5c-1.2-0.7-2.3-1.7-3.3-2.8c-3.3-3.8-3.3-8.7-0.1-12.6C26.5,9.6,31.1,9.8,34.7,10.3z"/>
            </svg>
          </div>
          <p className="mt-4 text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <LocationFinder />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
