import { createSlice } from "@reduxjs/toolkit";

const initialState: Features.I18n = {
  language: null,
};

const SLICE_NAME = "language";

export const i18nSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    value: initialState,
  },
  reducers: {
    changeLanguage: (
      state,
      action: { payload: Features.I18n; type: string }
    ) => {
      state.value = action.payload;
    },
  },
});

export const getState = (state: any) => {
  return state[SLICE_NAME].value;
};
export const { changeLanguage } = i18nSlice.actions;
export default i18nSlice.reducer;
