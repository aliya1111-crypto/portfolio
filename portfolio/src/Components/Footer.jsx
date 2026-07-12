import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}