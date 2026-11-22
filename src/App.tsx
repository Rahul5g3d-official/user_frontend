import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { isComingSoonMode } from "./config/site-mode";
import { SiteMetadata } from "./components/seo/SiteMetadata";
import { ComingSoonPage } from "./pages/coming-soon/ComingSoonPage";
import { SITE } from "./constants/app";
import { ROUTES, type RoutePath } from "./constants/routes";
import { siteContent } from "./content/site";

type IconName =
  | "arrow"
  | "check"
  | "plus"
  | "mail"
  | "pin"
  | "heart"
  | "menu"
  | "close";
function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "arrow")
    return (
      <svg {...p}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  if (name === "check")
    return (
      <svg {...p}>
        <path d="m5 12 4.3 4.3L19 7" />
      </svg>
    );
  if (name === "plus")
    return (
      <svg {...p}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  if (name === "mail")
    return (
      <svg {...p}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  if (name === "pin")
    return (
      <svg {...p}>
        <path d="M20 10c0 5-8 10-8 10S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  if (name === "heart")
    return (
      <svg {...p}>
        <path d="M20.8 8.6c0 5.3-8.8 10.5-8.8 10.5S3.2 13.9 3.2 8.6A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.3Z" />
      </svg>
    );
  if (name === "close")
    return (
      <svg {...p}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    );
  return (
    <svg {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}
function useLocation() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const pop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, []);
  return {
    path,
    navigate: (to: string) => {
      window.history.pushState({}, "", to);
      setPath(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  };
}
function Link({
  to,
  children,
  className,
  navigate,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  navigate: (to: string) => void;
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          navigate(to);
        }
      }}
    >
      {children}
    </a>
  );
}
function Header({ navigate }: { navigate: (to: string) => void }) {
  const [open, setOpen] = useState(false);
  const c = siteContent.navigation;
  return (
    <header className="header">
      <Link to={ROUTES.HOME} navigate={navigate} className="brand">
        <Mark />
        <span>
          {SITE.name}
          <small>{SITE.tagline}</small>
        </span>
      </Link>
      <nav className={open ? "nav nav-open" : "nav"}>
        {c.main.map((x) => (
          <Link
            key={x.label}
            to={x.to}
            navigate={(to) => {
              navigate(to);
              setOpen(false);
            }}
          >
            {x.label}
          </Link>
        ))}
        <Link
          to={ROUTES.CONTACT}
          navigate={(to) => {
            navigate(to);
            setOpen(false);
          }}
          className="button button-green nav-cta"
        >
          {c.action}
          <Icon name="arrow" size={16} />
        </Link>
      </nav>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? c.closeMenu : c.openMenu}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
    </header>
  );
}
function Footer({ navigate }: { navigate: (to: string) => void }) {
  const c = siteContent.footer;
  return (
    <footer className="footer">
      <div>
        <Link to={ROUTES.HOME} navigate={navigate} className="brand">
          <Mark />
          <span>
            {SITE.name}
            <small>{SITE.tagline}</small>
          </span>
        </Link>
        <p>{c.description}</p>
      </div>
      <div className="footer-links">
        {c.links.map((x) => (
          <Link key={x.label} to={x.to} navigate={navigate}>
            {x.label}
          </Link>
        ))}
      </div>
      <div className="footer-bottom">
        <span>{c.copyright}</span>
        <span>{c.placeholder}</span>
      </div>
    </footer>
  );
}
function PageHero({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "page-hero compact" : "page-hero"}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="hero-orb" aria-hidden="true">
        <span>{SITE.name}</span>
        <i />
      </div>
    </section>
  );
}
function Cta({ navigate }: { navigate: (to: string) => void }) {
  const c = siteContent.sharedCta;
  return (
    <section className="cta">
      <div>
        <p className="eyebrow">{c.eyebrow}</p>
        <h2>{c.title}</h2>
        <p>{c.description}</p>
      </div>
      <Link className="button button-paper" to={c.to} navigate={navigate}>
        {c.action}
        <Icon name="arrow" />
      </Link>
    </section>
  );
}

function Home({ navigate }: { navigate: (to: string) => void }) {
  const c = siteContent.home;
  return (
    <>
      <section className="home-hero">
        <div>
          <p className="eyebrow">{c.hero.eyebrow}</p>
          <h1>
            {c.hero.title}
            <em>{c.hero.accent}</em>
          </h1>
          <p className="hero-copy">{c.hero.description}</p>
          <div className="actions">
            <Link
              className="button button-ink"
              to={c.hero.primary.to}
              navigate={navigate}
            >
              {c.hero.primary.label}
              <Icon name="arrow" />
            </Link>
            <Link
              className="text-link"
              to={c.hero.secondary.to}
              navigate={navigate}
            >
              {c.hero.secondary.label}
              <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="grid-lines" />
          <span className="floating-note note-one">{c.hero.noteOne}</span>
          <span className="floating-note note-two">{c.hero.noteTwo}</span>
          <div className="growth-ring">
            <b>{SITE.name}</b>
            <small>{c.hero.ringText}</small>
          </div>
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>
        </div>
      </section>
      <section className="principles">
        {c.principles.map((x, i) => (
          <span key={x}>
            {i > 0 && <i>✦</i>}
            {x}
          </span>
        ))}
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{c.services.eyebrow}</p>
            <h2>{c.services.title}</h2>
          </div>
          <p>{c.services.description}</p>
        </div>
        <div className="service-grid">
          {c.services.items.map((x, i) => (
            <article className="service-card" key={x.title}>
              <span className="number">0{i + 1}</span>
              <div className={`service-shape shape-${i}`} />
              <p>{x.label}</p>
              <h3>{x.title}</h3>
              <span className="card-arrow">
                <Icon name="arrow" />
              </span>
            </article>
          ))}
        </div>
      </section>
      <section className="split-band">
        <div className="statement-art">
          <span>{SITE.name}</span>
          <i>{c.approach.artText}</i>
        </div>
        <div>
          <p className="eyebrow">{c.approach.eyebrow}</p>
          <h2>{c.approach.title}</h2>
          <p>{c.approach.description}</p>
          <ul>
            {c.approach.points.map((x) => (
              <li key={x}>
                <Icon name="check" />
                {x}
              </li>
            ))}
          </ul>
          <Link
            className="button button-green"
            to={ROUTES.APPROACH}
            navigate={navigate}
          >
            {c.approach.action}
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="quote">
        <p className="eyebrow">{c.quote.eyebrow}</p>
        <blockquote>“{c.quote.text}”</blockquote>
        <div className="quote-person">
          <span>{c.quote.initials}</span>
          <p>
            <strong>{c.quote.name}</strong>
            <br />
            {c.quote.role}
          </p>
        </div>
      </section>
      <Cta navigate={navigate} />
    </>
  );
}
function About() {
  const c = siteContent.about;
  return (
    <>
      <PageHero {...c.hero} />
      <section className="section two-col">
        <div>
          <p className="eyebrow">{c.story.eyebrow}</p>
          <h2>{c.story.title}</h2>
        </div>
        <div className="rich-copy">
          {c.story.paragraphs.map((x) => (
            <p key={x}>{x}</p>
          ))}
        </div>
      </section>
      <section className="mission-grid">
        <article>
          <p className="eyebrow">{c.vision.eyebrow}</p>
          <h2>{c.vision.title}</h2>
          <p>{c.vision.description}</p>
        </article>
        <article>
          <p className="eyebrow">{c.mission.eyebrow}</p>
          <h2>{c.mission.title}</h2>
          <p>{c.mission.description}</p>
        </article>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{c.values.eyebrow}</p>
            <h2>{c.values.title}</h2>
          </div>
        </div>
        <div className="value-grid">
          {c.values.items.map((x, i) => (
            <article key={x.title}>
              <span>0{i + 1}</span>
              <h3>{x.title}</h3>
              <p>{x.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="team-placeholder">
        <p className="eyebrow">{c.team.eyebrow}</p>
        <h2>{c.team.title}</h2>
        <p>{c.team.description}</p>
      </section>
    </>
  );
}
function Services({ navigate }: { navigate: (to: string) => void }) {
  const c = siteContent.services;
  return (
    <>
      <PageHero {...c.hero} />
      <section className="section">
        <div className="service-list">
          {c.items.map((x, i) => (
            <article key={x.title}>
              <span>0{i + 1}</span>
              <div>
                <p className="eyebrow">{x.kicker}</p>
                <h2>{x.title}</h2>
                <p>{x.description}</p>
                <ul>
                  {x.benefits.map((y) => (
                    <li key={y}>
                      <Icon name="check" />
                      {y}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Cta navigate={navigate} />
    </>
  );
}
function Approach({ navigate }: { navigate: (to: string) => void }) {
  const c = siteContent.approachPage;
  return (
    <>
      <PageHero {...c.hero} />
      <section className="section approach-steps">
        {c.steps.map((x, i) => (
          <article key={x.title}>
            <span>0{i + 1}</span>
            <div>
              <p className="eyebrow">{x.eyebrow}</p>
              <h2>{x.title}</h2>
              <p>{x.description}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="participate">
        <div>
          <p className="eyebrow">{c.participate.eyebrow}</p>
          <h2>{c.participate.title}</h2>
          <p>{c.participate.description}</p>
        </div>
        {c.participate.items.map((x) => (
          <div className="participate-card" key={x.title}>
            <Icon name="heart" />
            <h3>{x.title}</h3>
            <p>{x.description}</p>
          </div>
        ))}
      </section>
      <Cta navigate={navigate} />
    </>
  );
}
function Impact({ navigate }: { navigate: (to: string) => void }) {
  const c = siteContent.impact;
  return (
    <>
      <PageHero {...c.hero} />
      <section className="section">
        <p className="data-note">{c.note}</p>
        <div className="metrics">
          {c.metrics.map((x) => (
            <article key={x.label}>
              <strong>{x.value}</strong>
              <p>{x.label}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{c.stories.eyebrow}</p>
            <h2>{c.stories.title}</h2>
          </div>
          <p>{c.stories.description}</p>
        </div>
        <div className="story-grid">
          {c.stories.items.map((x) => (
            <article key={x.title}>
              <span>{x.tag}</span>
              <h3>{x.title}</h3>
              <p>{x.description}</p>
              <a href="#impact">
                {x.action} <Icon name="arrow" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <Cta navigate={navigate} />
    </>
  );
}
function Careers({ navigate }: { navigate: (to: string) => void }) {
  const c = siteContent.careers;
  return (
    <>
      <PageHero {...c.hero} />
      <section className="culture">
        <div>
          <p className="eyebrow">{c.culture.eyebrow}</p>
          <h2>{c.culture.title}</h2>
          <p>{c.culture.description}</p>
        </div>
        <div className="culture-words">
          {c.culture.words.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{c.benefits.eyebrow}</p>
            <h2>{c.benefits.title}</h2>
          </div>
        </div>
        <div className="value-grid">
          {c.benefits.items.map((x, i) => (
            <article key={x.title}>
              <span>0{i + 1}</span>
              <h3>{x.title}</h3>
              <p>{x.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="jobs">
        <p className="eyebrow">{c.jobs.eyebrow}</p>
        <h2>{c.jobs.title}</h2>
        <p>{c.jobs.description}</p>
        <Link
          to={ROUTES.CONTACT}
          navigate={navigate}
          className="button button-ink"
        >
          {c.jobs.action}
          <Icon name="arrow" />
        </Link>
      </section>
    </>
  );
}
function Contact() {
  const c = siteContent.contact;
  const [submitted, setSubmitted] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <PageHero {...c.hero} compact />
      <section className="contact-layout">
        <div className="contact-details">
          <p className="eyebrow">{c.details.eyebrow}</p>
          <h2>{c.details.title}</h2>
          <p>{c.details.description}</p>
          <div>
            <Icon name="mail" />
            <span>
              <strong>{c.details.emailLabel}</strong>
              {c.details.email}
            </span>
          </div>
          <div>
            <Icon name="pin" />
            <span>
              <strong>{c.details.locationLabel}</strong>
              {c.details.location}
            </span>
          </div>
          <div className="socials">
            {c.details.socials.map((x) => (
              <a href="#contact" key={x}>
                {x}
              </a>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          {submitted ? (
            <div className="form-success">
              <span>
                <Icon name="check" size={30} />
              </span>
              <h2>{c.form.successTitle}</h2>
              <p>{c.form.successDescription}</p>
            </div>
          ) : (
            <>
              {c.form.fields.map((x) => (
                <label key={x.name}>
                  {x.label}
                  {x.type === "textarea" ? (
                    <textarea
                      required
                      placeholder={x.placeholder}
                      name={x.name}
                      rows={5}
                    />
                  ) : (
                    <input
                      required
                      type={x.type}
                      placeholder={x.placeholder}
                      name={x.name}
                    />
                  )}
                </label>
              ))}
              <button className="button button-green" type="submit">
                {c.form.action}
                <Icon name="arrow" />
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}
function Faq() {
  const c = siteContent.faq;
  const [active, setActive] = useState<number | null>(0);
  return (
    <>
      <PageHero {...c.hero} compact />
      <section className="faq-list">
        {c.items.map((x, i) => (
          <article key={x.question}>
            <button
              type="button"
              onClick={() => setActive(active === i ? null : i)}
            >
              <span>{x.question}</span>
              <Icon name="plus" />
            </button>
            {active === i && <p>{x.answer}</p>}
          </article>
        ))}
      </section>
    </>
  );
}
function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const c = siteContent[kind];
  return (
    <>
      <PageHero {...c.hero} compact />
      <section className="legal">
        {c.sections.map((x) => (
          <article key={x.title}>
            <h2>{x.title}</h2>
            <p>{x.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
function NotFound({ navigate }: { navigate: (to: string) => void }) {
  const c = siteContent.notFound;
  return (
    <section className="not-found">
      <span>{c.code}</span>
      <p className="eyebrow">{c.eyebrow}</p>
      <h1>{c.title}</h1>
      <p>{c.description}</p>
      <Link to={ROUTES.HOME} className="button button-ink" navigate={navigate}>
        {c.action}
        <Icon name="arrow" />
      </Link>
    </section>
  );
}
function App() {
  if (isComingSoonMode) {
    return (
      <>
        <SiteMetadata />
        <ComingSoonPage />
      </>
    );
  }

  const { path, navigate } = useLocation();
  const pages: Partial<Record<RoutePath, ReactNode>> = {
    [ROUTES.HOME]: <Home navigate={navigate} />,
    [ROUTES.ABOUT]: <About />,
    [ROUTES.SERVICES]: <Services navigate={navigate} />,
    [ROUTES.APPROACH]: <Approach navigate={navigate} />,
    [ROUTES.IMPACT]: <Impact navigate={navigate} />,
    [ROUTES.CAREERS]: <Careers navigate={navigate} />,
    [ROUTES.CONTACT]: <Contact />,
    [ROUTES.FAQ]: <Faq />,
    [ROUTES.PRIVACY]: <Legal kind="privacy" />,
    [ROUTES.TERMS]: <Legal kind="terms" />,
  };
  return (
    <>
      <SiteMetadata />
      <Header navigate={navigate} />
      <main>
        {pages[path as RoutePath] ?? <NotFound navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </>
  );
}
export default App;
