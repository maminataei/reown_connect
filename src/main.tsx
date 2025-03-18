import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/App.css";
import Providers from "@/providers/index";

/**
 * Main entry point of the application.
 * Initializes the React application by creating a root instance and rendering
 * the app within StrictMode and wrapped with all necessary providers.
 *
 * Uses the root div element from the HTML document as the mounting point.
 * The non-null assertion (!) is used as we expect the root element to always exist.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
