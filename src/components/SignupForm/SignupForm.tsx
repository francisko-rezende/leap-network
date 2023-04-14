import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { signIn } from "@/redux/slices/userSlice";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const isUsernameFieldEmpty = username.length === 0;
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(username));
    localStorage.setItem("CodeLeaper", username);
  };

  return (
    <Card tag="section" className="max-w-[600px]">
      <Title tag="h1" intent="dark">
        Welcome to CodeLeap network!
      </Title>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Please enter your username"
          tag="input"
          value={username}
          setValue={setUsername}
          placeholder="John doe"
        />
        <Button className="ml-auto" disabled={isUsernameFieldEmpty}>
          Enter
        </Button>
      </form>
    </Card>
  );
};
