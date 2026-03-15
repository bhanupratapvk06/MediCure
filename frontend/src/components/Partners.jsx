import React from "react";
import { IoCall } from "react-icons/io5";
import {
  FaHospital,
  FaHeartbeat,
  FaStethoscope,
  FaUserMd,
  FaAmbulance,
  FaMedkit,
  FaPills,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const partners = [
  { name: "Apollo Hospitals", icon: <FaHospital className="text-3xl text-primary-400" /> },
  { name: "Fortis Healthcare", icon: <FaHeartbeat className="text-3xl text-rose-400" /> },
  { name: "Max Healthcare", icon: <FaStethoscope className="text-3xl text-teal-400" /> },
  { name: "Medanta", icon: <FaUserMd className="text-3xl text-primary-400" /> },
  { name: "AIIMS", icon: <FaHospital className="text-3xl text-rose-400" /> },
  { name: "Manipal", icon: <FaAmbulance className="text-3xl text-teal-400" /> },
  { name: "Narayana", icon: <FaMedkit className="text-3xl text-primary-400" /> },
  { name: "Sun Pharma", icon: <FaPills className="text-3xl text-rose-400" /> },
  { name: "Cipla", icon: <FaPills className="text-3xl text-teal-400" /> },
  { name: "Dr. Reddy's", icon: <FaStethoscope className="text-3xl text-primary-400" /> },
  { name: "Lupin", icon: <FaMedkit className="text-3xl text-rose-400" /> },
  { name: "Zydus", icon: <FaHeartbeat className="text-3xl text-teal-400" /> },
];

const OurPartners = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
            Trusted Network
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
            Our Partners
          </h2>
          <p className="mt-3 text-neutral-500 text-lg max-w-xl mx-auto">
            Partnered with India's leading hospitals and pharma companies
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-neutral-100 hover:shadow-sm hover:border-neutral-200 transition-all duration-200 gap-2"
            >
              {partner.icon}
              <span className="text-xs text-neutral-500 font-medium text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need Emergency Help?
          </h3>
          <p className="text-primary-100 mb-8 max-w-lg mx-auto">
            Our network of verified partners is ready to assist you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/new-emergency-request"
              className="inline-flex items-center justify-center px-7 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-colors"
            >
              Book Medicines
            </Link>
            <a
              href="tel:+919826389201"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              <IoCall />
              +91 98263 89201
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
