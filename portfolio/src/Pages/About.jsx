import { profile } from "../data.js";

export default function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <h3>{profile.name}</h3>
        <p className="role">{profile.role}</p>
        <p>{profile.about}</p>
        <div className="links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}