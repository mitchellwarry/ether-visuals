import { useState } from "react";
import { NavLink } from "react-router-dom";
import etherVisualsIcon from "../../assets/brand/ether-visuals-icon.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/our-work", label: "Our Work" },
  { to: "/results", label: "Results" },
  { to: "/our-work", label: "Book Now" },
];

function NavLinksList({
  variant,
  onLinkClick,
}: {
  variant: "desktop" | "mobile";
  onLinkClick?: () => void;
}) {
  return (
    <ul className={`nav-links nav-links--${variant}`}>
      {navLinks.map(({ to, label }) => (
        <li key={`${variant}-${to}-${label}`}>
          <NavLink
            to={to}
            end={to === "/"}
            onClick={onLinkClick}
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
  );
}

function NavSocials({ variant }: { variant: "desktop" | "mobile" }) {
  return (
    <div className={`nav-socials nav-socials--${variant}`}>
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
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="nav-header">
      <nav className={`nav-inner${isOpen ? " nav-inner--open" : ""}`}>
        <div className="nav-top-row">
          <span className="nav-logo">
            <img
              src={etherVisualsIcon}
              alt="Ether Visuals"
              className="nav-logo-icon"
            />
            Ether Visuals
          </span>

          <NavLinksList variant="desktop" />

          <span className="nav-divider nav-divider--desktop" aria-hidden="true" />
          <NavSocials variant="desktop" />

          <button
            type="button"
            className="nav-hamburger"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="nav-hamburger-line" />
            <span className="nav-hamburger-line" />
            <span className="nav-hamburger-line" />
          </button>
        </div>

        <div className="nav-mobile-panel">
          <div className="nav-mobile-panel-inner">
            <NavLinksList variant="mobile" onLinkClick={closeMenu} />
            <span className="nav-divider nav-divider--mobile" aria-hidden="true" />
            <NavSocials variant="mobile" />
          </div>
        </div>
      </nav>
    </header>
  );
}
