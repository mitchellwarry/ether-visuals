import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="#"
        className="nav-social-link"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
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
