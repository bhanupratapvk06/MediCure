import React, { useEffect, useState } from "react";
import { IoCall, IoArrowForward } from "react-icons/io5";
import {
  MdEmergency,
  MdShield,
  MdTimer,
  MdLocationCity,
  MdVerified,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-white">
      {/* Soft background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] rounded-full bg-teal-100/40 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-50 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Content */}
          <div
            className={`flex flex-col transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-2 bg-teal-50 border border-teal-100 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              <span className="text-teal-700 text-sm font-medium">
                Available 24/7
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-neutral-900 tracking-tight leading-[1.1]">
              Emergency Care,{" "}
              <span className="text-primary-600">Delivered Fast</span>
            </h1>

            <p className="mt-5 text-lg text-neutral-500 leading-relaxed max-w-lg">
              Connect with verified hospitals and pharmacies instantly. Get
              life-saving medicines delivered to your doorstep with our
              15-minute emergency response.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                to="/new-emergency-request"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/25"
              >
                <MdEmergency className="text-lg" />
                Get Emergency Help
                <IoArrowForward className="text-sm group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="tel:+919826389201"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-neutral-200 hover:border-neutral-300 text-neutral-700 font-semibold rounded-xl transition-all duration-200 hover:bg-neutral-50"
              >
                <IoCall className="text-lg text-primary-500" />
                +91 98263 89201
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-neutral-100">
              {[
                { icon: <MdShield className="text-primary-500" />, text: "Verified Partners" },
                { icon: <MdTimer className="text-teal-500" />, text: "15min Response" },
                { icon: <MdLocationCity className="text-primary-400" />, text: "500+ Cities" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Decorative ring */}
            <div className="absolute inset-4 border-2 border-dashed border-primary-100 rounded-full -rotate-6 scale-110" />

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-primary-50 to-teal-50 rounded-3xl p-4 shadow-xl shadow-primary-900/5">
              <img
                src="./header.png"
                className="w-full h-auto object-cover rounded-2xl"
                alt="Emergency medical care team"
              />

              {/* Floating card: Response time */}
              <div className="absolute -bottom-4 -left-2 sm:left-6 bg-white rounded-2xl shadow-lg shadow-neutral-200/50 border border-neutral-100 px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <MdTimer className="text-xl text-teal-500" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">
                    Response Time
                  </p>
                  <p className="text-sm font-bold text-neutral-800">
                    &lt; 15 minutes
                  </p>
                </div>
              </div>

              {/* Floating card: Verified */}
              <div className="absolute -top-3 -right-2 sm:right-6 bg-white rounded-2xl shadow-lg shadow-neutral-200/50 border border-neutral-100 px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <MdVerified className="text-xl text-primary-500" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">
                    Trusted By
                  </p>
                  <p className="text-sm font-bold text-neutral-800">
                    8M+ Users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
