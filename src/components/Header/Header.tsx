import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const headerStyles = cva(["bg-leap-blue-400"], {
  variants: {
    intent: {
      page: ["sm:px-9", "px-8", "py-7"],
      post: [
        "-mx-6",
        "flex",
        "items-center",
        "justify-between",
        "bg-leap-blue-400",
        "px-6",
        "py-4",
        "gap-x-4",
        "min-h-[70px]",
        "break-all",
      ],
    },
  },
  defaultVariants: { intent: "page" },
});

type HeaderProps = VariantProps<typeof headerStyles> & {
  className?: string;
  children: React.ReactNode;
};

export const Header = ({ className, intent, children }: HeaderProps) => {
  return (
    <header className={twMerge(headerStyles({ intent }), className)}>
      {children}
    </header>
  );
};
