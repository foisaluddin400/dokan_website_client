import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "@/types";
import Cookies from "js-cookie";

const initialState: IAuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      // 🔐 Token cookie — httpOnly set korte hobe backend theke (Set-Cookie header)
      // Client-side fallback (non-httpOnly): SSR er jonno middleware pabe
      Cookies.set("token", action.payload.token, {
        expires: 7,           // 7 days
        secure: true,         // HTTPS only
        sameSite: "strict",   // CSRF protection
      });
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      Cookies.remove("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectCurrentUser = (state: { auth: IAuthState }) =>
  state.auth.user;
export const selectCurrentToken = (state: { auth: IAuthState }) =>
  state.auth.token;
export const selectIsAuthenticated = (state: { auth: IAuthState }) =>
  state.auth.isAuthenticated;