import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdEmergency, MdFavorite } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose, activeTab, setActiveTab, navTabs }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-full bg-white text-neutral-800 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 sm:hidden`}
      aria-hidden={!isOpen}
    >
      <div className="relative flex flex-col h-full p-6">
        {/* Close Icon */}
        <button
          aria-label="Close Sidebar"
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 text-neutral-500 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
        >
          <AiOutlineClose className="text-xl" />
        </button>

        {/* Logo */}
        <div className="flex-shrink-0 mb-4">
          <Link to="/" onClick={onClose} aria-label="Home" className="flex items-center gap-1.5">
            <MdFavorite className="text-2xl text-primary-500" />
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-neutral-900">Medi</span>
              <span className="text-primary-500">Cure</span>
            </span>
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-6" />

        {/* Navigation Items */}
        <div className="flex flex-col flex-grow gap-1">
          {navTabs.map((tab, index) => (
            <Link
              key={tab.id}
              to={tab.path}
              onClick={() => {
                setActiveTab(index);
                onClose();
              }}
              className={`stagger-item text-base font-medium px-5 py-3.5 rounded-xl w-full transition-all duration-200 ${
                activeTab === index
                  ? "bg-primary-50 text-primary-600 border border-primary-100"
                  : "text-neutral-600 hover:bg-neutral-50"
              }`}
              aria-current={activeTab === index ? "page" : undefined}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-auto space-y-3 pb-4">
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

          {/* Emergency button */}
          <Link
            to="/new-emergency-request"
            onClick={onClose}
            className="stagger-item flex items-center justify-center gap-2 w-full py-3.5 bg-error-500 hover:bg-error-600 text-white font-semibold rounded-xl transition-all duration-200"
          >
            <MdEmergency className="text-xl" />
            Emergency Request
          </Link>

          {/* Call button */}
          <a
            href="tel:+919826389201"
            className="stagger-item flex items-center justify-center gap-2 w-full py-3 bg-primary-50 text-primary-600 font-medium rounded-xl transition-all duration-200 hover:bg-primary-100"
          >
            <IoCall className="text-lg" />
            +91 98263 89201
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
