import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
