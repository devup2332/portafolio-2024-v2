import { create } from "zustand";

export const THEME_KEY = "theme-app";

interface IStore {
  theme: "dark" | "light";
  switchTheme: (theme: IStore["theme"]) => void;
}

export const useStore = create<IStore>((set) => ({
  theme: "dark",

  switchTheme: (theme: IStore["theme"]) =>
    set(() => {
      const html = document.querySelector("html");
      localStorage.setItem(THEME_KEY, theme);
      html?.classList.remove("dark", "light");
      html?.classList.add(theme);
      return { theme };
    }),
}));
