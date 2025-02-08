import { useEffect } from "react";
import { THEME_KEY, useStore } from "@/store";

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, switchTheme } = useStore((state) => state);

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY);

    const html = document.querySelector("html");
    if (localTheme) {
      switchTheme(localTheme as "dark" | "light");

      html?.classList.add(localTheme);
    } else {
      switchTheme("dark");
      html?.classList.add("dark");
    }
  }, [theme]);

  return <>{children}</>;
};
