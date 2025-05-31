
    import * as React from "react"
    import { cn } from "@/lib/utils"
    import { motion } from "framer-motion"

    const Card = React.forwardRef(({ className, ...props }, ref) => (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm transition-colors duration-300", 
         
          "dark:border-border/50 dark:bg-card/80 dark:backdrop-blur-sm dark:shadow-lg",
         
          "dark:hover:shadow-xl dark:hover:border-primary/50",
         
          "hover:shadow-md hover:border-border",
          className
        )}
        whileHover={{ y: -3 }} 
        {...props} />
    ))
    Card.displayName = "Card"

    const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props} />
    ))
    CardHeader.displayName = "CardHeader"

    const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
      <h3
        ref={ref}
        className={cn("text-xl font-semibold leading-none tracking-tight text-card-foreground", className)} 
        {...props} />
    ))
    CardTitle.displayName = "CardTitle"

    const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
      <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props} />
    ))
    CardDescription.displayName = "CardDescription"

    const CardContent = React.forwardRef(({ className, ...props }, ref) => (
      <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    ))
    CardContent.displayName = "CardContent"

    const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props} />
    ))
    CardFooter.displayName = "CardFooter"

    export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
  