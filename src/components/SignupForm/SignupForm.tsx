import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { signIn } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/hooks/useAppSelector";
import { RootState } from "@/redux/store/store";
import { useRouter } from "next/router";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const isUsernameFieldEmpty = username.length === 0;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const user = useAppSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (user) {
      router.push("/");
      return;
    }
    router.push("/signup");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(username));
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
