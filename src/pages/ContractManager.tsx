import { Link } from "react-router";
import "../styles/contract-manager.css";
import "../styles/case-shared.css";

const overview = [
  ["My role", "Lead UI/UX Designer"],
  ["Team", "UI/UX Designer and Project Manager"],
  ["Duration", "10 months"],
  ["Tools", "Figma, Trello, Slack"],
];

const insights = [
  {
    number: "01",
    audience: "Contract managers",
    need: "A centralized way to track contracts, deadlines, and renewals.",
  },
  {
    number: "02",
    audience: "HR personnel",
    need: "Efficient ways to manage employee permissions, assignments, and performance evaluations.",
  },
  {
    number: "03",
    audience: "Employees",
    need: "Visibility into contract-related responsibilities, deadlines, and performance evaluations.",
  },
];

function ImagePlaceholder({
  label,
  dark = false,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`case-placeholder ${dark ? "dark" : ""}`}
      role="img"
      aria-label={label}
    >
      <span>Image placeholder</span>
      <strong>{label}</strong>
      <small>Replace with approved project artifact</small>
    </div>
  );
}

export default function ContractManager() {
  return (
    <div className="case-page">
      <header className="case-nav">
        <Link className="wordmark" to="/" aria-label="AJ — home">
          AJ<span>.</span>
        </Link>
        <Link className="case-back" to="/#work">
          ← Back to work
        </Link>
        <span>Case study / 01</span>
      </header>

      <main>
        <section className="case-hero">
          <div className="case-kicker">
            Product design · UX research · UI/UX design
          </div>
          <h1>
            Contract
            <br />
            <em>Manager</em>
          </h1>
          <p className="case-deck">
            Bringing contracts, employee responsibilities, and performance
            evaluations into one centralized experience.
          </p>
          <div className="case-hero-visual" aria-hidden="true">
            <div className="case-dashboard">
              <div className="dashboard-side">
                <b>CM</b>
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="dashboard-body">
                <span>Dashboard / Overview</span>
                <h2>Good morning, AJ.</h2>
                <div className="dashboard-metrics">
                  <div>
                    <small>Active contracts</small>
                    <strong>128</strong>
                  </div>
                  <div>
                    <small>Upcoming reviews</small>
                    <strong>12</strong>
                  </div>
                  <div>
                    <small>Needs attention</small>
                    <strong>08</strong>
                  </div>
                </div>
                <div className="dashboard-table">
                  <b>Recent contracts</b>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
          <div className="case-number" aria-hidden="true">
            01
          </div>
        </section>

        <section className="case-overview case-section">
          <div className="case-section-label">Project overview</div>
          <div className="case-prose">
            <h2>One platform for connected management workflows.</h2>
            <p>
              Contract Manager is a web-based management system designed to
              bring contract management, employee responsibilities, and
              performance evaluation tracking into one centralized platform.
            </p>
            <p>
              The project focused on designing a unified experience for
              different organizational stakeholders, simplifying management
              workflows and making contract-related responsibilities easier to
              manage.
            </p>
            <p>
              I led user research, wireframing, prototyping, visual design, and
              usability testing, collaborating with the development team,
              project manager, and stakeholders throughout the process.
            </p>
          </div>
          <dl className="case-facts">
            {overview.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="case-challenge case-section">
          <div className="case-section-label">The challenge / 02</div>
          <div className="case-prose">
            <h2>Managing connected workflows in one place.</h2>
            <p>
              Contract management, employee assignments, permissions, and
              performance evaluations involve multiple workflows and
              stakeholders. The design challenge was to support these different
              needs while making complex management tasks easier to navigate.
            </p>
          </div>
          <blockquote>
            How might we create one coherent system without losing the context
            each stakeholder needs?
          </blockquote>
        </section>

        <section className="case-research case-section">
          <div className="case-section-label">
            Research &amp; discovery / 03
          </div>
          <div className="case-prose">
            <h2>Understanding different stakeholder needs.</h2>
            <p>
              I conducted surveys, interviews, and focus groups with contract
              managers, HR personnel, and employees. The goal was to understand
              their priorities and find opportunities to improve how connected
              activities could be managed through a unified platform.
            </p>
          </div>
          <div className="research-methods">
            <div>
              <span>01</span>
              <strong>Surveys</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Interviews</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Focus groups</strong>
            </div>
          </div>
        </section>

        <section className="case-insights case-section">
          <div className="case-section-label">Key insights / 04</div>
          <div className="case-prose">
            <h2>
              Three groups.
              <br />
              Different needs.
            </h2>
          </div>
          <div className="insight-grid">
            {insights.map((insight) => (
              <article key={insight.number}>
                <span>{insight.number}</span>
                <h3>{insight.audience}</h3>
                <p>{insight.need}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-analysis case-section">
          <div className="case-section-label">Competitive analysis / 05</div>
          <div className="case-prose">
            <h2>Identifying opportunities in the market.</h2>
            <p>
              I examined contract management solutions across usability,
              contract lifecycle management, integrations, customization, and
              employee-related workflows. This framed opportunities for a more
              unified management experience without overstating conclusions
              beyond the products and features evaluated.
            </p>
          </div>
          <div className="analysis-strip">
            {["Usability", "Lifecycle", "Integrations", "Customization"].map(
              (item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ),
            )}
          </div>
        </section>

        <section className="case-artifacts">
          <div className="artifact-copy">
            <div className="case-section-label">
              Information architecture / 06
            </div>
            <h2>Organizing a complex management system.</h2>
            <p>
              I structured contracts, employee responsibilities, and performance
              evaluations into a coherent experience that could support
              different stakeholders.
            </p>
          </div>
          <ImagePlaceholder label="Information architecture diagram" dark />
        </section>

        <section className="case-visuals case-section">
          <div className="case-section-label">Visual design / 07</div>
          <div className="case-prose">
            <h2>Turning structure into a clear interface.</h2>
            <p>
              I developed UI guidelines and interface screens in Figma, creating
              a consistent visual language across contract, employee, and
              evaluation workflows.
            </p>
          </div>
          <div className="visual-placeholders">
            <ImagePlaceholder label="UI guidelines and component system" />
            <ImagePlaceholder label="Approved final interface screens" />
          </div>
        </section>

        <section className="case-testing case-section">
          <div className="case-section-label">
            Prototyping &amp; testing / 08
          </div>
          <div className="case-prose">
            <h2>Testing the experience before delivery.</h2>
            <p>
              I created interactive prototypes and conducted usability testing
              as part of the design process. Testing details, task findings,
              design changes, and validation results can be added here as
              verified project material becomes available.
            </p>
          </div>
        </section>

        <section className="case-reflection case-section">
          <div className="case-section-label">
            Outcome &amp; reflection / 09
          </div>
          <div className="case-prose">
            <h2>A project spanning the full design process.</h2>
            <p>
              Contract Manager brought contract management, employee
              responsibilities, and performance evaluation workflows together
              within one platform. It gave me the opportunity to work across
              research, information architecture, prototyping, and visual design
              while collaborating closely with stakeholders and the development
              team.
            </p>
            <p className="case-note">
              Verified delivery status, measured results, and additional lessons
              can be added when available.
            </p>
          </div>
        </section>
      </main>

      <footer className="case-footer">
        <span>Next project</span>
        <Link to="/#work">
          Polo Themes <b>↗</b>
        </Link>
        <div>
          <span>AJ — Product-minded designer</span>
          <Link to="/">Back home ↑</Link>
        </div>
      </footer>
    </div>
  );
}
