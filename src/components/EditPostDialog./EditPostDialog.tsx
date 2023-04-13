import * as RadixDialog from "@radix-ui/react-dialog";
import { IconButton } from "@/components/IconButton";
import { Dialog } from "@/components/Dialog";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { DialogButtonsWrapper } from "@/components/DialogButtonsWrapper";
import { useState } from "react";
import { TextField } from "../TextField";

type EditPostDialog = {
  originalTitle: string;
  originalContent: string;
};

export const EditPostDialog = ({
  originalTitle,
  originalContent,
}: EditPostDialog) => {
  const [title, setTitle] = useState(originalTitle);
  const [content, setContent] = useState(originalContent);
  const fields = [
    {
      id: "title",
      label: "Title",
      tag: "input",
      placeholder: "New post",
      value: title,
      setValue: setTitle,
    },
    {
      id: "content",
      label: "Content",
      tag: "textarea",
      placeholder: "New post's content",
      value: content,
      setValue: setContent,
    },
  ] as const;

  const hasEmptyField = content.length === 0 || title.length === 0;

  return (
    <Dialog
      trigger={<IconButton hiddenTextDescription="Edit item" intent="edit" />}
    >
      <RadixDialog.Title asChild>
        <Title tag="h2" intent="dark">
          Edit item
        </Title>
      </RadixDialog.Title>
      <form className="mt-6 grid gap-6" onSubmit={(e) => e.preventDefault()}>
        {fields.map((field) => (
          <TextField key={field.id} {...field} />
        ))}

        <DialogButtonsWrapper className="mt-0">
          <RadixDialog.DialogClose asChild>
            <Button intent="secondary">Cancel</Button>
          </RadixDialog.DialogClose>
          <Button disabled={hasEmptyField} intent="save">
            Save
          </Button>
        </DialogButtonsWrapper>
      </form>
    </Dialog>
  );
};
