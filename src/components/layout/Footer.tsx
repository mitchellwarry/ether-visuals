import { Mail, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import etherVisualsIcon from "../../assets/brand/ether-visuals-icon.png";

interface Contact {
  name: string;
  role: string;
  mobile: string;
  email: string;
}

const contacts: { left: Contact; right: Contact } = {
  left: {
    name: "Jack Cudina",
    role: "Owner/Creative Director",
    mobile: "0420 811 138",
    email: "jack@ethervisuals.com.au",
  },
  right: {
    name: "Daniel Cathcart",
    role: "Owner/Videographer",
    mobile: "0416 129 549",
    email: "daniel@ethervisuals.com.au",
  },
};

function ContactBlock({
  contact,
  align,
}: {
  contact: Contact;
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col gap-2 text-center ${
        align === "left"
          ? "lg:text-left lg:items-start"
          : "lg:text-right lg:items-end"
      }`}
    >
      <p className="text-sm font-semibold tracking-tight text-accent-gradient">
        {contact.name}
      </p>
      <p
        className="text-xs uppercase tracking-widest"
        style={{ color: "var(--text)" }}
      >
        {contact.role}
      </p>
      <p
        className={`text-sm flex items-center gap-2 justify-center ${
          align === "left" ? "lg:justify-start" : "lg:justify-end"
        }`}
        style={{ color: "var(--text)" }}
      >
        <Phone size={14} color="url(#footer-icon-gradient)" />
        <a
          href={`tel:${contact.mobile.replace(/\s/g, "")}`}
          className="text-white transition-opacity duration-200 hover:opacity-70"
        >
          {contact.mobile}
        </a>
      </p>
      <p
        className={`text-sm flex items-center gap-2 justify-center ${
          align === "left" ? "lg:justify-start" : "lg:justify-end"
        }`}
        style={{ color: "var(--text)" }}
      >
        <Mail size={14} color="url(#footer-icon-gradient)" />
        <a
          href={`mailto:${contact.email}`}
          className="text-white transition-opacity duration-200 hover:opacity-70"
        >
          {contact.email}
        </a>
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "var(--border)", background: "#000000" }}
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="footer-icon-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff8c42" />
            <stop offset="100%" stopColor="#e63910" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-375 mx-auto w-full px-6 py-16 lg:px-12 2xl:px-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-16 lg:gap-8">
          <div className="order-2 lg:order-1">
            <ContactBlock contact={contacts.left} align="left" />
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center gap-6">
            <img
              src={etherVisualsIcon}
              alt="Ether Visuals"
              className="h-24 w-auto lg:h-28"
            />

            <div className="nav-socials">
              <a
                href="https://instagram.com/ether.visuals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="nav-social-link"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="nav-social-link"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>

            <p className="text-sm font-semibold tracking-tight text-white">
              Ether Visuals
            </p>
          </div>

          <div className="order-3">
            <ContactBlock contact={contacts.right} align="right" />
          </div>
        </div>

        <div
          className="mt-16 pt-6 border-t flex flex-col-reverse lg:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--text)" }}
          >
            © {new Date().getFullYear()} Ether Visuals. All rights reserved.
          </p>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--text)" }}
          >
            Sydney | Wollongong | Illawarra | NSW
          </p>
        </div>
      </div>
    </footer>
  );
}
