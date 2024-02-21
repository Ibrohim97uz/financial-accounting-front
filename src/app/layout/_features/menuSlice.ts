import { createSlice } from "@reduxjs/toolkit";

const initialState: Menu.IMenu = {
  open: true,
  openedParents: [],
};

const SLICE_NAME = "menu";

export const menuSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    value: initialState,
  },
  reducers: {
    handleMenuOpen: (state) => {
      state.value = { ...state.value, open: true };
    },
    handleMenuClose: (state) => {
      state.value = { ...state.value, open: false };
    },
    toggleMenu: (state) => {
      state.value = { ...state.value, open: !state.value.open };
    },

    appendOpenedParents: (state, action: { payload: string }) => {
      const openedParents = new Set(state.value.openedParents);
      openedParents.add(action.payload);

      state.value = {
        ...state.value,
        openedParents: Array.from(openedParents),
      };
    },
    removeOpenedParents: (state, action: { payload: string }) => {
      const openedParents = new Set(state.value.openedParents);
      openedParents.delete(action.payload);

      state.value = {
        ...state.value,
        openedParents: Array.from(openedParents),
      };
    },
  },
});

export const getState = (state: any) => {
  return state[SLICE_NAME].value;
};
export const {
  handleMenuClose,
  handleMenuOpen,
  appendOpenedParents,
  removeOpenedParents,
  toggleMenu,
} = menuSlice.actions;

export default menuSlice.reducer;
