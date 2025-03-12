
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
  isNew = false,
  className,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/product/${id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover-scale',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-100 shimmer" />
        )}
        <img
          src={image}
          alt={name}
          className={cn(
            'h-full w-full object-cover transition-all duration-700',
            isLoaded ? 'opacity-100' : 'opacity-0',
            isHovered ? 'scale-110' : 'scale-100'
          )}
          onLoad={() => setIsLoaded(true)}
        />
        {isNew && (
          <span className="absolute top-3 right-3 rounded-full bg-starbucks-green px-3 py-1 text-xs font-semibold uppercase text-white">
            New
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <span className="text-xs font-medium uppercase tracking-wide text-starbucks-green">
            {category}
          </span>
        </div>
        <h3 className="font-medium">{name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mt-auto pt-4">
          <span className="font-semibold">{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
