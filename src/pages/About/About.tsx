import { Fade } from "@animate-ui/react/primitives/effects/fade"
import { Dialog } from "@animate-ui/react/primitives/radix-ui"
import { Link } from "react-router"
import { useState, type FormEvent } from "react"
import Reveal from "../../components/Reveal"
import "./About.css"
import "../../styles/case-shared.css"

const aboutTransition = {
  duration: 0.6,
  ease: "easeOut" as const,
}

const capabilities = [
  [
    "01",
    "Product thinking",
    "Connecting user needs, business context, and technical reality.",
  ],
  [
    "02",
    "Design craft",
    "Turning complex systems into clear, considered digital experiences.",
  ],
  [
    "03",
    "Collaboration",
    "Working closely with stakeholders, product teams, and developers.",
  ],
]

function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={`about-photo ${className}`}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <span>Personal photo</span>
      <strong>{label}</strong>
      <small>Replace with AJAYA’s photo</small>
    </div>
  )
}

export default function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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
    <div className="about-page">
      <header className="case-nav">
        <Link
          className="wordmark hover-target"
          to="/"
          aria-label="AJAYA — home"
        >
          AJAYA<span>.</span>
        </Link>
        <nav aria-label="About page navigation">
          <Link className="hover-target" to="/#work">
            Work
          </Link>
          <Link className="hover-target" to="/about" aria-current="page">
            About
          </Link>
          <Link className="hover-target" to="/#contact">
            Contact
          </Link>
        </nav>
        <span>About / AJAYA</span>
      </header>

      <main>
        <Reveal as="section" className="about-hero">
          <div className="about-hero-label">
            Designer · Engineer · Business thinker
          </div>
          <h1>
            <Fade asChild delay={150} transition={aboutTransition}>
              <span className="about-hero-line">
                I design with <em>curiosity,</em>
              </span>
            </Fade>
            <br />
            <Fade asChild delay={300} transition={aboutTransition}>
              <span className="about-hero-line">clarity, and intent.</span>
            </Fade>
          </h1>
          <Fade asChild delay={520} transition={aboutTransition}>
            <p>
              I’m AJAYA, a UI/UX designer who brings together computer
              engineering, business understanding, and design craft to shape
              meaningful digital products.
            </p>
          </Fade>
          <div className="about-portrait-wrap">
            <Fade
              className="about-portrait-motion"
              delay={650}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={aboutTransition}
            >
              <PhotoPlaceholder
                label="Primary portrait"
                className="about-portrait"
              />
            </Fade>
            <span className="portrait-note">
              Based anywhere · Working globally
            </span>
          </div>
          <span className="about-hero-number" aria-hidden="true">
            02
          </span>
        </Reveal>

        <Reveal as="section" className="about-story" delay={100}>
          <div className="case-section-label">My story / 01</div>
          <div className="about-story-copy">
            <h2>
              Three perspectives.
              <br />
              One design practice.
            </h2>
            <p className="story-lead">
              My path into design began with understanding how things work.
            </p>
            <p>
              Computer engineering gave me a systems mindset and an appreciation
              for technical constraints. Business education helped me understand
              the decisions, priorities, and value behind a product. UI/UX
              design became the space where those perspectives could work
              together.
            </p>
            <p>
              Today, I approach projects by looking beyond the interface. I ask
              what problem needs to be solved, who the experience is for, how it
              fits into a wider system, and what will make it useful in
              practice.
            </p>
          </div>
          <div className="story-side-note">
            <span>My perspective</span>
            <strong>
              Understand deeply.
              <br />
              Design clearly.
              <br />
              Build thoughtfully.
            </strong>
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="about-gallery"
          aria-label="Personal photo gallery"
          delay={120}
        >
          <PhotoPlaceholder label="Working process" className="photo-wide" />
          <div className="gallery-caption">
            <span>Behind the work</span>
            <p>
              The best ideas usually begin with a question, a rough sketch, and
              the willingness to look at the problem from another angle.
            </p>
          </div>
          <PhotoPlaceholder label="Candid portrait" className="photo-tall" />
        </Reveal>

        <Reveal as="section" className="about-approach" delay={140}>
          <div className="case-section-label">How I work / 02</div>
          <h2>
            Thoughtful about the problem.
            <br />
            <em>Precise about the details.</em>
          </h2>
          <div className="approach-grid">
            {capabilities.map(([number, title, description]) => (
              <article key={number} className="approach-item">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="about-belief" delay={160}>
          <span className="case-section-label">What I believe / 03</span>
          <blockquote>
            Good design should make complexity feel <em>understandable</em> —
            not invisible.
          </blockquote>
          <p>
            I care about experiences that respect people’s time, communicate
            clearly, and balance usability with a distinctive visual point of
            view.
          </p>
        </Reveal>

        <Reveal as="section" className="about-next" delay={180}>
          <span className="case-section-label">Let’s work together</span>
          <h2>
            Have a problem worth
            <br />
            <em>thinking through?</em>
          </h2>
          <div className="about-next-copy">
            <p>
              I&apos;m always interested in meaningful challenges, thoughtful
              collaborations, and ideas that push the boundaries of what&apos;s
              possible.
            </p>
            <p>
              Whether you&apos;re building a product, exploring AI, or solving a
              complex problem, let&apos;s make something that matters.
            </p>
          </div>
          <Dialog.Root
            open={isContactModalOpen}
            onOpenChange={setIsContactModalOpen}
          >
            <div className="about-next-actions">
              <Dialog.Trigger asChild>
                <button className="button primary hover-target" type="button">
                  Start a conversation <span aria-hidden="true">↗</span>
                </button>
              </Dialog.Trigger>
              <a
                className="button secondary hover-target"
                href="/demo-cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View My CV <span aria-hidden="true">↗</span>
              </a>
            </div>
            <Dialog.Portal>
              <Dialog.Overlay className="contact-modal" />
              <Dialog.Content
                className="contact-modal-dialog"
                from="bottom"
                aria-describedby="about-contact-modal-description"
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
                <Dialog.Description id="about-contact-modal-description">
                  Whether you&apos;re developing an AI product, scaling design
                  operations, or launching an ambitious venture, I&apos;d love
                  to connect.
                </Dialog.Description>
                <form onSubmit={handleContactSubmit}>
                  <label>
                    Your name
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                    />
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
                    Send message <span aria-hidden="true">↗</span>
                  </button>
                </form>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </Reveal>
      </main>

      <footer className="about-footer">
        <span>AJAYA — Product-minded designer</span>
        <Link className="hover-target" to="/">
          Back home ↑
        </Link>
      </footer>
    </div>
  )
}
