import * as RadixDialog from "@radix-ui/react-dialog";

type DialogProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const Dialog = ({ trigger, children }: DialogProps) => (
  <RadixDialog.Root>
    <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>

    <RadixDialog.Portal>
      <RadixDialog.Overlay className=" fixed inset-0 z-20 bg-leap-overlay data-[state=open]:animate-overlayShow" />
      <RadixDialog.Content
        aria-describedby={undefined}
        className="fixed left-[50%] top-[50%] z-20 grid max-h-[85vh] w-[90vw] max-w-[660px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow"
      >
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);
