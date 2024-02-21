import { createSlice } from "@reduxjs/toolkit";

const initialState: User.IUser = {
  login: null,
  password: null,
  isLogged: false,
};

const SLICE_NAME = "auth";

export const authSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    value: initialState,
  },
  reducers: {
    login: (state, action: { payload: User.IUser; type: string }) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState;
    },
  },
});

export const getState = (state: any) => {
  return state[SLICE_NAME].value;
};
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
