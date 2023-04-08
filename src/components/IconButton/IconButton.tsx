import * as I from "@/ui/icons";

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

export const IconButton = ({
  intent,
  hiddenTextDescription,
}: IconButtonProps) => {
  return (
    <button className="p-0.5 transition-opacity hover:opacity-80 active:opacity-95">
      {icons[intent]} <span className="sr-only">{hiddenTextDescription}</span>
    </button>
  );
};
