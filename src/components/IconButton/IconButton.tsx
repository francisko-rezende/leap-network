import * as I from "@/ui/icons";
import { forwardRef } from "react";

const icons = {
  edit: <I.Notepad />,
  delete: <I.Trash />,
};

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent: keyof typeof icons;
  /**
   * Visually hidden text, improves button accessibility
   */
  hiddenTextDescription: string;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ intent, hiddenTextDescription, ...props }: IconButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className="p-0.5 transition-opacity hover:opacity-80 active:opacity-95"
        {...props}
      >
        {icons[intent]} <span className="sr-only">{hiddenTextDescription}</span>
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
