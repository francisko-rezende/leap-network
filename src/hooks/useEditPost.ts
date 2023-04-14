import { axiosInstance } from "@/lib/axios";
import { appQueryClient } from "@/lib/tanstackQuery";
import { Id } from "@/types/id";
import { NewPostData } from "@/types/newPostData";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

type EditPostData = Omit<NewPostData, "username"> & Id;

type UseEditPostProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const useEditPost = ({ setOpen }: UseEditPostProps) => {
  const editPostMutation = useMutation({
    mutationFn: ({ id, title, content }: EditPostData) => {
      return axiosInstance.patch(`/${id}/`, { title, content });
    },
    onSuccess: () => {
      appQueryClient.invalidateQueries(["posts"]);
      setOpen(false);
    },
  });

  return editPostMutation;
};
