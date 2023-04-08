import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cardStyles = cva(
  [
    "w-full",
    "rounded-2xl",
    "bg-white",
    "p-6",
    "border",
    "border-transparent",
    "grid",
    "gap-6",
  ],
  {
    variants: {
      hasBorder: {
        true: "border-leap-gray-400",
      },
      hasTitle: {
        true: "pt-0",
      },
    },
  }
);

type CardProps = VariantProps<typeof cardStyles> & {
  children: React.ReactNode;
  className?: string;
  tag: "section" | "article";
};

export const Card = ({
  children,
  className,
  tag = "section",
  hasBorder,
  hasTitle,
}: CardProps) => {
  const Tag = tag;
  return (
    <Tag className={twMerge(cardStyles({ hasBorder, hasTitle }), className)}>
      {children}
    </Tag>
  );
};
