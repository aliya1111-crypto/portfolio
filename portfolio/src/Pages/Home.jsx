import { Link } from "react-router-dom";
import { profile } from "../data";

export default function Home() {
  return (
    <section className="section home">
      <h1>{profile.name}</h1>
      <p className="role">{profile.role}</p>
      <p className="tagline">{profile.tagline}</p>
      <div className="home-links">
        <Link to="/about" className="btn">About Me</Link>
      </div>
    </section>
  );
}