
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <Button
        className={cn(
          'relative overflow-hidden group transition-all duration-300',
          className
        )}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-starbucks-green/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </Button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton };
