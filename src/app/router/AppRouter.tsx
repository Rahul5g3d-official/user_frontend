import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { siteContent } from "../../content/site";
import { ScrollToTop } from "./ScrollToTop";
import { NotFoundPage } from "../../pages/not-found/NotFoundPage";
import { appRoutes } from "./routes";
import { LearningLayout } from "../../pages/learning/LearningLayout";
import { LearningHomePage } from "../../pages/learning/LearningHomePage";
import { MyCoursesPage } from "../../pages/learning/MyCoursesPage";
import { ProfilePage } from "../../pages/learning/ProfilePage";
import { AllCoursesPage } from "../../pages/learning/AllCoursesPage";
import { ROUTES } from "../../constants/routes";

function ProtectedLearning({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading)
    return (
      <div
        className="grid min-h-screen place-items-center bg-paper text-sm font-extrabold text-muted"
        aria-live="polite"
      >
        Checking your secure session…
      </div>
    );
  if (!isAuthenticated)
    return <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />;
  return <LearningLayout>{children}</LearningLayout>;
}

export function AppRouter() {
  const location = useLocation();
  const isLearningArea = location.pathname.startsWith(ROUTES.LEARNING);
  return (
    <>
      <ScrollToTop />
      {!isLearningArea && (
        <>
          <a
            className="sr-only z-50 rounded-md bg-ink px-4 py-3 font-bold text-surface focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
            href="#main-content"
          >
            {siteContent.accessibility.skipToContent}
          </a>
          <Header />
        </>
      )}
      <main id="main-content">
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route
            path={ROUTES.LEARNING}
            element={
              <ProtectedLearning>
                <LearningHomePage />
              </ProtectedLearning>
            }
          />
          <Route
            path={ROUTES.MY_COURSES}
            element={
              <ProtectedLearning>
                <MyCoursesPage />
              </ProtectedLearning>
            }
          />
          <Route
            path={ROUTES.LEARNING_COURSES}
            element={
              <ProtectedLearning>
                <AllCoursesPage />
              </ProtectedLearning>
            }
          />
          <Route
            path={ROUTES.PROFILE}
            element={
              <ProtectedLearning>
                <ProfilePage />
              </ProtectedLearning>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isLearningArea && <Footer />}
    </>
  );
}
