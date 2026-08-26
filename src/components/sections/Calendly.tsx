import { useEffect } from "react";
import { X } from "lucide-react";
import { useCalendly } from "../../context/CalendlyContext";

const CALENDLY_URL =
  "https://calendly.com/contact-ethervisuals/30min?hide_gdpr_banner=1&primary_color=e63910";

export default function Calendly() {
  const { isOpen, closeCalendly } = useCalendly();

  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCalendly();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeCalendly]);

  return (
    <div
      className={`calendly-overlay${isOpen ? " calendly-overlay--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div
        className="absolute -inset-25 blur-[100px]"
        style={{ background: "var(--accent-gradient)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: "#000000" }} />

      <div className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5 shrink-0">
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--text)" }}
        >
          Book a Strategy Call
        </span>
        <button
          type="button"
          onClick={closeCalendly}
          aria-label="Close"
          className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
          style={{ color: "var(--text)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <X size={20} />
        </button>
      </div>

      <div className="relative z-10 flex-1 min-h-0 px-6 lg:px-12 pb-6">
        <div
          className="calendly-inline-widget w-full h-full min-w-[320px]"
          data-url={CALENDLY_URL}
          style={{ borderRadius: "15px", overflow: "hidden" }}
        />
      </div>
    </div>
  );
}
