import { useEffect, useState, type FormEvent } from "react"
import { Dialog } from "@animate-ui/react/primitives/radix-ui"
import { Fade, Fades } from "@animate-ui/react/primitives/effects/fade"
import { Magnetic } from "@animate-ui/react/primitives/effects/magnetic"
import { Tilt } from "@animate-ui/react/primitives/effects/tilt"
import { useReducedMotion } from "motion/react"
import Reveal from "../../components/Reveal"
import contractManagerImage from "../../image/contract manager.jpg"

const Arrow = () => <span aria-hidden="true">↗</span>

function ProjectVisual({ type }: { type: "product" | "visual" | "ai" }) {
  if (type === "product") {
    return (
      <div className="project-visual product-visual">
        <img
          src={contractManagerImage}
          alt="Contract Manager project interface"
        />
      </div>
    )
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
    )
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
  )
}

type ProjectProps = {
  number: string
  category: string
  title: string
  description: string
  type: "product" | "visual" | "ai"
  href?: string
}

function ProjectCard({
  number,
  category,
  title,
  description,
  type,
  href = "#contact",
}: ProjectProps) {
  const card = (
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
        <a href={href} className="text-link hover-target">
          View case study <Arrow />
        </a>
      </div>
    </article>
  )

  return type === "product" ? (
    <Tilt
      asChild
      maxTilt={4}
      perspective={1000}
      transition={{ stiffness: 350, damping: 28, mass: 0.6 }}
    >
      {card}
    </Tilt>
  ) : (
    card
  )
}

const capabilities = [
  {
    title: "Product thinking",
    description:
      "Connecting user needs with business objectives to identify meaningful product opportunities.",
  },
  {
    title: "UX research & problem-solving",
    description:
      "Understanding users, uncovering friction, and translating insights into actionable design decisions.",
  },
  {
    title: "Interaction & experience design",
    description:
      "Creating intuitive flows, thoughtful interactions, and experiences that feel natural to use.",
  },
  {
    title: "Visual design & design systems",
    description: "Building consistent, accessible, and scalable interfaces.",
  },
  {
    title: "Rapid prototyping",
    description:
      "Turning ideas into interactive experiences to explore, communicate, and validate concepts.",
  },
  {
    title: "AI-assisted design",
    description:
      "Using AI to accelerate exploration, experiment with workflows, and discover new ways to solve product problems.",
  },
]

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isNavScrolled, setIsNavScrolled] = useState(false)
  const [isNavHidden, setIsNavHidden] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const reducedMotion = useReducedMotion()
  const heroTransition = {
    duration: reducedMotion ? 0 : 0.6,
    ease: "easeOut" as const,
  }

  useEffect(() => {
    let previousScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsNavScrolled(currentScrollY > 8)

      if (currentScrollY <= 8 || currentScrollY < previousScrollY) {
        setIsNavHidden(false)
      } else if (currentScrollY > previousScrollY) {
        setIsNavHidden(true)
      }

      previousScrollY = currentScrollY
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["work", "about", "contact"]

    const updateActiveSection = () => {
      const marker = window.scrollY + 120
      let nextSection: string | null = null

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) {
          nextSection = id
        }
      })

      setActiveSection(nextSection)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const message = String(formData.get("message") ?? "")
    const subject = encodeURIComponent(`New message from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )

    window.location.href = `mailto:ajayathakur383@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell">
      <header
        className={`nav${isNavScrolled ? " is-scrolled" : ""}${
          isNavHidden ? " is-hidden" : ""
        }`}
      >
        <a
          className="wordmark hover-target"
          href="#top"
          aria-label="AJAYA — home"
        >
          AJAYA<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a
            className="hover-target"
            href="#work"
            onClick={() => setActiveSection("work")}
            aria-current={activeSection === "work" ? "page" : undefined}
          >
            Work
          </a>
          <a
            className="hover-target"
            href="#about"
            onClick={() => setActiveSection("about")}
            aria-current={activeSection === "about" ? "page" : undefined}
          >
            About
          </a>
          <a
            className="hover-target"
            href="#contact"
            onClick={() => setActiveSection("contact")}
            aria-current={activeSection === "contact" ? "page" : undefined}
          >
            Contact
          </a>
        </nav>
        <span className="availability">
          <i /> Available for projects
        </span>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="eyebrow">UI/UX DESIGNER · PRODUCT THINKER</div>
          <h1 id="hero-title">
            <Fade asChild delay={180} transition={heroTransition}>
              <span className="hero-line">I turn complex problems into</span>
            </Fade>
            <Fade asChild delay={300} transition={heroTransition}>
              <span className="hero-line">
                <em>thoughtful</em> digital products.
              </span>
            </Fade>
          </h1>
          <div className="hero-bottom">
            <Fade asChild delay={560} transition={heroTransition}>
              <p>
                I’m Ajaya Thakur — a UI/UX designer who connects user needs,
                business goals, and emerging AI capabilities to create
                meaningful product experiences.
              </p>
            </Fade>
            <div className="hero-actions">
              <Fades
                asChild
                delay={900}
                holdDelay={80}
                transition={heroTransition}
              >
                <a className="button primary hover-target" href="#work">
                  View my work <Arrow />
                </a>
                <a className="button secondary hover-target" href="#contact">
                  Let’s collaborate
                </a>
                <a
                  className="button secondary hover-target"
                  href="/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View My CV <Arrow />
                </a>
              </Fades>
            </div>
          </div>
          <span className="hero-index" aria-hidden="true">
            01
          </span>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <Reveal className="section-heading">
            <span>Selected work / 2025</span>
            <h2 id="work-title">
              Ideas made
              <br />
              <em>tangible.</em>
            </h2>
          </Reveal>
          <Reveal className="projects" delay={100}>
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
          </Reveal>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <Reveal className="section-label">02 / About</Reveal>
          <Reveal className="about-main" delay={100}>
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
          </Reveal>
          <Reveal className="principles" delay={180}>
            <div className="principle-item">
              <span>01</span>
              <h3>Understand the problem</h3>
              <p>
                I look beyond the interface to understand user behavior,
                business objectives, and the challenges that shape a product.
                Good design begins with asking the right questions.
              </p>
            </div>
            <div className="principle-item">
              <span>02</span>
              <h3>Design with intention</h3>
              <p>
                From research and information architecture to interaction design
                and prototyping, I turn complex ideas into experiences that feel
                clear, intuitive, and purposeful.
              </p>
            </div>
            <div className="principle-item">
              <span>03</span>
              <h3>Explore what's possible with AI</h3>
              <p>
                I experiment with AI-powered tools to accelerate exploration,
                challenge assumptions, generate ideas, and discover new
                possibilities for product design. I see AI as a creative partner
                - not a replacement for design thinking.
              </p>
            </div>
          </Reveal>
        </section>

        <section
          className="ai-perspective"
          aria-labelledby="ai-perspective-title"
        >
          <Reveal className="section-label">03 / Perspective</Reveal>
          <Reveal className="ai-perspective-heading" delay={100}>
            <h2 id="ai-perspective-title">
              Designing in the age of <em>AI.</em>
            </h2>
            <span className="ai-perspective-mark" aria-hidden="true">
              AI
            </span>
          </Reveal>
          <Reveal className="ai-perspective-copy" delay={180}>
            <p className="ai-perspective-lead">
              I believe the future of design is not just about creating better
              interfaces-it&apos;s about rethinking how we solve problems.
            </p>
            <div className="ai-perspective-detail">
              <p>
                AI is becoming an important part of my design practice. I use it
                to explore ideas faster, experiment with different approaches,
                and push beyond conventional solutions.
              </p>
              <p>
                From AI-assisted workflows to exploring intelligent product
                experiences, I&apos;m interested in understanding how AI can
                make products more useful, adaptive, and human-centered.
              </p>
              <p>
                My focus is not on using AI for the sake of it. It&apos;s on
                finding meaningful opportunities where human judgment and AI
                capabilities can work together to create better outcomes.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="capabilities" aria-labelledby="capabilities-title">
          <Reveal className="section-label">04 / Capabilities</Reveal>
          <Reveal delay={100}>
            <h2 id="capabilities-title">How I can help</h2>
          </Reveal>
          <Reveal delay={180}>
            <ol>
              {capabilities.map(({ title, description }, index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="capability-copy">
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                  <Arrow />
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className="playground" aria-labelledby="playground-title">
          <Reveal className="playground-copy">
            <span className="section-label">05 / AI Playground</span>
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
          </Reveal>
          <Reveal
            className="playground-grid"
            delay={160}
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
          </Reveal>
        </section>
      </main>

      <Reveal className="contact" id="contact">
        <span className="section-label">Have a project in mind?</span>
        <h2>
          Let’s make something
          <br />
          <em>worth remembering.</em>
        </h2>
        <Dialog.Root
          open={isContactModalOpen}
          onOpenChange={setIsContactModalOpen}
        >
          <Dialog.Trigger asChild>
            <Magnetic
              asChild
              strength={0.18}
              range={110}
              onlyOnHover
              disableOnTouch
              style={{ display: "inline-flex" }}
            >
              <button
                className="button primary contact-button hover-target"
                type="button"
              >
                Let&apos;s talk <Arrow />
              </button>
            </Magnetic>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="contact-modal" />
            <Dialog.Content
              className="contact-modal-dialog"
              from="bottom"
              aria-describedby="contact-modal-description"
            >
              <Dialog.Close asChild>
                <button
                  className="contact-modal-close hover-target"
                  type="button"
                  aria-label="Close contact form"
                >
                  ×
                </button>
              </Dialog.Close>
              <span className="section-label">Start a conversation</span>
              <Dialog.Title>Let&apos;s Build Together</Dialog.Title>
              <Dialog.Description id="contact-modal-description">
                Whether you&apos;re developing an AI product, scaling design
                operations, or launching an ambitious venture, I&apos;d love to
                connect.
              </Dialog.Description>
              <form onSubmit={handleContactSubmit}>
                <label>
                  Your name
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  Email Address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={3} required />
                </label>
                <button className="button primary hover-target" type="submit">
                  Send message <Arrow />
                </button>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <div className="footer-row">
          <span>Ajaya — Product-minded designer</span>
          <span>Open to global opportunities</span>
          <a className="hover-target" href="#top">
            Back to top ↑
          </a>
        </div>
      </Reveal>
    </div>
  )
}
