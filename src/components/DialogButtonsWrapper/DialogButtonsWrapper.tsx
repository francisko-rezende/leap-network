import { twMerge } from "tailwind-merge";

type DialogButtonsWrapper = {
  children: React.ReactNode;
  className?: string;
};

export const DialogButtonsWrapper = ({
  children,
  className,
}: DialogButtonsWrapper) => {
  return (
    <div
      className={twMerge(
        "mt-10 flex justify-between gap-4 sm:w-auto sm:justify-self-end",
        className
      )}
    >
      {children}
    </div>
  );
};
