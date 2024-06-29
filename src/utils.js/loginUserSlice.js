import { createSlice } from "@reduxjs/toolkit";

const loginUserSlice = createSlice({
  name: "user",
  initialState: {
    loginState: false,
  },
  reducers: {
    toggleLoginState: (state, _action) => {
      state.loginState = !state.loginState;
    },
  },
});
export const { toggleLoginState } = loginUserSlice.actions;
export default loginUserSlice.reducer;
