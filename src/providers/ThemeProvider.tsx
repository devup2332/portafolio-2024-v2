import { useEffect } from "react";
import { useStore } from "@/store";

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    const html = document.querySelector("html");
    html?.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};
