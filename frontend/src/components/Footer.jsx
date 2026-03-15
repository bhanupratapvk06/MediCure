import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdKeyboardArrowUp, MdFavorite } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-1.5 mb-4">
              <MdFavorite className="text-xl text-primary-500" />
              <span className="text-lg font-extrabold tracking-tight">
                <span className="text-neutral-900">Medi</span>
                <span className="text-primary-500">Cure</span>
              </span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5">
              Your trusted partner in emergency healthcare.
            </p>
            <div className="flex gap-2">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-white border border-neutral-200 hover:border-primary-200 hover:bg-primary-50 flex items-center justify-center text-neutral-400 hover:text-primary-500 transition-all"
                  >
                    <Icon className="text-xs" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-neutral-500 hover:text-primary-600 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-neutral-500 text-sm">
                <IoMailOutline className="text-primary-500" />
                contact@medicure.com
              </li>
              <li className="flex items-center gap-2 text-neutral-500 text-sm">
                <IoCallOutline className="text-primary-500" />
                +91 98263 89201
              </li>
              <li className="flex items-center gap-2 text-neutral-500 text-sm">
                <IoLocationOutline className="text-primary-500" />
                Wellness City
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              Newsletter
            </h3>
            <p className="text-neutral-500 text-sm mb-4">
              Get healthcare tips and updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white border border-neutral-200 rounded-l-lg text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                required
              />
              <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-r-lg text-sm font-medium text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <p className="text-neutral-400 text-xs">
            &copy; {new Date().getFullYear()} MediCure
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-neutral-400 hover:text-primary-500 text-xs transition-colors"
          >
            Back to top
            <MdKeyboardArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
