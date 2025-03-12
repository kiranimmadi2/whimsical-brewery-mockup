
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children: React.ReactNode;
  rippleColor?: string;
  disableRipple?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'default', 
    children, 
    rippleColor = 'rgba(255, 255, 255, 0.4)',
    disableRipple = false,
    onClick,
    ...props 
  }, ref) => {
    const [ripples, setRipples] = useState<RippleProps[]>([]);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      // Cleanup ripples after animation completes
      const timeoutIds: NodeJS.Timeout[] = [];
      
      ripples.forEach((_, i) => {
        const timeoutId = setTimeout(() => {
          setRipples((prevRipples) => prevRipples.filter((_, index) => index !== 0));
        }, 600);
        
        timeoutIds.push(timeoutId);
      });
      
      return () => {
        timeoutIds.forEach(clearTimeout);
      };
    }, [ripples]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disableRipple) {
        const button = buttonRef.current;
        if (button) {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // Calculate diagonal size for the ripple
          const size = Math.max(rect.width, rect.height) * 2;
          
          setRipples([...ripples, { x, y, size }]);
        }
      }
      
      if (onClick) {
        onClick(e);
      }
    };
    
    return (
      <Button
        className={cn(
          'relative overflow-hidden group transition-all duration-300',
          className
        )}
        variant={variant}
        size={size}
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-starbucks-green/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        
        {/* Ripple elements */}
        {ripples.map((ripple, i) => (
          <span
            key={i}
            className="absolute rounded-full pointer-events-none animate-ripple"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              background: rippleColor,
            }}
          />
        ))}
      </Button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton };
