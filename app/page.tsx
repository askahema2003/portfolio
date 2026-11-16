import type { CSSProperties } from "react";
import { site, skills, projects, showComingSoon } from "@/data/site";

// Open external links in a new tab. rel prevents the new page from controlling this one.
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">
          {site.name}
          <span>.</span>
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">{site.title}</p>
          <h1>
            Hi, I&apos;m <em>{site.name}</em>.<br />I turn <mark>data</mark> into
            <br />
            full-stack apps.
          </h1>
          <p className="lede">{site.tagline}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#work">
              See my work
            </a>
            <a className="btn btn-ghost" href={site.resume} {...external}>
              Resume ↓
            </a>
          </div>
        </section>

        <section id="work" className="section">
          <h2>Selected work</h2>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card" style={{ "--c": p.color } as CSSProperties}>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <ul className="tags">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="links">
                  {p.live && (
                    <a href={p.live} {...external}>
                      Live ↗
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} {...external}>
                      Code ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
            {showComingSoon && (
              <article className="card soon">
                <h3>Next project</h3>
                <p>Currently building something new. Check back soon, or follow along on GitHub.</p>
                <div className="links">
                  <a href={site.github} {...external}>
                    GitHub ↗
                  </a>
                </div>
              </article>
            )}
          </div>
        </section>

        <section className="section skills">
          <h2>Toolbox</h2>
          <div className="skillgrid">
            {skills.map((g) => (
              <div key={g.group}>
                <h4>{g.group}</h4>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <h2>About</h2>
          <div>
            {site.about.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Let&apos;s talk.</h2>
          <a className="mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className="cta">
            <a className="btn btn-primary" href={site.github} {...external}>
              GitHub
            </a>
            <a className="btn btn-ghost" href={site.linkedin} {...external}>
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </>
  );
}
