import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Header";
import HomeMain from "./component/home/HomeMain";
import AboutUsMain from "./component/AboutUs/AboutUsMain";

function App() {
  return (
    <Router>
      {/* Navbar will stay on all pages */}
      <Navbar />

      {/* Define your routes here */}
      <Routes>
        {/* Home / Landing page */}
        <Route path="/" element={<HomeMain />} />

        {/* You can add more routes later like: */}
        <Route path="/about" element={<AboutUsMain/>} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
      </Routes>

      {/* Footer will stay on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
