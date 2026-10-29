import { useState } from "react";
import { ROUTES } from "../../constants/routes";
import { siteContent } from "../../content/site";
import { AppLink } from "../navigation/AppLink";
import { buttonClassName } from "../ui/Button";
import { BrandMark } from "../ui/BrandMark";
import { Icon } from "../ui/Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const c = siteContent.navigation;
  const closeMenu = () => setOpen(false);
  return <header className="border-b border-line bg-paper/95 backdrop-blur"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"><AppLink to={ROUTES.HOME} className="inline-flex items-center gap-3" onClick={closeMenu}><BrandMark /><span className="grid leading-none"><strong className="text-xl font-extrabold tracking-[-0.1em]">{siteContent.brand.name}</strong><small className="mt-1 text-[0.55rem] font-extrabold uppercase tracking-[0.14em]">{siteContent.brand.tagline}</small></span></AppLink><nav className={`${open ? "flex" : "hidden"} absolute inset-x-5 top-18 z-20 flex-col gap-5 rounded-card border border-line bg-surface p-5 shadow-lift md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label={c.ariaLabel}>{c.main.map((item) => <AppLink key={item.label} to={item.to} onClick={closeMenu} className="text-sm font-extrabold transition hover:text-brand">{item.label}</AppLink>)}<AppLink to={ROUTES.CONTACT} onClick={closeMenu} className={buttonClassName("secondary", "sm")}>{c.action}<Icon name="arrow" size={16} /></AppLink></nav><button className="grid size-10 place-items-center rounded-full border border-line md:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? c.closeMenu : c.openMenu}><Icon name={open ? "close" : "menu"} /></button></div></header>;
}
