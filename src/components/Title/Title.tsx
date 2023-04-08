import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const titleStyles = cva(["text-lg", "font-bold"], {
  variants: {
    intent: {
      light: "text-white",
      dark: "text-black",
    },
  },
  defaultVariants: {
    intent: "dark",
  },
});

export type TitleProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleStyles> & {
    tag: "h1" | "h2" | "h3";
    className?: string;
  };

export const Title = ({
  intent,
  tag,
  children,
  className,
  ...props
}: TitleProps) => {
  const Tag = tag;

  return (
    <Tag className={twMerge(titleStyles({ intent }), className)} {...props}>
      {children}
    </Tag>
  );
};
