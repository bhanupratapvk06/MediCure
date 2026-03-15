import React, { useState, useEffect, useRef } from "react";
import {
  MdPeople,
  MdLocationCity,
  MdLocalShipping,
  MdHealthAndSafety,
  MdStar,
} from "react-icons/md";

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Insights = () => {
  const stats = [
    {
      value: 800,
      suffix: "K+",
      label: "Lives Assisted",
      icon: <MdPeople />,
    },
    {
      value: 500,
      suffix: "+",
      label: "Cities",
      icon: <MdLocationCity />,
    },
    {
      value: 15,
      suffix: "K+",
      label: "Fleet Size",
      icon: <MdLocalShipping />,
    },
    {
      value: 200,
      suffix: "K+",
      label: "COVID Patients",
      icon: <MdHealthAndSafety />,
    },
    {
      value: 8,
      suffix: "M+",
      label: "Subscribers",
      icon: <MdStar />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
            Our Impact
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
            Numbers that speak
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-neutral-50 border border-neutral-100 text-center hover:bg-primary-600 hover:border-primary-600 transition-all duration-300"
            >
              <div className="text-2xl text-primary-500 mb-3 group-hover:text-white/80 transition-colors">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-neutral-900 group-hover:text-white transition-colors">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-neutral-500 font-medium mt-1 group-hover:text-white/70 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Response time badge */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-50 border border-teal-100 rounded-full">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm text-teal-700 font-medium">
              Average Response Time:{" "}
              <span className="font-bold">Less than 15 minutes</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
