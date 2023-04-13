import { Header } from "@/components/Header";
import { NewPostForm } from "@/components/NewPostForm";
import { Title } from "@/components/Title";

export default function Index() {
  return (
    <>
      <Header className="mx-auto w-full max-w-[800px]" intent="page">
        <Title intent="light" tag="h1">
          CodeLeap Network
        </Title>
      </Header>
      <main className="mx-auto grid min-h-full w-full max-w-[800px] gap-6 overflow-y-auto bg-white px-4 pt-6 sm:px-6">
        <NewPostForm />
      </main>
    </>
  );
}
