import Home from "@/Home";
import Layout from "@/components/Layout";
import Experience from "@/components/experience/ExperiencePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/experience", element: <Experience /> },
    ],
  },
]);

export default router;
