import { education } from "../data.js";

export default function Education() {
  return (
    <section className="section">
      <h2>Education</h2>
      <div className="edu-list">
        {education.map((edu, i) => (
          <div className="edu-card" key={i}>
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="duration">{edu.duration}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}