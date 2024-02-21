import authSlice from "@/app/auth/_features/authSlice";
import menuSlice from "@/app/layout/_features/menuSlice";
import i18nSlice from "@/_features/i18nSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    auth: authSlice,
    menu: menuSlice,
    "18n": i18nSlice,
  },
});
