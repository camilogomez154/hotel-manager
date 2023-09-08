import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserInitialState } from "./user.constants";
import { UserTypes } from "./user.types";

export const userSlice = createSlice({
  initialState: UserInitialState,
  name: "user",
  reducers: {
    setLoading: (state: UserTypes, action: PayloadAction<boolean>): void => {
      state.loading = action.payload;
    },
    setError: (state: UserTypes, action: PayloadAction<UserTypes["error"]>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSession: (
      state: UserTypes,
      action: PayloadAction<UserTypes["session"]>
    ) => {
      state.session = action.payload;
      state.signIn = true;
    },
    setInformation: (
      state: UserTypes,
      action: PayloadAction<UserTypes["information"]>
    ) => {
      state.information = action.payload;
    },
    clear: (state: UserTypes) => {
      state.loading = false;
      state.signIn = false;
      state.error = null;

      state.information = undefined;
      state.session = undefined;
    },
  },
});

export const { setError, setLoading, clear, setInformation, setSession } =
  userSlice.actions;

export default userSlice.reducer;
