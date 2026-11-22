import { BrandMark } from "../../components/ui/BrandMark";

export function ComingSoonPage() {
  return (
    <main className="coming-soon" id="main-content">
      <div className="coming-soon__frame">
        <header className="coming-soon__header">
          <div className="coming-soon__brand" aria-label="G4U — Growth For You">
            <BrandMark />
            <span>
              <strong>G4U</strong>
              <small>GROWTH FOR YOU</small>
            </span>
          </div>
        </header>

        <section className="coming-soon__hero" aria-labelledby="coming-soon-title">
          <p className="coming-soon__eyebrow">SOMETHING MEANINGFUL IS COMING</p>
          <h1 id="coming-soon-title">
            Your growth journey starts here.
            <span>Coming Soon.</span>
          </h1>
          <p className="coming-soon__description">
            We&apos;re building something meaningful. A platform designed to help
            students and young individuals learn, grow, connect and discover new
            opportunities.
          </p>
          <p className="coming-soon__statement">GROWTH BEGINS WITH YOU.</p>
        </section>

        <div className="coming-soon__art" aria-hidden="true">
          <BrandMark />
        </div>

        <footer className="coming-soon__footer">
          <span>© G4U – Growth For You</span>
          <span>Building opportunities. Inspiring growth.</span>
        </footer>
      </div>
    </main>
  );
}
