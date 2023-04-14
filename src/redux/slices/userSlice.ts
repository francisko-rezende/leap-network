import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

interface UserState {
  user: string;
}

const initialState: UserState = {
  user: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = "";
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
