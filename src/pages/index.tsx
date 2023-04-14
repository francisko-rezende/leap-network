import { Header } from "@/components/Header";
import { NewPostForm } from "@/components/NewPostForm";
import { PostList } from "@/components/PostList";
import { Title } from "@/components/Title";
import { useCheckIfLoggedIn } from "@/hooks/useCheckIfLoggedIn";

export default function Index() {
  useCheckIfLoggedIn();

  return (
    <div className="flex min-h-full flex-col">
      <Header intent="page">
        <Title intent="light" tag="h1">
          CodeLeap Network
        </Title>
      </Header>
      <main className="mx-auto flex h-full w-full max-w-[800px] flex-1 flex-col gap-6 overflow-y-auto bg-white px-4 py-6 sm:px-6">
        <NewPostForm />
        <PostList />
      </main>
    </div>
  );
}
