import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import styles from "./button.module.scss"

type ButtonVariants = {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

function getButtonClassNames({ variant = 'default', size = 'default', className }: ButtonVariants & { className?: string }) {
  const variantClass = styles[variant];
  const sizeClass = styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`];
  
  return cn(styles.button, variantClass, sizeClass, className);
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  ButtonVariants & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={getButtonClassNames({ variant, size, className })}
      {...props}
    />
  )
}

export { Button, getButtonClassNames }
export type { ButtonVariants }
