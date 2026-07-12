import { certificates } from "../data";

export default function Certificates() {
  return (
    <section className="section">
      <h2>Certificates</h2>
      <div className="cert-list">
        {certificates.map((cert, i) => (
          <div className="cert-card" key={i}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer} · {cert.date}</p>
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                style={{ width: "100%", maxWidth: "420px", borderRadius: "8px", margin: "0.8rem 0" }}
              />
            )}
            {cert.link !== "#" && (
              <a href={cert.link} target="_blank" rel="noreferrer">
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}