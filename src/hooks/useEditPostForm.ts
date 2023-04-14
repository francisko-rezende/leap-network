import { FormEvent, useState } from "react";
import { useEditPost } from "@/hooks/useEditPost";
import { Id } from "@/types/id";

type UseEditPostProps = {
  originalContent: string;
  originalTitle: string;
} & Id;

export const useEditPostForm = ({
  originalContent,
  originalTitle,
  id,
}: UseEditPostProps) => {
  const [title, setTitle] = useState(originalTitle);
  const [content, setContent] = useState(originalContent);
  const [open, setOpen] = useState(false);

  const { mutate, isLoading } = useEditPost({ setOpen });

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ id, title, content });
  };

  return { fields, handleSubmit, hasEmptyField, isLoading, open, setOpen };
};
