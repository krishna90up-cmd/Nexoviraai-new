import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { SimulatorPage } from './pages/SimulatorPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <ScrollToTop />
        
        {/* Consistent Top Bar across all pages */}
        <Navbar />

        {/* Dedicated Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/simulator" element={<SimulatorPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Consistent Footer across all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
