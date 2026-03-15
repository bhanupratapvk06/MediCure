import React from "react";
import { MdSearch, MdHandshake, MdLocalShipping } from "react-icons/md";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MdSearch className="text-2xl" />,
      title: "Search",
      description: "Find critical medicines and rare injections from our verified network.",
      color: "bg-primary-500",
      lightColor: "bg-primary-50 text-primary-600",
    },
    {
      icon: <MdHandshake className="text-2xl" />,
      title: "Connect",
      description: "Get matched with certified hospitals and pharmacies near you.",
      color: "bg-teal-500",
      lightColor: "bg-teal-50 text-teal-600",
    },
    {
      icon: <MdLocalShipping className="text-2xl" />,
      title: "Receive",
      description: "Track your order in real-time and get medicines delivered to your door.",
      color: "bg-primary-600",
      lightColor: "bg-primary-50 text-primary-600",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
            Simple Process
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-neutral-500 text-lg max-w-xl mx-auto">
            Get emergency medicines in three easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-[2px] bg-neutral-200" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center relative z-10"
            >
              {/* Step number + icon */}
              <div className="relative mb-5">
                <div
                  className={`w-20 h-20 rounded-2xl ${step.lightColor} flex items-center justify-center shadow-sm`}
                >
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-500 max-w-[220px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
