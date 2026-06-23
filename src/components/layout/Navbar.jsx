import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import darkLogo from "../../assets/darkLogo.png";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiMapPin,
  FiZap,
  FiBookOpen,
  FiLayers,
  FiFileText,
  FiCalendar,
  FiGrid,
  FiArrowRight
} from "react-icons/fi";

const featureItems = [
  {
    name: "Guard Tour System",
    description: "NFC scanning & real-time patrols",
    href: "/features/guard-tour-system",
    icon: FiMapPin,
  },
  {
    name: "Smart Guard Dispatch",
    description: "Automated alarm routing & response",
    href: "/features/smart-guard-dispatch",
    icon: FiZap,
  },
  {
    name: "Static Security",
    description: "Visitor checks & digital logbooks",
    href: "/features/static-security",
    icon: FiBookOpen,
  },
  {
    name: "Contract Management",
    description: "Centralized SLAs & automated billing",
    href: "/features/contract-management",
    icon: FiLayers,
  },
  {
    name: "Customer Reports",
    description: "24/7 web portal & PDF logs",
    href: "/features/customer-reports",
    icon: FiFileText,
  },
  {
    name: "Task & Shift Planning",
    description: "Visual rosters & mobile clock-in",
    href: "/features/task-shift-planning",
    icon: FiCalendar,
  },
  {
    name: "SecuSync Hub",
    description: "Outsource & collaborate with partners",
    href: "/features/secusync-hub",
    icon: FiGrid,
  },
  {
    name: "Product Overview",
    description: "See all modules stacked together",
    href: "/product-overview",
    icon: FiChevronDown,
    isHighlight: true
  }
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }

  // Click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-lightcyan)] bg-white shadow-xs backdrop-blur-xs">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img src={darkLogo} alt="SecuSync Logo" className="h-11 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Features Dropdown Toggle */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 py-2 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors focus:outline-none cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Features
              <FiChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Panel */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full w-[540px] -translate-x-1/2 p-2 mt-2 rounded-2xl border border-[var(--color-lightcyan)] bg-white shadow-2xl ring-1 ring-black/5"
                >
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {featureItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`flex items-start gap-3.5 rounded-xl p-3 text-left transition-colors ${item.isHighlight
                              ? "bg-[var(--color-lightcyan)] hover:bg-[var(--color-lightcyan)]/80 text-[var(--color-primary)]"
                              : "hover:bg-slate-50"
                            }`}
                        >
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.isHighlight
                              ? "bg-[var(--color-primary)] text-[var(--color-accent)]"
                              : "bg-[var(--color-lightcyan)] text-[var(--color-primary)]"
                            }`}>
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-sm font-bold text-[var(--color-primary)]">{item.name}</p>
                            <p className="mt-0.5 text-xs text-[var(--color-caption)] leading-normal">{item.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="rounded-b-xl bg-slate-50/50 px-5 py-4 flex justify-between items-center text-xs border-t border-[var(--color-lightcyan)]">
                    <span className="text-[var(--color-caption)] font-semibold">Looking for a customized walk-through?</span>
                    <Link to="/contact" className="font-bold text-[var(--color-secondary)] hover:text-[var(--color-accentDark)] flex items-center gap-1">
                      Contact Sales <FiArrowRight />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/contact" className="text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/contact"
            className="rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-darkPrimary)] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] focus:outline-none"
            aria-label="Open Menu"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black"
            />

            {/* Menu Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[var(--color-primary)]">Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] focus:outline-none"
                  aria-label="Close Menu"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-caption)]">Features</p>
                  <div className="mt-3 space-y-3">
                    {featureItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[var(--color-lightcyan)] pt-6 space-y-4">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full rounded-full bg-[var(--color-primary)] px-4 py-2.5 text-center text-sm font-bold text-white shadow-md hover:bg-[var(--color-darkPrimary)]"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}