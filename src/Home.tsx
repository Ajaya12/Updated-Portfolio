const Arrow = () => <span aria-hidden="true">↗</span>;

function ProjectVisual({ type }: { type: "product" | "visual" | "ai" }) {
  if (type === "product") {
    return (
      <div className="project-visual product-visual" aria-hidden="true">
        <div className="phone phone-back">
          <span className="phone-label">TEAM OVERVIEW</span>
          <strong>Responsibilities</strong>
          <div className="balance">
            <small>Upcoming reviews</small>
            <b>12</b>
          </div>
          <div className="mini-chart" />
        </div>
        <div className="phone phone-front">
          <span className="phone-label">CONTRACTS</span>
          <strong>Everything in one place.</strong>
          <div className="donut" />
          <div className="phone-row">
            <span>Active contracts</span>
            <b>74%</b>
          </div>
        </div>
      </div>
    );
  }

  if (type === "visual") {
    return (
      <div className="project-visual visual-visual" aria-hidden="true">
        <span className="poster-word">FORM</span>
        <div className="poster-circle" />
        <div className="poster-card">
          <small>STUDY 02 / 2025</small>
          <strong>
            Type in
            <br />
            motion.
          </strong>
          <span>Visual systems &amp; digital expression</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual ai-visual" aria-hidden="true">
      <img
        src="https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=1200"
        alt=""
      />
      <div className="ai-window">
        <div className="window-bar">
          <i />
          <i />
          <i />
        </div>
        <small>EXPERIMENT 03</small>
        <strong>
          What if interfaces
          <br />
          could imagine?
        </strong>
        <span>Prompt → Pattern → Prototype</span>
      </div>
    </div>
  );
}

type ProjectProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  type: "product" | "visual" | "ai";
  href?: string;
};

function ProjectCard({
  number,
  category,
  title,
  description,
  type,
  href = "#contact",
}: ProjectProps) {
  return (
    <article className={`project-card ${type}`}>
      <div className="project-meta">
        <span>{number}</span>
        <span>{category}</span>
        <span>Selected work</span>
      </div>
      <ProjectVisual type={type} />
      <div className="project-copy">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href} className="text-link">
          View case study <Arrow />
        </a>
      </div>
    </article>
  );
}

const capabilities = [
  "Product strategy",
  "UX research",
  "Interaction design",
  "Visual systems",
  "Rapid prototyping",
  "AI-assisted workflows",
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="AJ — home">
          AJ<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="availability">
          <i /> Available for select projects
        </span>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="eyebrow">UI/UX DESIGNER · PRODUCT THINKER</div>
          <h1 id="hero-title">
            I turn complex problems into <em>meaningful</em> digital
            experiences.
          </h1>
          <div className="hero-bottom">
            <p>
              I’m Ajaya Thakur — a designer with roots in computer engineering
              and business. I connect user needs, technical reality, and
              commercial intent to make digital products that feel clear and
              human.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                View my work <Arrow />
              </a>
              <a className="button secondary" href="#contact">
                Let’s collaborate
              </a>
              <a
                className="button secondary"
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View My CV <Arrow />
              </a>
            </div>
          </div>
          <span className="hero-index" aria-hidden="true">
            01
          </span>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <span>Selected work / 2025</span>
            <h2 id="work-title">
              Ideas made
              <br />
              <em>tangible.</em>
            </h2>
          </div>
          <div className="projects">
            <ProjectCard
              number="01"
              category="Product design"
              title="Contract Manager"
              description="Designing a centralized management experience for contracts, employee responsibilities, and performance evaluations. Focused on UX research, problem solving, and product design."
              type="product"
              href="/work/contract-manager"
            />
            <ProjectCard
              number="02"
              category="Visual design"
              title="Polo Themes"
              description="Exploring the design of a theme-generation experience through thoughtful interfaces and visual systems. Focused on UI design, visual systems, and prototyping."
              type="visual"
            />
            <ProjectCard
              number="03"
              category="AI-assisted application"
              title="Documee"
              description="Exploring an AI-based documentation experience through product thinking and interface design. Focused on AI-assisted workflows and UI/UX design."
              type="ai"
            />
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="section-label">02 / About</div>
          <div className="about-main">
            <h2 id="about-title">
              Design is how I make <em>sense</em> of complexity.
            </h2>
            <div className="about-copy">
              <p>
                My engineering background taught me how systems work. Business
                education taught me why they matter. Design is where I bring
                both together — shaping useful, viable experiences with care.
              </p>
              <a href="/about" className="text-link">
                More about me <Arrow />
              </a>
            </div>
          </div>
          <div className="principles">
            <div>
              <span>01</span>
              <h3>Understand the real problem.</h3>
            </div>
            <div>
              <span>02</span>
              <h3>Design for people and context.</h3>
            </div>
            <div>
              <span>03</span>
              <h3>Make every detail earn its place.</h3>
            </div>
          </div>
        </section>

        <section className="capabilities" aria-labelledby="capabilities-title">
          <div className="section-label">03 / Capabilities</div>
          <h2 id="capabilities-title">How I can help.</h2>
          <ol>
            {capabilities.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                <Arrow />
              </li>
            ))}
          </ol>
        </section>

        <section className="playground" aria-labelledby="playground-title">
          <div className="playground-copy">
            <span className="section-label">04 / AI Playground</span>
            <h2 id="playground-title">
              Curiosity,
              <br />
              in <em>public.</em>
            </h2>
            <p>
              Small experiments at the edge of design and emerging technology.
              Less polished case study, more open notebook.
            </p>
            <a href="#playground-grid" className="button light">
              Explore the playground <Arrow />
            </a>
          </div>
          <div
            className="playground-grid"
            id="playground-grid"
            aria-label="AI experiment previews"
          >
            <div className="experiment exp-one">
              <span>01</span>
              <b>
                Generative
                <br />
                objects
              </b>
            </div>
            <div className="experiment exp-two">
              <span>02</span>
              <i />
              <i />
              <i />
            </div>
            <div className="experiment exp-three">
              <span>03</span>
              <b>
                TYPE
                <br />
                /FORM
              </b>
            </div>
            <div className="experiment exp-four">
              <span>04</span>
              <b>
                Interfaces
                <br />
                that adapt
              </b>
            </div>
          </div>
        </section>
      </main>

      <footer className="contact" id="contact">
        <span className="section-label">Have a project in mind?</span>
        <h2>
          Let’s make something
          <br />
          <em>worth remembering.</em>
        </h2>
        <a className="email-link" href="mailto:ajayathakur383@gmail.com">
          ajayathakur383@gmail.com <Arrow />
        </a>
        <div className="footer-row">
          <span>Ajaya — Product-minded designer</span>
          <span>Open to global opportunities</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
