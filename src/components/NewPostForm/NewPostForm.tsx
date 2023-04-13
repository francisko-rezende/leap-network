import React, { useState } from "react";
import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";

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

  return (
    <Card tag="section" hasBorder>
      <Title tag="h1" intent="dark">
        What&rsquo;s on your mind?
      </Title>
      <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
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
