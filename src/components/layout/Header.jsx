import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Award, Menu, X, ChevronDown, FileText, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { productCategories } from '../../data/productsData';

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Applications', path: '/applications' },
    { name: 'Why SKSP', path: '/why-sksp' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Clients', path: '/clients' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="w-full z-50 sticky top-0 bg-white transition-shadow duration-300">
      {/* Top bar info banner */}
      <div className="bg-[#041A36] text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center space-x-1.5 hover:text-[#F2A900] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F2A900]" />
              <span>{companyInfo.phone}</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="hidden sm:flex items-center space-x-1.5 hover:text-[#F2A900] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#F2A900]" />
              <span>{companyInfo.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden md:flex items-center space-x-1 text-slate-300">
              <Award className="w-3.5 h-3.5 text-[#F2A900]" />
              <span>{companyInfo.iso}</span>
            </span>
            <Link to="/support" className="text-[#F2A900] hover:underline font-semibold flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Support & RFQ</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'py-2 shadow-md bg-white' : 'py-3 bg-white border-b border-slate-200'}`}>
        <div className="max-w-[90rem] mx-auto px-4 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logos/logo-full.png" 
              alt="Shree Krishna Spun Pipes Logo" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                    className="relative"
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center space-x-1 px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                          isActive ? 'text-[#062A5A] bg-blue-50 font-bold' : 'text-slate-700 hover:text-[#062A5A] hover:bg-slate-50'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-[#062A5A]" />
                    </NavLink>

                    {/* Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-xl border border-slate-100 p-4 mt-1 grid gap-2 z-50 animate-fadeIn">
                        <div className="text-xs font-bold text-[#F2A900] uppercase tracking-wider px-2 pb-1 border-b border-slate-100">
                          Product Categories
                        </div>
                        {productCategories.filter(c => c.id !== 'all').map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/products?category=${cat.id}`}
                            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#062A5A] rounded-lg transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                        <div className="pt-2 border-t border-slate-100">
                          <Link
                            to="/products"
                            className="flex items-center justify-between text-xs font-bold text-[#062A5A] hover:text-[#F2A900] px-3 py-1.5"
                          >
                            <span>Browse All 15+ Products</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                        isActive ? 'text-[#062A5A] bg-blue-50 font-bold' : 'text-slate-700 hover:text-[#062A5A] hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
              className="bg-[#F2A900] hover:bg-[#d99700] text-[#041A36] font-bold text-xs xl:text-sm px-4 py-2.5 rounded-lg shadow-md transition-all hover:shadow-lg focus:ring-2 focus:ring-[#F2A900]"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#062A5A] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[100px] z-40 bg-white border-t border-slate-200 overflow-y-auto px-4 py-6 flex flex-col justify-between shadow-2xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-semibold rounded-lg ${
                    isActive ? 'bg-[#062A5A] text-white' : 'text-slate-800 hover:bg-slate-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 mt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal && onOpenQuoteModal();
              }}
              className="w-full bg-[#F2A900] text-[#041A36] font-bold py-3 px-4 rounded-xl text-center shadow-md text-base"
            >
              Request a Quotation
            </button>

            <div className="text-xs text-slate-500 text-center space-y-1 pt-2">
              <p>Call: {companyInfo.phone}</p>
              <p>Email: {companyInfo.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
