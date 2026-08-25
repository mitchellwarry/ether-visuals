import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

interface BookingFormContextValue {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const BookingFormContext = createContext<BookingFormContextValue | null>(null);

export function BookingFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      openForm: () => setIsOpen(true),
      closeForm: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <BookingFormContext.Provider value={value}>
      {children}
    </BookingFormContext.Provider>
  );
}

export function useBookingForm() {
  const ctx = useContext(BookingFormContext);
  if (!ctx) {
    throw new Error("useBookingForm must be used within a BookingFormProvider");
  }
  return ctx;
}
