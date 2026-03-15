import React from "react";
import { MdArrowForward, MdCalendarToday } from "react-icons/md";

const newsData = [
  {
    date: "NOV 12, 2024",
    category: "5G Healthcare",
    title: "Medulance on 5G for healthcare and use cases",
    description:
      "Pranav Bajaj discusses the future of 5G in emergency healthcare services.",
    categoryColor: "bg-teal-50 text-teal-600",
  },
  {
    date: "JUL 20, 2024",
    category: "EMS",
    title: "How Waterlogging Affects Emergency Medical Services",
    description:
      "Flooded roads and waterlogged areas impede ambulance operations.",
    categoryColor: "bg-amber-50 text-amber-600",
  },
  {
    date: "NOV 1, 2024",
    category: "Startup",
    title: "Building a Rs. 200 Crore 'Uber for Ambulances'",
    description:
      "How Pranav Bajaj built one of India's largest emergency platforms.",
    categoryColor: "bg-violet-50 text-violet-600",
  },
  {
    date: "OCT 1, 2024",
    category: "AI & Tech",
    title: "5G & AI to Transform Healthcare in India",
    description:
      "Transmitting patient data from ambulances to emergency rooms can save lives.",
    categoryColor: "bg-primary-50 text-primary-600",
  },
];

const MedNews = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
              News & Insights
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
              Latest updates
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm">
            Stay informed with the latest in healthcare and emergency services
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {newsData.map((news, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl border border-neutral-100 p-5 flex flex-col hover:shadow-md hover:border-neutral-200 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg ${news.categoryColor}`}
                >
                  {news.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-400">
                  <MdCalendarToday className="text-xs" />
                  {news.date}
                </span>
              </div>

              <h3 className="font-bold text-neutral-900 text-sm leading-snug mb-2 group-hover:text-primary-600 transition-colors">
                {news.title}
              </h3>

              <p className="text-xs text-neutral-500 leading-relaxed flex-grow">
                {news.description}
              </p>

              <div className="mt-4 pt-3 border-t border-neutral-50">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  Read more
                  <MdArrowForward className="text-sm" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedNews;
