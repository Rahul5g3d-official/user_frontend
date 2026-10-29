import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { siteContent } from "../../content/site";
import { NotFoundPage } from "../../pages/not-found/NotFoundPage";
import { appRoutes } from "./routes";

export function AppRouter() {
  return <BrowserRouter><a className="sr-only z-50 rounded-md bg-ink px-4 py-3 font-bold text-surface focus:not-sr-only focus:fixed focus:left-4 focus:top-4" href="#main-content">{siteContent.accessibility.skipToContent}</a><Header /><main id="main-content"><Routes>{appRoutes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}<Route path="*" element={<NotFoundPage />} /></Routes></main><Footer /></BrowserRouter>;
}
