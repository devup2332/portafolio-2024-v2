import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "@/router.tsx";
import { ThemeProvider } from "@/providers/ThemeProvider.tsx";
import TranslationProvider from "@/providers/TranslationProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TranslationProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </TranslationProvider>
  </StrictMode>,
);
