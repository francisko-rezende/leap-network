import * as RadixDialog from "@radix-ui/react-dialog";
import { IconButton } from "@/components/IconButton";
import { Dialog } from "@/components/Dialog";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { DialogButtonsWrapper } from "@/components/DialogButtonsWrapper";
import { FormEvent, useState } from "react";
import { TextField } from "../TextField";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import { NewPostData } from "@/types/newPostData";
import { appQueryClient } from "@/lib/tanstackQuery";

type EditPostDialogProps = {
  originalTitle: string;
  originalContent: string;
  id: number;
};

type EditPostData = Omit<NewPostData, "username"> &
  Pick<EditPostDialogProps, "id">;

export const EditPostDialog = ({
  originalTitle,
  originalContent,
  id,
}: EditPostDialogProps) => {
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

  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: ({ id, title, content }: EditPostData) => {
      return axiosInstance.patch(`/${id}/`, { title, content });
    },
    onSuccess: () => {
      appQueryClient.invalidateQueries(["posts"]);
      setOpen(false);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ id, title, content });
  };

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
          <Button disabled={hasEmptyField || mutation.isLoading} intent="save">
            Save
          </Button>
        </DialogButtonsWrapper>
      </form>
    </Dialog>
  );
};
