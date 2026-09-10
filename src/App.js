import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Applications from './pages/Applications';
import WhySKSP from './pages/WhySKSP';
import Sustainability from './pages/Sustainability';
import Clients from './pages/Clients';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Support from './pages/Support';

function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState('');

  const handleOpenQuoteModal = (productTitle = '') => {
    setPrefilledProduct(productTitle);
    setQuoteModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F4F7FA] flex flex-col font-sans selection:bg-[#F2A900] selection:text-[#041A36]">
        <Header onOpenQuoteModal={handleOpenQuoteModal} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/about" element={<About onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/products" element={<Products onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/products/:slug" element={<ProductDetail onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/applications" element={<Applications onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/why-sksp" element={<WhySKSP onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/sustainability" element={<Sustainability onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/clients" element={<Clients onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/certifications" element={<Certifications onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/contact" element={<Contact selectedProductTitle={prefilledProduct} />} />
            <Route path="/support" element={<Support onOpenQuoteModal={handleOpenQuoteModal} />} />
          </Routes>
        </main>

        <Footer onOpenQuoteModal={handleOpenQuoteModal} />
        <FloatingActions onOpenQuoteModal={handleOpenQuoteModal} />

        {quoteModalOpen && (
          <QuoteModal
            prefilledProduct={prefilledProduct}
            onClose={() => setQuoteModalOpen(false)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
