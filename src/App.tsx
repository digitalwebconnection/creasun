import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Header";
import HomeMain from "./component/home/HomeMain";
import AboutUsMain from "./component/AboutUs/AboutUsMain";
import ProjectsMain from "./component/Projects/ProjectsMain";
import ResidentialSolarMain from "./component/service/ResidentialSolar/ResidentialSolarMain";
import CommercialSolarMain from "./component/service/CommercialSolar/CommercialSolarMain";
import IndustrialsolarMain from "./component/service/industrialsolar/IndustrialsolarMain";
import Groundmountedsolar from "./component/service/groundmountedsolar/Groundmountedsolar";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Navbar will stay on all pages */}
      <Navbar />

      {/* Define your routes here */}
      <Routes>
        {/* Home / Landing page */}
        <Route path="/" element={<HomeMain />} />

        {/* You can add more routes later like: */}
        <Route path="/about" element={<AboutUsMain />} />
        <Route path="/services/residential-solar" element={<ResidentialSolarMain />} />
        <Route path="/services/Commercial-solar" element={<CommercialSolarMain />} />
        <Route path="/services/Industrial-solar" element={<IndustrialsolarMain />} />
        <Route path="/services/ground-mounted-solar" element={<Groundmountedsolar />} />
        <Route path="/project" element={<ProjectsMain />} />
      </Routes>

      {/* Footer will stay on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
