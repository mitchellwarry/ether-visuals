import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Calendly from "./components/sections/Calendly";
import { CalendlyProvider } from "./context/CalendlyContext";

function App() {
  return (
    <CalendlyProvider>
      <Header />
      <Home />
      <Calendly />
    </CalendlyProvider>
  );
}

export default App;
