import { VariantProps, cva } from "class-variance-authority";

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
  };

export const Title = ({ intent, tag, ...props }: TitleProps) => {
  const Tag = tag;

  return <Tag className={titleStyles({ intent })} {...props} />;
};
