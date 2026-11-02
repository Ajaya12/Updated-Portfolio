import { useEffect, useState, type KeyboardEvent } from "react"
import { Fade } from "@animate-ui/react/primitives/effects/fade"
import { Dialog } from "@animate-ui/react/primitives/radix-ui"
import { Link } from "react-router"
import Reveal from "../../components/Reveal"
import contractManagerImage from "../../image/contract manager.jpg"
import informationArchitectureImage from "../../image/information_architecture.jpg"
import brandImage from "../../image/brand.jpg"
import screenImage from "../../image/screen.jpg"
import "./ContractManager.css"
import "../../styles/case-shared.css"

const caseTransition = {
  duration: 0.6,
  ease: "easeOut" as const,
}

const overview = [
  ["My role", "Lead UI/UX Designer"],
  ["Team", "UI/UX Designer and Project Manager"],
  ["Duration", "10 months"],
  ["Tools", "Figma, Trello, Slack"],
]

const aiOpportunities = [
  "AI-assisted contract summaries",
  "Natural-language search across contracts",
  "Intelligent reminders for important deadlines",
  "AI-assisted insights for management workflows",
]

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
]

function ImagePlaceholder({
  label,
  dark = false,
  className = "",
  imageSrc,
  onClick,
  onKeyDown,
}: {
  label: string
  dark?: boolean
  className?: string
  imageSrc?: string
  onClick?: () => void
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void
}) {
  return (
    <div
      className={`case-placeholder ${dark ? "dark" : ""} ${className}`}
      role={onClick ? "button" : "img"}
      aria-label={label}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onKeyDown}
      style={
        imageSrc
          ? {
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      {!imageSrc && (
        <>
          <span>Image placeholder</span>
          <strong>{label}</strong>
          <small>Replace with approved project artifact</small>
        </>
      )}
    </div>
  )
}

export default function ContractManager() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isArchitectureImageOpen, setIsArchitectureImageOpen] = useState(false)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0,
      )
    }

    updateScrollProgress()
    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    window.addEventListener("resize", updateScrollProgress)

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
      window.removeEventListener("resize", updateScrollProgress)
    }
  }, [])

  return (
    <div className="case-page">
      <div
        className="case-scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />
      <header className="case-nav">
        <Link
          className="wordmark hover-target"
          to="/"
          aria-label="AJAYA — home"
        >
          AJAYA<span>.</span>
        </Link>
        <Link className="case-back hover-target" to="/#work">
          ← Back to work
        </Link>
        <span>Case study / 01</span>
      </header>

      <main>
        <Reveal as="section" className="case-hero">
          <Fade asChild delay={40} transition={caseTransition}>
            <div className="case-kicker">
              Product design · UX research · UI/UX design
            </div>
          </Fade>
          <h1>
            <Fade asChild delay={120} transition={caseTransition}>
              <span className="case-hero-line">Contract</span>
            </Fade>
            <br />
            <Fade asChild delay={240} transition={caseTransition}>
              <span className="case-hero-line">
                <em>Manager</em>
              </span>
            </Fade>
          </h1>
          <Fade asChild delay={460} transition={caseTransition}>
            <p className="case-deck">
              Bringing contracts, employee responsibilities, and performance
              evaluations into one centralized experience.
            </p>
          </Fade>
          <Fade
            asChild
            delay={620}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={caseTransition}
          >
            <div className="case-hero-visual">
              <img
                src={contractManagerImage}
                alt="Contract Manager project interface"
              />
            </div>
          </Fade>
          <div className="case-number case-hero-number" aria-hidden="true">
            01
          </div>
        </Reveal>

        <Reveal as="section" className="case-overview case-section" delay={80}>
          <div className="case-section-label">Project overview</div>
          <div className="case-prose">
            <h2>One platform for connected management workflows.</h2>
            <p>
              Contract Manager is a web-based platform designed to simplify how
              organizations manage contracts, employee responsibilities, and
              performance evaluations.
            </p>
            <p>
              The challenge was to bring disconnected management processes into
              one cohesive experience-making complex workflows easier to
              understand, navigate, and manage.
            </p>
            <p>
              As the lead UI/UX designer, I worked across research, information
              architecture, wireframing, prototyping, visual design, and
              usability testing to shape a more structured and intuitive product
              experience.
            </p>
            <p>
              <b className="case-focus-note">
                My focus: Understanding complex workflows, aligning stakeholder
                needs, and designing a system that makes everyday management
                more manageable.
              </b>
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
        </Reveal>

        <Reveal
          as="section"
          className="case-challenge case-section"
          delay={100}
        >
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
        </Reveal>

        <Reveal as="section" className="case-research case-section" delay={120}>
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
            <div className="case-research-method">
              <span>01</span>
              <strong>Surveys</strong>
            </div>
            <div className="case-research-method">
              <span>02</span>
              <strong>Interviews</strong>
            </div>
            <div className="case-research-method">
              <span>03</span>
              <strong>Focus groups</strong>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="case-insights case-section" delay={140}>
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
              <article key={insight.number} className="case-insight-item">
                <span>{insight.number}</span>
                <h3>{insight.audience}</h3>
                <p>{insight.need}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="case-analysis case-section" delay={160}>
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
                <div key={item} className="case-analysis-item">
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ),
            )}
          </div>
        </Reveal>

        <Reveal as="section" className="case-artifacts" delay={180}>
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
          <Dialog.Root
            open={isArchitectureImageOpen}
            onOpenChange={setIsArchitectureImageOpen}
          >
            <ImagePlaceholder
              label="Open information architecture diagram"
              dark
              className="case-artifact-visual"
              imageSrc={informationArchitectureImage}
              onClick={() => setIsArchitectureImageOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  setIsArchitectureImageOpen(true)
                }
              }}
            />
            <Dialog.Portal>
              <Dialog.Overlay className="case-image-overlay" />
              <Dialog.Content
                className="case-image-dialog"
                from="bottom"
                aria-describedby="architecture-image-description"
              >
                <Dialog.Close
                  className="case-image-dialog-close"
                  aria-label="Close image overlay"
                >
                  ×
                </Dialog.Close>
                <Dialog.Title className="case-image-dialog-title">
                  Information architecture diagram
                </Dialog.Title>
                <Dialog.Description
                  id="architecture-image-description"
                  className="case-image-dialog-description"
                >
                  Expanded information architecture diagram
                </Dialog.Description>
                <img
                  src={informationArchitectureImage}
                  alt="Information architecture diagram"
                />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </Reveal>

        <Reveal as="section" className="case-visuals case-section" delay={200}>
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
            <ImagePlaceholder
              label="UI guidelines and component system"
              className="case-ui-visual case-brand-visual"
              imageSrc={brandImage}
            />
            <ImagePlaceholder
              label="Approved final interface screens"
              className="case-ui-visual case-screen-visual"
              imageSrc={screenImage}
            />
          </div>
        </Reveal>

        <Reveal as="section" className="case-testing case-section" delay={220}>
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
        </Reveal>

        <Reveal
          as="section"
          className="case-reflection case-section"
          delay={240}
        >
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
        </Reveal>

        <Reveal as="section" className="case-ai-exploration" delay={260}>
          <div className="case-section-label">Future exploration / 10</div>
          <div className="case-ai-intro">
            <h2>
              Rethinking the experience with <em>AI.</em>
            </h2>
            <p className="case-ai-question">
              What if managing complex workflows could become even more
              intuitive?
            </p>
          </div>
          <div className="case-ai-body">
            <div className="case-ai-copy">
              <p>
                As an exploration, I&apos;m interested in how AI could support
                users in understanding contracts, identifying important
                information, and navigating complex management processes.
              </p>
              <aside>
                Exploratory opportunities—not features of the original product.
              </aside>
            </div>
            <div className="case-ai-opportunities">
              <span>Potential opportunities</span>
              <ol>
                {aiOpportunities.map((opportunity, index) => (
                  <li key={opportunity} className="case-ai-opportunity">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{opportunity}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </main>

      <footer className="case-footer">
        <span>Next project</span>
        <Link to="/#work">
          Polo Themes <b>↗</b>
        </Link>
        <div>
          <span>AJAYA — Product-minded designer</span>
          <Link to="/">Back home ↑</Link>
        </div>
      </footer>
    </div>
  )
}
