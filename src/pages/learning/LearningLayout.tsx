import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { BrandMark } from "../../components/ui/BrandMark";
import { ROUTES } from "../../constants/routes";

const links = [
  { to: ROUTES.LEARNING, label: "Overview", end: true },
  { to: ROUTES.MY_COURSES, label: "My courses", end: false },
  { to: ROUTES.LEARNING_COURSES, label: "All courses", end: false },
  { to: ROUTES.PROFILE, label: "Profile", end: false },
];

export function LearningLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-paper md:grid md:grid-cols-[17rem_1fr]">
      <aside className="border-b border-line bg-ink p-5 text-surface md:min-h-screen md:border-b-0 md:border-r">
        <div className="flex items-center gap-3">
          <BrandMark />
          <span>
            <strong className="block text-lg">G4U Learning</strong>
            <small className="text-xs text-surface/60">
              Your progress, your pace
            </small>
          </span>
        </div>
        <nav
          className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-1"
          aria-label="Learning navigation"
        >
          {links.map((link) => (
            <NavLink
              end={link.end}
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-extrabold transition ${isActive ? "bg-brand text-ink" : "text-surface/75 hover:bg-surface/10 hover:text-surface"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-8 flex items-center gap-3 border-t border-surface/15 pt-5 md:mt-auto">
          <div className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-brand font-extrabold text-ink">
            {user?.picture ? (
              <img
                src={user.picture}
                alt=""
                className="size-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              user?.name.slice(0, 1).toUpperCase()
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold">{user?.name}</p>
            <button
              className="mt-1 text-xs font-bold text-surface/60 hover:text-surface"
              type="button"
              onClick={logout}
            >
              Sign out
            </button>
          </div>
        </div>
      </aside>
      <main className="min-w-0 p-5 sm:p-8 lg:p-12">{children}</main>
    </div>
  );
}
