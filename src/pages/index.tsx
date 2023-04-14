import { Header } from "@/components/Header";
import { IconButton } from "@/components/IconButton";
import { NewPostForm } from "@/components/NewPostForm";
import { PostList } from "@/components/PostList";
import { Title } from "@/components/Title";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useCheckIfLoggedIn } from "@/hooks/useCheckIfLoggedIn";
import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";
import { RootState } from "@/redux/store/store";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { signOut } from "@/redux/slices/userSlice";

export default function Index() {
  useCheckIfLoggedIn();
  useLocalStorageUser();
  const user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    localStorage.setItem("CodeLeaper", "");
  };

  return (
    <div className="flex min-h-full flex-col">
      <Header className="flex items-center justify-between" intent="page">
        <Title intent="light" tag="h1">
          CodeLeap Network
        </Title>
        <div className="flex items-center gap-2 text-white">
          <span className="break-all font-bold">{`@${user}`}</span>
          <IconButton
            onClick={handleSignOut}
            intent="signOut"
            hiddenTextDescription="Sign out"
          />
        </div>
      </Header>
      <main className="mx-auto flex h-full w-full max-w-[800px] flex-1 flex-col gap-6 overflow-y-auto bg-white px-4 py-6 sm:px-6">
        <NewPostForm />
        <PostList />
      </main>
    </div>
  );
}
