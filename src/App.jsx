import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProductOverview from "./pages/ProductOverview";
import FeatureDetail from "./pages/FeatureDetail";
import CaseStudies from "./pages/CaseStudies";
import BlogListing from "./pages/BlogListing";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// ScrollToTop component to reset viewport scroll position on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        
        {/* Global sticky header navigation */}
        <Navbar />
        
        {/* Main page content area */}
        <main className="flex-grow">
          <Routes>
            {/* 1. Home page */}
            <Route path="/" element={<Home />} />
            
            {/* 2. Product Overview page */}
            <Route path="/product-overview" element={<ProductOverview />} />
            
            {/* 3-9. Feature Detail pages (reusable templates resolved by slug) */}
            <Route path="/features/:slug" element={<FeatureDetail />} />
            
            {/* 10. Case Studies page */}
            <Route path="/case-studies" element={<CaseStudies />} />
            
            {/* 11. Blog Listing page */}
            <Route path="/blog" element={<BlogListing />} />
            
            {/* 12. Blog Detail template page */}
            <Route path="/blog/:id" element={<BlogDetail />} />
            
            {/* 13. Contact page */}
            <Route path="/contact" element={<Contact />} />
            
            {/* 14. Privacy Policy */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            
            {/* 15. Terms of Service */}
            <Route path="/terms" element={<TermsOfService />} />
            
            {/* 16. Fallback 404 page */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global page footer links and contact info */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}