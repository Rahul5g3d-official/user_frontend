import type { ReactNode } from "react";
import { ROUTES, type RoutePath } from "../../constants/routes";
import { AboutPage } from "../../pages/about/AboutPage";
import { ApproachPage } from "../../pages/approach/ApproachPage";
import { CareersPage } from "../../pages/careers/CareersPage";
import { ContactPage } from "../../pages/contact/ContactPage";
import { CourseDetailPage } from "../../pages/courses/CourseDetailPage";
import { CoursesPage } from "../../pages/courses/CoursesPage";
import { FaqPage } from "../../pages/faq/FaqPage";
import { HomePage } from "../../pages/home/HomePage";
import { ImpactPage } from "../../pages/impact/ImpactPage";
import { LegalPage } from "../../pages/legal/LegalPage";
import { LoginPage } from "../../pages/login/LoginPage";
import { ServicesPage } from "../../pages/services/ServicesPage";

export type AppRoute = { path: RoutePath; element: ReactNode };

export const appRoutes: AppRoute[] = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.ABOUT, element: <AboutPage /> },
  { path: ROUTES.SERVICES, element: <ServicesPage /> },
  { path: ROUTES.APPROACH, element: <ApproachPage /> },
  { path: ROUTES.COURSES, element: <CoursesPage /> },
  { path: ROUTES.COURSE_DETAIL, element: <CourseDetailPage /> },
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.IMPACT, element: <ImpactPage /> },
  { path: ROUTES.CAREERS, element: <CareersPage /> },
  { path: ROUTES.CONTACT, element: <ContactPage /> },
  { path: ROUTES.FAQ, element: <FaqPage /> },
  { path: ROUTES.PRIVACY, element: <LegalPage kind="privacy" /> },
  { path: ROUTES.TERMS, element: <LegalPage kind="terms" /> },
];
