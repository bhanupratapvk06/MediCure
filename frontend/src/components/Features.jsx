import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineSearch,
  MdOutlineVerified,
  MdOutlineUploadFile,
  MdOutlineLocationOn,
  MdOutlinePriorityHigh,
  MdOutlineMedicalServices,
} from "react-icons/md";

const Features = () => {
  const features = [
    {
      label: "Medicine Search",
      path: "/medication",
      icon: <MdOutlineSearch />,
      description: "Search critical medicines by name, category, or type.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      label: "Verified Suppliers",
      path: "/verified-suppliers",
      icon: <MdOutlineVerified />,
      description: "Strict verification for all suppliers and hospitals.",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      label: "Prescription Upload",
      path: "/upload-prescription",
      icon: <MdOutlineUploadFile />,
      description: "Upload prescriptions for quick validation.",
      gradient: "from-violet-500 to-violet-600",
    },
    {
      label: "Order Tracking",
      path: "/order-tracking",
      icon: <MdOutlineLocationOn />,
      description: "Real-time tracking from request to delivery.",
      gradient: "from-amber-500 to-amber-600",
    },
    {
      label: "Priority Emergency",
      path: "/emergency-requests",
      icon: <MdOutlinePriorityHigh />,
      description: "Flag urgent requirements for immediate action.",
      gradient: "from-rose-500 to-rose-600",
    },
    {
      label: "Rare Injections",
      path: "/rare-injections",
      icon: <MdOutlineMedicalServices />,
      description: "Hospital collaboration for hard-to-find injections.",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
            Features
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
            Everything you need
          </h2>
          <p className="mt-3 text-neutral-500 text-lg max-w-xl mx-auto">
            A complete platform for emergency healthcare and medicine delivery
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all duration-200"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white flex-shrink-0`}
              >
                {React.cloneElement(feature.icon, { className: "text-xl" })}
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                  {feature.label}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
