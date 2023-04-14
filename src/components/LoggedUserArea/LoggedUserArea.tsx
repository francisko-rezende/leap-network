import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { signOut } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store/store";
import { IconButton } from "../IconButton";

export const LoggedUserArea = () => {
  const user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    localStorage.setItem("CodeLeaper", "");
  };

  return (
    <div className="flex items-center gap-2 text-white">
      <span className="break-all font-bold">{`@${user}`}</span>
      <IconButton
        onClick={handleSignOut}
        intent="signOut"
        hiddenTextDescription="Sign out"
      />
    </div>
  );
};
