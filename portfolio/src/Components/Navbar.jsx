import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
    { name: "Certificates", path: "/certificates" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">Portfolio</div>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}