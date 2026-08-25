import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { useBookingForm } from "../../context/BookingFormContext";

type ChoiceOption = {
  letter: string;
  label: string;
};

type ChoiceStep = {
  type: "choice";
  headline: string;
  subtext: string;
  options: ChoiceOption[];
};

type TextStep = {
  type: "text";
  headline: string;
  subtext: string;
  placeholder: string;
};

type DetailsField = {
  key: string;
  label: string;
  placeholder: string;
  inputType: "text" | "email" | "tel";
};

type DetailsStep = {
  type: "details";
  headline: string;
  subtext: string;
  fields: DetailsField[];
};

type Step = ChoiceStep | TextStep | DetailsStep;

const steps: Step[] = [
  {
    type: "choice",
    headline: "Lorem ipsum dolor sit amet consectetur?",
    subtext:
      "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.",
    options: [
      { letter: "A", label: "Lorem ipsum dolor sit" },
      { letter: "B", label: "Consectetur adipiscing elit" },
      {
        letter: "C",
        label:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      { letter: "D", label: "Ut enim ad minim veniam" },
      { letter: "E", label: "Quis nostrud exercitation ullamco" },
      { letter: "F", label: "Other" },
    ],
  },
  {
    type: "choice",
    headline: "Ut enim ad minim veniam quis nostrud?",
    subtext: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    options: [
      { letter: "A", label: "Under lorem ipsum" },
      { letter: "B", label: "Lorem to ipsum dolor" },
      { letter: "C", label: "Ipsum to dolor sit" },
      { letter: "D", label: "Dolor to sit amet" },
      { letter: "E", label: "Sit amet+" },
    ],
  },
  {
    type: "choice",
    headline: "Duis aute irure dolor in reprehenderit?",
    subtext:
      "In voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    options: [
      { letter: "A", label: "Excepteur sint occaecat" },
      { letter: "B", label: "Cupidatat non proident" },
      { letter: "C", label: "Sunt in culpa qui officia" },
      { letter: "D", label: "Deserunt mollit anim id" },
    ],
  },
  {
    type: "text",
    headline: "Quis autem vel eum iure reprehenderit?",
    subtext:
      "Qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    placeholder: "Type your answer here...",
  },
  {
    type: "details",
    headline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtext: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fields: [
      { key: "firstName", label: "First name", placeholder: "Jane", inputType: "text" },
      { key: "lastName", label: "Last name", placeholder: "Smith", inputType: "text" },
      { key: "phone", label: "Phone number", placeholder: "0412 345 678", inputType: "tel" },
      { key: "email", label: "Email", placeholder: "name@example.com", inputType: "email" },
      { key: "company", label: "Company", placeholder: "Acme Corporation", inputType: "text" },
    ],
  },
];

const TOTAL_STEPS = steps.length;

type Answers = Record<number, string | Record<string, string>>;

function StepBadge({ index }: { index: number }) {
  return (
    <span
      className="flex items-center justify-center w-7 h-7 shrink-0 rounded-md text-xs font-bold text-white"
      style={{ background: "var(--accent-gradient)" }}
      aria-hidden="true"
    >
      {index + 1}
    </span>
  );
}

function ContinueButton({
  label,
  disabled,
}: {
  label: string;
  disabled: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-[1.5px] rounded-sm inline-block transition-opacity duration-300"
      style={{
        background: "var(--accent-gradient)",
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <button
        type="submit"
        disabled={disabled}
        className="flex items-center gap-3 px-6 py-3 text-sm tracking-widest uppercase rounded-sm transition-colors duration-300 disabled:cursor-not-allowed"
        style={{
          background: hovered && !disabled ? "black" : "var(--accent-gradient)",
          color: hovered && !disabled ? "var(--accent-highlight)" : "white",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
        <ArrowRight
          size={16}
          className="transition-transform duration-300"
          style={{ transform: hovered && !disabled ? "translateX(5px)" : "translateX(0)" }}
        />
      </button>
    </div>
  );
}

export default function ContactForm() {
  const { isOpen, closeForm } = useBookingForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [answers, setAnswers] = useState<Answers>({});
  const [isComplete, setIsComplete] = useState(false);
  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") closeForm();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeForm]);

  useEffect(() => {
    if (isOpen) return;
    const timeout = setTimeout(() => {
      setCurrentStep(0);
      setDirection("forward");
      setAnswers({});
      setIsComplete(false);
    }, 600);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  const step = steps[currentStep];
  const progress = isComplete
    ? 100
    : Math.round((currentStep / TOTAL_STEPS) * 100);

  const currentAnswer = answers[currentStep];

  const canContinue = (() => {
    if (!step) return false;
    if (step.type === "choice") return typeof currentAnswer === "string";
    if (step.type === "text")
      return typeof currentAnswer === "string" && currentAnswer.trim().length > 0;
    if (step.type === "details") {
      const details = (currentAnswer as Record<string, string>) ?? {};
      return step.fields.every((field) => (details[field.key] ?? "").trim().length > 0);
    }
    return false;
  })();

  const goForward = () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setDirection("forward");
      setCurrentStep((s) => s + 1);
    } else {
      setIsComplete(true);
    }
  };

  const goBack = () => {
    setDirection("back");
    if (isComplete) {
      setIsComplete(false);
      return;
    }
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (canContinue) goForward();
  };

  const selectChoice = (letter: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: letter }));
  };

  const handleChoiceKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (step.type !== "choice") return;
    const key = e.key.toUpperCase();
    const match = step.options.find((o) => o.letter === key);
    if (match) selectChoice(match.letter);
  };

  const updateDetail = (key: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: {
        ...((prev[currentStep] as Record<string, string>) ?? {}),
        [key]: value,
      },
    }));
  };

  return (
    <div
      className={`booking-form-overlay${isOpen ? " booking-form-overlay--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="absolute -inset-25 blur-[100px]" style={{ background: "var(--accent-gradient)" }} aria-hidden="true" />
      <div className="absolute inset-0" style={{ background: "#000000" }} />

      <div className="booking-form-progress-track relative z-10">
        <div className="booking-form-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5">
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
          {isComplete ? "Complete" : `Step ${currentStep + 1} of ${TOTAL_STEPS}`}
        </span>
        <button
          type="button"
          onClick={closeForm}
          aria-label="Close form"
          className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
          style={{ color: "var(--text)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <X size={20} />
        </button>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12 pb-16 overflow-y-auto">
        {isComplete ? (
          <div
            key="complete"
            className={`booking-step--${direction} flex flex-col items-center text-center gap-6 max-w-xl`}
          >
            <span
              className="flex items-center justify-center w-16 h-16 rounded-full"
              style={{ background: "var(--accent-gradient)" }}
            >
              <Check size={28} className="text-white" />
            </span>
            <h2 className="text-2xl lg:text-3xl font-semibold" style={{ color: "var(--text-h)" }}>
              Thanks — lorem ipsum dolor sit amet.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
              Consectetur adipiscing elit. We'll be in touch shortly to book your call.
            </p>
            <button
              type="button"
              onClick={closeForm}
              className="mt-2 text-sm uppercase tracking-widest underline underline-offset-4"
              style={{ color: "var(--text-h)" }}
            >
              Close
            </button>
          </div>
        ) : (
          <form
            key={currentStep}
            onSubmit={handleSubmit}
            onKeyDown={step.type === "choice" ? handleChoiceKeyDown : undefined}
            className={`booking-step--${direction} w-full max-w-2xl flex flex-col gap-8`}
          >
            <div className="flex items-start gap-4 text-left">
              <StepBadge index={currentStep} />
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl lg:text-3xl font-semibold leading-snug" style={{ color: "var(--text-h)" }}>
                  {step.headline}
                  <span style={{ color: "var(--accent-highlight)" }}>*</span>
                </h2>
                <p className="text-sm lg:text-base" style={{ color: "var(--text)" }}>
                  {step.subtext}
                </p>
              </div>
            </div>

            {step.type === "choice" && (
              <div className="flex flex-col gap-2.5">
                {step.options.map((option) => {
                  const selected = currentAnswer === option.letter;
                  return (
                    <button
                      type="button"
                      key={option.letter}
                      onClick={() => selectChoice(option.letter)}
                      className={`booking-option flex items-start gap-3 text-left px-4 py-3.5 rounded-lg border ${
                        selected ? "booking-option--selected" : ""
                      }`}
                      style={{
                        borderColor: selected ? "var(--accent-highlight)" : "var(--border)",
                      }}
                    >
                      <span
                        className="flex items-center justify-center w-6 h-6 shrink-0 rounded text-[11px] font-bold"
                        style={{
                          background: selected ? "var(--accent-gradient)" : "rgba(255,255,255,0.06)",
                          color: selected ? "white" : "var(--text)",
                        }}
                      >
                        {option.letter}
                      </span>
                      <span className="text-sm lg:text-base" style={{ color: "var(--text-h)" }}>
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {step.type === "text" && (
              <input
                ref={textInputRef}
                type="text"
                autoFocus
                value={(currentAnswer as string) ?? ""}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [currentStep]: e.target.value }))
                }
                placeholder={step.placeholder}
                className="booking-input w-full text-xl lg:text-2xl py-3"
              />
            )}

            {step.type === "details" && (
              <div className="flex flex-col gap-6">
                {step.fields.map((field) => (
                  <label key={field.key} className="flex flex-col gap-2 text-left">
                    <span className="text-sm" style={{ color: "var(--text-h)" }}>
                      {field.label}
                      <span style={{ color: "var(--accent-highlight)" }}>*</span>
                    </span>
                    <input
                      type={field.inputType}
                      value={((currentAnswer as Record<string, string>) ?? {})[field.key] ?? ""}
                      onChange={(e) => updateDetail(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="booking-input w-full text-base py-2"
                    />
                  </label>
                ))}
              </div>
            )}

            <div className="flex items-center gap-6">
              <ContinueButton
                label={currentStep === TOTAL_STEPS - 1 ? "Submit" : "OK"}
                disabled={!canContinue}
              />
              {(currentStep > 0 || isComplete) && (
                <button
                  type="button"
                  onClick={goBack}
                  className="flex items-center gap-2 text-sm uppercase tracking-widest transition-colors duration-200"
                  style={{ color: "var(--text)" }}
                >
                  <ArrowLeft size={14} />
                  Back
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
