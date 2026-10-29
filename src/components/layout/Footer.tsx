import { ROUTES } from "../../constants/routes";
import { siteContent } from "../../content/site";
import { AppLink } from "../navigation/AppLink";
import { BrandMark } from "../ui/BrandMark";

export function Footer() {
  const c = siteContent.footer;
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <AppLink to={ROUTES.HOME} className="inline-flex items-center gap-3">
            <BrandMark />
            <span className="grid leading-none">
              <strong className="text-xl font-extrabold tracking-[-0.1em]">
                {siteContent.brand.name}
              </strong>
              <small className="mt-1 text-[0.55rem] font-extrabold uppercase tracking-[0.14em]">
                {siteContent.brand.tagline}
              </small>
            </span>
          </AppLink>
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
            {c.description}
          </p>
        </div>
        <nav className="grid grid-cols-2 content-start gap-x-6 gap-y-4 text-sm font-extrabold">
          {c.links.map((item) => (
            <AppLink
              key={item.label}
              className="transition hover:text-brand"
              to={item.to}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>
        <div className="border-t border-line pt-5 text-xs text-muted lg:col-span-2 lg:flex lg:justify-between">
          <span>{c.copyright}</span>
          <span className="mt-2 block lg:mt-0">{c.placeholder}</span>
        </div>
      </div>
    </footer>
  );
}
