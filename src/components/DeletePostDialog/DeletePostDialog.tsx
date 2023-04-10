import * as RadixDialog from "@radix-ui/react-dialog";
import { IconButton } from "@/components/IconButton";
import { Dialog } from "@/components/Dialog";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { DialogButtonsWrapper } from "@/components/DialogButtonsWrapper";

export const DeletePostDialog = () => (
  <Dialog
    trigger={<IconButton hiddenTextDescription="Delete post" intent="delete" />}
  >
    <RadixDialog.Title asChild>
      <Title tag="h2" intent="dark">
        Are you sure you want to delete this item?
      </Title>
    </RadixDialog.Title>
    <DialogButtonsWrapper>
      <RadixDialog.DialogClose asChild>
        <Button intent="secondary">Cancel</Button>
      </RadixDialog.DialogClose>
      <Button intent="delete">Delete</Button>
    </DialogButtonsWrapper>
  </Dialog>
);
