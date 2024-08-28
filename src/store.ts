import { create } from "zustand";

interface IStore {
  theme: "dark" | "light";
}

export const useStore = create<IStore>(() => ({
  theme: "dark",
}));
