import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
import ContactMain from "./component/contactPage/ContactMain";
import BlogMain from "./component/blog/BlogMain";
import BlogDetails from "./component/blog/BlogDetails";
import WhatsAppChatbot from "./component/WhatsAppChatbot";
import PrivacyPolicy from "./component/PrivacyPolicy";
import AdminLogin from "./component/admin/AdminLogin";
import AdminDashboard from "./component/admin/AdminDashboard";
import ProtectedRoute from "./component/admin/ProtectedRoute";



function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      {/* Conditionally render Navbar */}
      {!isAdminRoute && <Navbar />}

      {/* Define your routes here */}
      <Routes>
        {/* Home / Landing page */}
        <Route path="/" element={<HomeMain />} />

        {/* You can add more routes later like: */}
        <Route path="/about-us" element={<AboutUsMain />} />
        <Route path="/services/residential-solar" element={<ResidentialSolarMain />} />
        <Route path="/services/Commercial-solar" element={<CommercialSolarMain />} />
        <Route path="/services/Industrial-solar" element={<IndustrialsolarMain />} />
        <Route path="/services/ground-mounted-solar" element={<Groundmountedsolar />} />
        <Route path="/project" element={<ProjectsMain />} />
        <Route path="/contact-us" element={<ContactMain />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
      
      {/* Conditionally render Footer and Chatbot */}
      {!isAdminRoute && (
        <>
          <Footer />
          <WhatsAppChatbot autoOpenDelay={4000} />
        </>
      )}
      <SpeedInsights />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
