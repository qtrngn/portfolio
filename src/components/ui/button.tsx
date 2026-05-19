import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import {cn} from '@/lib/utils';

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border font-mono whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-3 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "border-accent bg-accent text-bg-zero hover:scale-105",
        outline: "border-accent bg-transparent hover:scale-105",
        ghost: "border-transparent bg-transparent text-text-secondary hover:text-accent",
        destructive: "border-error bg-error-surface text-error hover:bg-error hover:text-bg-zero",
        link: "border-transparent bg-transparent p-0 text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7 text-mono-caps",
        sm: "h-9 px-5 text-mono-caps",
        lg: "h-12 px-9 text-mono-caps",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };