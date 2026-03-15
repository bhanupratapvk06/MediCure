import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { MdEmergency, MdFavorite } from "react-icons/md";
import Sidebar from "./Sidebar";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navTabs = [
    { label: "Home", path: "/", id: "nav-home" },
    { label: "Services", path: "/services", id: "nav-services" },
    { label: "About", path: "/about", id: "nav-about" },
    { label: "Contact", path: "/contact", id: "nav-contact" },
  ];

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const currentTab = navTabs.findIndex((tab) => tab.path === location.pathname);
    setActiveTab(currentTab !== -1 ? currentTab : 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100"
            : "bg-white"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" aria-label="Home" className="flex-shrink-0 flex items-center gap-1.5">
            <MdFavorite className="text-2xl text-primary-500" />
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-neutral-900">Medi</span>
              <span className="text-primary-500">Cure</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-1">
            {navTabs.map((tab, index) => (
              <Link
                key={tab.id}
                to={tab.path}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === index
                    ? "text-primary-600 bg-primary-50"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
                aria-current={activeTab === index ? "page" : undefined}
              >
                {tab.label}
              </Link>
            ))}

            <Link
              to="/new-emergency-request"
              className="ml-3 flex items-center gap-1.5 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <MdEmergency className="text-base" />
              Emergency
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="sm:hidden p-2 rounded-lg hover:bg-neutral-50 transition-colors"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? (
              <HiX className="text-neutral-600 text-xl" />
            ) : (
              <HiOutlineMenu className="text-neutral-600 text-xl" />
            )}
          </button>
        </div>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navTabs={navTabs}
      />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 sm:hidden z-40"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default NavBar;
