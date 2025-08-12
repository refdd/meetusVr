import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast";
const COOKIE_NAME = import.meta.env.VITE_COOKIE_NAME;
const COOKIE_MAX_AGE = import.meta.env.VITE_COOKIE_MAX_AGE;
export const useUserStore = create((set, get) => ({
  user: null,
  token: null,
  loading: false,
  checkingAuth: true,
  error: null,

  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${COOKIE_NAME}=`))
        ?.split("=")[1];

      if (!token) {
        set({ checkingAuth: false, user: null, token: null });
        return false;
      }

      const response = await axios.get("/user/info", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);

      set({ user: response.data, checkingAuth: false });
      // route to /
    } catch (error) {
      console.log("Auth error:", error.response?.status);
      set({ checkingAuth: false, user: null });
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    try {
      const response = await axios.post("/yeshtery/token", {
        email,
        password,
        isEmployee: true,
      });

      console.log("Login response:", response.data);

      set({ user: response.data?.userInfo, loading: false });
      toast.success("Login successful");
      const token = response.data.token;
      document.cookie = `${COOKIE_NAME}=${token}; Max-Age=${COOKIE_MAX_AGE}; path=/; SameSite=Strict; Secure`;
    } catch (error) {
      toast.error(error?.response?.data?.error || "Login failed");
      set({ loading: false });
    }
  },

  createUser: async (userData) => {
    set({ loading: true });
    try {
      const response = await axios.post("/auth/sigup", userData);
      set({ user: response.data, loading: false });
      toast.success("Signup successful");
    } catch (error) {
      toast.error(error?.response?.data?.error || "Signup failed");
      set({ loading: false });
      throw error;
    }
  },

  logout: async () => {
    document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure`;
    set({ loading: true });
    try {
      set({ user: null, loading: false });
      toast.success("Logout successful");
    } catch (error) {
      toast.error(error?.response?.data?.error || "Logout failed");
      set({ loading: false });
    }
  },
}));
