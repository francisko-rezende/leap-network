import { SignupForm } from "@/components/SignupForm";
import { useCheckIfLoggedIn } from "@/hooks/useCheckIfLoggedIn";
import Head from "next/head";

export default function Signup() {
  useCheckIfLoggedIn();

  return (
    <div>
      <Head>
        <title>CodeLeap Network</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <SignupForm />
      </main>
    </div>
  );
}
