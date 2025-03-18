import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Providers from "./providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
