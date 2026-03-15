import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineLocationOn,
  MdOutlineMedicalServices,
  MdOutlinePriorityHigh,
  MdOutlineSearch,
  MdOutlineUploadFile,
  MdOutlineVerified,
  MdSearch,
  MdCheck,
} from "react-icons/md";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const services = [
  {
    label: "Easy Medicine Search",
    path: "/medication",
    icon: <MdOutlineSearch className="text-2xl" />,
    description:
      "Search for critical medicines and injections by name, category, or type.",
    number: "01",
  },
  {
    label: "Verified Suppliers & Hospitals",
    path: "/verified-suppliers",
    icon: <MdOutlineVerified className="text-2xl" />,
    description:
      "Ensures authenticity with strict verification processes for suppliers and hospitals.",
    number: "02",
  },
  {
    label: "Secure Prescription Upload",
    path: "/upload-prescription",
    icon: <MdOutlineUploadFile className="text-2xl" />,
    description:
      "Upload prescriptions for validation to ensure proper usage and compliance.",
    number: "03",
  },
  {
    label: "Priority-based Emergency Handling",
    path: "/emergency-requests",
    icon: <MdOutlinePriorityHigh className="text-2xl" />,
    description:
      "Flag urgent requirements to notify verified suppliers immediately.",
    number: "04",
  },
  {
    label: "Rare Injection Assistance",
    path: "/rare-injections",
    icon: <MdOutlineMedicalServices className="text-2xl" />,
    description:
      "Dedicated section for rare injections with hospital collaboration and approval.",
    number: "05",
  },
];

const comparisonFeatures = [
  "24/7 Emergency Response",
  "15-Minute Average Delivery",
  "Verified Suppliers Only",
  "Real-time Order Tracking",
  "Rare Medicine Sourcing",
  "Secure Prescription Handling",
];

const Services = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter(
    (s) =>
      s.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-50 font-['Inter',sans-serif]">
      <NavBar />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-teal-600" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Comprehensive{" "}
            <span className="text-gradient-white">Healthcare Services</span>
          </h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            At MediCure, we specialize in connecting you with rare medicines and
            emergency healthcare services when you need them most.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto px-4 -mt-6 relative z-20">
        <div className="relative">
          <MdSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for services..."
            className="w-full pl-13 pr-6 py-4 bg-white border border-neutral-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all"
          />
        </div>
      </div>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.path)}
              className="group bg-white rounded-2xl border border-neutral-100 p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-5">
                {/* Number + Icon */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-primary-400">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {service.label}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <MdOutlineSearch className="text-5xl text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500">No services found matching "{searchQuery}"</p>
          </div>
        )}
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-teal-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
            Why Choose Our Services?
          </h2>
          <p className="text-primary-200 mb-10">
            Healthcare delivery redefined with speed, trust, and technology
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {comparisonFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <MdCheck className="text-teal-400 text-lg" />
                </div>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
