import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

interface CalendlyContextValue {
  isOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextValue | null>(null);

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      openCalendly: () => setIsOpen(true),
      closeCalendly: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <CalendlyContext.Provider value={value}>
      {children}
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const ctx = useContext(CalendlyContext);
  if (!ctx) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return ctx;
}
