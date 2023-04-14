import { axiosInstance } from "@/lib/axios";
import { appQueryClient } from "@/lib/tanstackQuery";
import { Id } from "@/types/id";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

type UseDeletePostProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const useDeletePost = ({ setOpen }: UseDeletePostProps) => {
  const { isLoading, mutate } = useMutation({
    mutationFn: ({ id }: Id) => {
      return axiosInstance.delete(`/${id}/`);
    },
    onSuccess: () => {
      appQueryClient.invalidateQueries(["posts"]);
      setOpen(false);
    },
  });

  return { isLoading, mutate };
};
