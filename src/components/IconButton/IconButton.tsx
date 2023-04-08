import * as I from "@/ui/icons";
import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
    <button className="rounded-lg transition-colors hover:bg-leap-blue-500 hover:shadow-sm active:bg-leap-blue-600">
      {icons[intent]} <VisuallyHidden>{hiddenTextDescription}</VisuallyHidden>
    </button>
  );
};
