import Header from "./components/layout/Header";
import Home from "./pages/Home";
import ContactForm from "./components/sections/ContactForm";
import { BookingFormProvider } from "./context/BookingFormContext";

function App() {
  return (
    <BookingFormProvider>
      <Header />
      <Home />
      <ContactForm />
    </BookingFormProvider>
  );
}

export default App;
