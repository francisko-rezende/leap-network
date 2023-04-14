import * as RadixDialog from "@radix-ui/react-dialog";
import { IconButton } from "@/components/IconButton";
import { Dialog } from "@/components/Dialog";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { DialogButtonsWrapper } from "@/components/DialogButtonsWrapper";
import { TextField } from "@/components/TextField";
import { useEditPostForm } from "@/hooks/useEditPostForm";
import { Id } from "@/types/id";

type EditPostDialogProps = {
  originalTitle: string;
  originalContent: string;
} & Id;

export const EditPostDialog = ({
  originalTitle,
  originalContent,
  id,
}: EditPostDialogProps) => {
  const { fields, handleSubmit, hasEmptyField, isLoading, open, setOpen } =
    useEditPostForm({ originalContent, originalTitle, id });

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      trigger={<IconButton hiddenTextDescription="Edit item" intent="edit" />}
    >
      <RadixDialog.Title asChild>
        <Title tag="h2" intent="dark">
          Edit item
        </Title>
      </RadixDialog.Title>
      <form className="mt-6 grid gap-6" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <TextField key={field.id} {...field} />
        ))}

        <DialogButtonsWrapper className="mt-0">
          <RadixDialog.DialogClose asChild>
            <Button intent="secondary">Cancel</Button>
          </RadixDialog.DialogClose>
          <Button disabled={hasEmptyField || isLoading} intent="save">
            Save
          </Button>
        </DialogButtonsWrapper>
      </form>
    </Dialog>
  );
};
