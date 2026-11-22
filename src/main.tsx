import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { getDocumentMetadata } from "./components/seo/SiteMetadata";
import "./styles/globals.css";

document.title = getDocumentMetadata().title;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
