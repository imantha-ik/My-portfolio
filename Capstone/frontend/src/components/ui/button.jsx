
    import { cn } from '@/lib/utils';
    import { Slot } from '@radix-ui/react-slot';
    import { cva } from 'class-variance-authority';
    import React from 'react';
    import { motion } from 'framer-motion';

    const buttonVariants = cva(
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform active:scale-95', // Added transition, transform, active:scale
      {
        variants: {
          variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg', // Added shadow
            destructive:
              'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md',
            outline:
              'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground', // Changed bg to transparent
            secondary:
              'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
            ghost: 'hover:bg-muted/50 hover:text-foreground', // Adjusted hover
            link: 'text-primary underline-offset-4 hover:underline hover:text-primary/80', // Adjusted hover
          },
          size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8 text-base', // Slightly larger text
            icon: 'h-10 w-10',
          },
        },
        defaultVariants: {
          variant: 'default',
          size: 'default',
        },
      },
    );

    const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : motion.button; // Use motion.button
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          whileHover={{ scale: 1.03, transition: { duration: 0.15 } }} // Subtle hover scale
          whileTap={{ scale: 0.97 }} // Keep tap effect
          {...props}
        />
      );
    });
    Button.displayName = 'Button';

    export { Button, buttonVariants };
  