import Home from "@/Home";
import Experience from "@/components/experience/ExperiencePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/experience", element: <Experience /> },
]);

export default router;
