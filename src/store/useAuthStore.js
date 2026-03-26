import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  authUser: { name: "John Doe", age: 26 },
  isLoading: false,
  login: () => {
    console.log("we just logged in");
  },
}));
