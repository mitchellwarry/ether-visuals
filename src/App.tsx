import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Results from "./pages/Results";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
