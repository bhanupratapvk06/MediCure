import React from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch, MdHome, MdLocalHospital, MdHealing } from "react-icons/md";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 font-['Inter',sans-serif] flex flex-col">
      <NavBar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Decorative floating icons */}
        <div className="absolute top-20 left-10 text-primary-200/40 animate-float">
          <MdLocalHospital className="text-6xl" />
        </div>
        <div className="absolute top-40 right-16 text-teal-200/40 animate-float" style={{ animationDelay: "1s" }}>
          <MdHealing className="text-5xl" />
        </div>
        <div className="absolute bottom-32 left-20 text-rose-200/40 animate-float" style={{ animationDelay: "2s" }}>
          <MdLocalHospital className="text-4xl" />
        </div>
        <div className="absolute bottom-20 right-24 text-primary-200/40 animate-float" style={{ animationDelay: "0.5s" }}>
          <MdHealing className="text-6xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-lg">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-teal-500 leading-none">
            404
          </h1>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full mx-auto my-6" />

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
            Page Not Found
          </h2>
          <p className="text-neutral-500 mt-3 text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <MdHome className="text-xl" />
              Go to Home
            </button>
            <button
              onClick={() => navigate("/services")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-200 hover:border-primary-300 text-neutral-700 hover:text-primary-600 font-semibold rounded-full transition-all duration-300"
            >
              <MdSearch className="text-xl" />
              Browse Services
            </button>
          </div>

          {/* Search suggestion */}
          <div className="mt-12 bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm">
            <p className="text-sm text-neutral-500 mb-3">
              Looking for something specific?
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search medicines, services..."
                className="flex-1 px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate("/medication");
                  }
                }}
              />
              <button
                onClick={() => navigate("/medication")}
                className="px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-colors"
              >
                <MdSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
