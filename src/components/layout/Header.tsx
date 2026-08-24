import { NavLink } from "react-router-dom";
import etherVisualsIcon from "../../assets/brand/ether-visuals-icon.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/our-work", label: "Our Work" },
  { to: "/results", label: "Results" },
  { to: "/our-work", label: "Book Now" },
];

export default function Header() {
  return (
    <header className="nav-header">
      <nav className="nav-inner">
        <span className="nav-logo">
          <img
            src={etherVisualsIcon}
            alt="Ether Visuals"
            className="nav-logo-icon"
          />
          Ether Visuals
        </span>
        <ul className="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  [
                    "nav-link",
                    isActive && "nav-link--active",
                    label === "Book Now" && "nav-link--cta",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <span className="nav-divider" aria-hidden="true" />
        <div className="nav-socials">
          <a
            href="#"
            className="nav-social-link"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4.2"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#"
            className="nav-social-link"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M14.5 8.5h2V5.5h-2c-2.2 0-3.5 1.4-3.5 3.5v2H9v3h2v6.5h3V14h2.2l.5-3H14v-1.6c0-.6.3-.9 1-.9Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
