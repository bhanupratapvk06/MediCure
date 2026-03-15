import React from "react";
import { FaBed, FaAmbulance } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaBed className="text-xl" />,
      title: "24/7 Emergency Care",
      description: "Round-the-clock medication care with our dedicated team always ready.",
      color: "bg-primary-50 text-primary-500",
    },
    {
      icon: <BsClockFill className="text-xl" />,
      title: "15 Min Response",
      description: "Average response time under 15 minutes when you need help most.",
      color: "bg-teal-50 text-teal-500",
    },
    {
      icon: <MdSupportAgent className="text-xl" />,
      title: "Always Available",
      description: "Support team available around the clock to assist you anytime.",
      color: "bg-violet-50 text-violet-500",
    },
    {
      icon: <FaAmbulance className="text-xl" />,
      title: "Pan-India Fleet",
      description: "Largest ambulance network covering 500+ cities across India.",
      color: "bg-amber-50 text-amber-500",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
              Why MediCure
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
              Built for emergencies,
              <br />
              trusted by millions
            </h2>
          </div>
          <p className="text-neutral-500 max-w-md">
            We combine technology and compassion to deliver life-saving care when
            every minute counts.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-lg hover:shadow-neutral-100 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                {feature.icon}
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
          >
            Explore all services
            <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
