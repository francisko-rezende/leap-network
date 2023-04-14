import * as RadixDialog from "@radix-ui/react-dialog";
import { IconButton } from "@/components/IconButton";
import { Dialog } from "@/components/Dialog";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { DialogButtonsWrapper } from "@/components/DialogButtonsWrapper";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import { appQueryClient } from "@/lib/tanstackQuery";

type DeletePostDialogProps = {
  id: number;
};

export const DeletePostDialog = ({ id }: DeletePostDialogProps) => {
  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: ({ id }: DeletePostDialogProps) => {
      return axiosInstance.delete(`/${id}/`);
    },
    onSuccess: () => {
      appQueryClient.invalidateQueries(["posts"]);
      setOpen(false);
    },
  });

  const handleDeletePost = () => {
    mutation.mutate({ id });
  };

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      trigger={
        <IconButton hiddenTextDescription="Delete post" intent="delete" />
      }
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
        <Button
          disabled={mutation.isLoading}
          intent="delete"
          onClick={handleDeletePost}
        >
          Delete
        </Button>
      </DialogButtonsWrapper>
    </Dialog>
  );
};
