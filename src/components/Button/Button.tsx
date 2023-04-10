import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  [
    "w-[120px]",
    "rounded-lg",
    "py-[6px]",
    "font-bold",
    "text-white",
    "border",
    "transition-colors",
    "disabled:bg-neutral-400",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-leap-blue-400",
          "hover:bg-leap-blue-500",
          "active:bg-leap-blue-600",
        ],
        secondary: [
          "bg-white",
          "text-black",
          "border-leap-gray-400",
          "hover:bg-gray-100",
          "active:bg-gray-200",
        ],
        delete: [
          "bg-leap-red-500",
          "text-white",
          "hover:bg-leap-red-600",
          "active:bg-leap-red-700",
        ],
        save: [
          "bg-leap-green-500",
          "text-white",
          "hover:bg-leap-green-600",
          "active:bg-leap-green-700",
        ],
      },
      upperCase: {
        true: "uppercase",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    children: React.ReactNode;
  };

export const Button = ({
  className,
  intent,
  children,
  upperCase,
  ...props
}: ButtonProps) => (
  <button
    className={twMerge(buttonStyles({ intent, upperCase }), className)}
    {...props}
  >
    {children}
  </button>
);
