import { Link } from "react-router";
import "../styles/about.css";
import "../styles/case-shared.css";

const capabilities = [
  ["01", "Product thinking", "Connecting user needs, business context, and technical reality."],
  ["02", "Design craft", "Turning complex systems into clear, considered digital experiences."],
  ["03", "Collaboration", "Working closely with stakeholders, product teams, and developers."],
];

function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`about-photo ${className}`}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <span>Personal photo</span>
      <strong>{label}</strong>
      <small>Replace with AJ’s photo</small>
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <header className="case-nav">
        <Link className="wordmark" to="/" aria-label="AJ — home">
          AJ<span>.</span>
        </Link>
        <nav aria-label="About page navigation">
          <Link to="/#work">Work</Link>
          <Link to="/about" aria-current="page">About</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
        <span>About / AJ</span>
      </header>

      <main>
        <section className="about-hero">
          <div className="about-hero-label">Designer · Engineer · Business thinker</div>
          <h1>
            I design with <em>curiosity,</em><br />
            clarity, and intent.
          </h1>
          <p>
            I’m AJ, a UI/UX designer who brings together computer engineering,
            business understanding, and design craft to shape meaningful digital
            products.
          </p>
          <div className="about-portrait-wrap">
            <PhotoPlaceholder label="Primary portrait" className="about-portrait" />
            <span className="portrait-note">Based anywhere · Working globally</span>
          </div>
          <span className="about-hero-number" aria-hidden="true">02</span>
        </section>

        <section className="about-story">
          <div className="case-section-label">My story / 01</div>
          <div className="about-story-copy">
            <h2>Three perspectives.<br />One design practice.</h2>
            <p className="story-lead">
              My path into design began with understanding how things work.
            </p>
            <p>
              Computer engineering gave me a systems mindset and an appreciation
              for technical constraints. Business education helped me understand
              the decisions, priorities, and value behind a product. UI/UX design
              became the space where those perspectives could work together.
            </p>
            <p>
              Today, I approach projects by looking beyond the interface. I ask
              what problem needs to be solved, who the experience is for, how it
              fits into a wider system, and what will make it useful in practice.
            </p>
          </div>
          <div className="story-side-note">
            <span>My perspective</span>
            <strong>Understand deeply.<br />Design clearly.<br />Build thoughtfully.</strong>
          </div>
        </section>

        <section className="about-gallery" aria-label="Personal photo gallery">
          <PhotoPlaceholder label="Working process" className="photo-wide" />
          <div className="gallery-caption">
            <span>Behind the work</span>
            <p>
              The best ideas usually begin with a question, a rough sketch, and
              the willingness to look at the problem from another angle.
            </p>
          </div>
          <PhotoPlaceholder label="Candid portrait" className="photo-tall" />
        </section>

        <section className="about-approach">
          <div className="case-section-label">How I work / 02</div>
          <h2>Thoughtful about the problem.<br /><em>Precise about the details.</em></h2>
          <div className="approach-grid">
            {capabilities.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-belief">
          <span className="case-section-label">What I believe / 03</span>
          <blockquote>
            Good design should make complexity feel <em>understandable</em> — not
            invisible.
          </blockquote>
          <p>
            I care about experiences that respect people’s time, communicate
            clearly, and balance usability with a distinctive visual point of view.
          </p>
        </section>

        <section className="about-next">
          <span className="case-section-label">Let’s work together</span>
          <h2>Have a problem worth<br /><em>thinking through?</em></h2>
          <div className="about-next-actions">
            <a className="button primary" href="mailto:hello@aj.design">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button secondary"
              href="/demo-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View My CV <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <span>AJ — Product-minded designer</span>
        <Link to="/">Back home ↑</Link>
      </footer>
    </div>
  );
}
