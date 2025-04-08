import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home, About, Projects, Contact } from "./pages";

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <main className="relative z-10">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
};

export default App;
