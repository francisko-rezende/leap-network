import { SignupForm } from "@/components/SignupForm";
import { useCheckIfLoggedIn } from "@/hooks/useCheckIfLoggedIn";

export default function Signup() {
  useCheckIfLoggedIn();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignupForm />
    </main>
  );
}
