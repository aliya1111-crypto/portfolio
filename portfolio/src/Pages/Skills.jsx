import { skills } from "../data.js";

export default function Skills() {
  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <span className="skill-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}