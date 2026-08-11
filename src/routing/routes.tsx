import App from "@/App";
import Experience from "@/components/experience/Experience";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/experience", element: <Experience /> },
]);

export default router;
