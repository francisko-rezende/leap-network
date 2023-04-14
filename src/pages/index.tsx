import { Header } from "@/components/Header";
import { NewPostForm } from "@/components/NewPostForm";
import { PostList } from "@/components/PostList";
import { Title } from "@/components/Title";
import { useCheckIfLoggedIn } from "@/hooks/useCheckIfLoggedIn";
import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";
import { LoggedUserArea } from "@/components/LoggedUserArea";
import Head from "next/head";
import { useAppSelector } from "@/hooks/useAppSelector";
import { RootState } from "@/redux/store/store";

export default function Index() {
  useCheckIfLoggedIn();
  useLocalStorageUser();
  const user = useAppSelector((state: RootState) => state.user.user);

  return (
    <>
      <Head>
        <title>CodeLeap Network • {user}</title>
      </Head>
      <div className="flex min-h-full flex-col">
        <Header className="flex items-center justify-between" intent="page">
          <Title intent="light" tag="h1">
            CodeLeap Network
          </Title>
          <LoggedUserArea />
        </Header>
        <main className="mx-auto flex h-full w-full max-w-[800px] flex-1 flex-col gap-6 overflow-y-auto bg-white px-4 py-6 sm:px-6">
          <NewPostForm />
          <PostList />
        </main>
      </div>
    </>
  );
}
