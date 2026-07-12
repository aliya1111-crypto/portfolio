import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-tags">
              {proj.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}