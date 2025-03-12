
import { useState, useEffect } from 'react';
import { CustomButton } from './ui/CustomButton';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop)',
            opacity: loaded ? 1 : 0,
            ...parallaxStyle
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div 
          className={`max-w-lg transition-all duration-1000 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-starbucks-green">
            New Season
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Freshly Brewed <br />
            <span className="text-starbucks-gold">Morning Magic</span>
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Discover our handcrafted seasonal beverages made with the finest ingredients and brewed to perfection.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <CustomButton className="bg-white text-starbucks-green hover:bg-white/90">
              Order Now
            </CustomButton>
            <CustomButton variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </CustomButton>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
