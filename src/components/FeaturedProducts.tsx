
import { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

// Sample product data
const products = [
  {
    id: '1',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle.',
    price: '$4.95',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1637&auto=format&fit=crop',
    category: 'Espresso',
    isNew: true,
  },
  {
    id: '2',
    name: 'Iced Shaken Espresso',
    description: 'Espresso shaken with ice, featuring notes of caramel and a velvety milk foam.',
    price: '$5.25',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=1635&auto=format&fit=crop',
    category: 'Cold Coffee',
  },
  {
    id: '3',
    name: 'Matcha Green Tea Latte',
    description: 'Smooth and creamy matcha sweetened just right and served with steamed milk.',
    price: '$4.75',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1471&auto=format&fit=crop',
    category: 'Tea',
    isNew: true,
  },
  {
    id: '4',
    name: 'Vanilla Bean Frappuccino',
    description: 'Creamy vanilla-flavored frappuccino blended with ice and topped with whipped cream.',
    price: '$5.45',
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?q=80&w=1587&auto=format&fit=crop',
    category: 'Frappuccino',
  },
  {
    id: '5',
    name: 'Cold Brew Coffee',
    description: 'Slow-steeped, small-batch cold brew coffee featuring a super-smooth taste.',
    price: '$4.25',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1587&auto=format&fit=crop',
    category: 'Cold Coffee',
  },
  {
    id: '6',
    name: 'Chai Tea Latte',
    description: 'Black tea infused with cinnamon, clove, and other warming spices combined with steamed milk.',
    price: '$4.65',
    image: 'https://images.unsplash.com/photo-1591827983834-05eb60be5e3e?q=80&w=1587&auto=format&fit=crop',
    category: 'Tea',
  },
];

// Categories for filter tabs
const categories = ['All', 'Espresso', 'Cold Coffee', 'Tea', 'Frappuccino'];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    
    // Filter products based on active category
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section ref={containerRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Menu</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Discover our selection of handcrafted beverages made with exceptional ingredients and care.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex justify-center space-x-2 overflow-x-auto pb-2 sm:space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-starbucks-green text-white shadow-md'
                  : 'bg-white hover:bg-starbucks-green/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
