import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "@/router.tsx";
import { ThemeProvider } from "@/providers/ThemeProvider.tsx";
import I18Provider from "@/providers/I18Provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18Provider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </I18Provider>
  </StrictMode>,
);
