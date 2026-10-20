import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes.tsx";
import "./components/App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider forcedTheme="light">
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
);
