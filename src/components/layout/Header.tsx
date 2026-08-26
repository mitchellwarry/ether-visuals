import { useEffect, useRef, useState } from "react";
import etherVisualsIcon from "../../assets/brand/ether-visuals-icon.png";
import { useCalendly } from "../../context/CalendlyContext";

const sectionLinks = [
  { id: "home", label: "Home" },
  { id: "our-work", label: "Our Work" },
  { id: "results", label: "Results" },
];

const navLinks = [
  ...sectionLinks.map(({ id, label }) => ({
    id,
    label,
    href: `#${id}`,
    isCta: false,
  })),
  { id: "book-now", label: "Book Now", href: "#", isCta: true },
];

function NavLinksList({
  variant,
  activeId,
  onLinkClick,
}: {
  variant: "desktop" | "mobile";
  activeId: string;
  onLinkClick?: () => void;
}) {
  const { openCalendly } = useCalendly();

  return (
    <ul className={`nav-links nav-links--${variant}`}>
      {navLinks.map(({ id, label, href, isCta }) => (
        <li key={`${variant}-${id}-${label}`}>
          <a
            href={href}
            onClick={(e) => {
              if (id === "book-now") {
                e.preventDefault();
                openCalendly();
              }
              onLinkClick?.();
            }}
            className={[
              "nav-link",
              !isCta && activeId === id && "nav-link--active",
              isCta && "nav-link--cta",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span>{label}</span>
          </a>
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
  const [activeId, setActiveId] = useState("home");
  const headerRef = useRef<HTMLElement>(null);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const setNavHeight = () => {
      document.documentElement.style.setProperty(
        "--nav-height",
        `${header.offsetHeight}px`,
      );
    };

    setNavHeight();
    const resizeObserver = new ResizeObserver(setNavHeight);
    resizeObserver.observe(header);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const sections = sectionLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-header" ref={headerRef}>
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

          <NavLinksList variant="desktop" activeId={activeId} />

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
            <NavLinksList
              variant="mobile"
              activeId={activeId}
              onLinkClick={closeMenu}
            />
            <span className="nav-divider nav-divider--mobile" aria-hidden="true" />
            <NavSocials variant="mobile" />
          </div>
        </div>
      </nav>
    </header>
  );
}
