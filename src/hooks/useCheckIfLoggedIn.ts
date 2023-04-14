import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/useAppSelector";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";

export const useCheckIfLoggedIn = () => {
  const router = useRouter();
  const user = useAppSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const localStorageUser = localStorage.getItem("CodeLeaper");
    if (user || localStorageUser) {
      router.push("/");
      return;
    }
    router.push("/signup");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
};
