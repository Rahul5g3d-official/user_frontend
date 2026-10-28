import { copy } from "./content";
import { APP_CONFIG } from "./constants";

function App() {
  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">{copy.home.eyebrow}</p>
        <h1 id="page-title">{copy.home.title}</h1>
        <p className="description">{copy.home.description}</p>
        <button type="button">{copy.home.primaryAction}</button>
        <p className="footer-note">{APP_CONFIG.name}</p>
      </section>
    </main>
  );
}

export default App;
