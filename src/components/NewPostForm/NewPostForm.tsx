import React, { useState } from "react";
import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import { appQueryClient } from "@/lib/tanstackQuery";
import { useAppSelector } from "@/hooks/useAppSelector";
import { RootState } from "@/redux/store/store";
import { NewPostData } from "@/types/newPostData";

export const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

  const hasEmptyField = !content || !title;

  const mutation = useMutation({
    mutationFn: ({ username, title, content }: NewPostData) => {
      return axiosInstance.post("", { username, title, content });
    },
    onSuccess: () => {
      appQueryClient.invalidateQueries(["posts"]);
    },
  });

  const user = useAppSelector((state: RootState) => state.user.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ title, content, username: user });
    setContent("");
    setTitle("");
  };

  return (
    <Card tag="section" hasBorder>
      <Title tag="h1" intent="dark">
        What&rsquo;s on your mind?
      </Title>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <TextField key={field.id} {...field} />
        ))}
        <Button className="ml-auto" disabled={hasEmptyField}>
          Create
        </Button>
      </form>
    </Card>
  );
};
