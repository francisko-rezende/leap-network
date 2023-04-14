import { useAppSelector } from "@/hooks/useAppSelector";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { signIn } from "@/redux/slices/userSlice";

export const useLocalStorageUser = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.user);
  useEffect(() => {
    const localStorageUser = localStorage.getItem("CodeLeaper");
    if (!user && localStorageUser) {
      dispatch(signIn(localStorageUser));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
