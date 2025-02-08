import { create } from "zustand";

export const THEME_KEY = "theme-app";

interface IStore {
  theme?: "dark" | "light";
  switchTheme: (theme: "dark" | "light") => void;
}

export const useStore = create<IStore>((set) => ({
  theme: undefined,

  switchTheme: (theme: "dark" | "light") =>
    set(() => {
      const html = document.querySelector("html");
      localStorage.setItem(THEME_KEY, theme as string);
      html?.classList.remove("dark", "light");
      html?.classList.add(theme);
      return { theme };
    }),
}));
