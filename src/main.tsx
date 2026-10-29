import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { metadata } from "./content/metadata";
import "./styles/globals.css";

document.title = metadata.title;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
