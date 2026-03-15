import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const faqData = [
  {
    q: "How quickly can I get emergency medicines delivered?",
    a: "Our average response time is under 15 minutes for emergency requests in metro areas. Rural areas may take up to 45 minutes depending on location.",
  },
  {
    q: "Are all suppliers on MediCure verified?",
    a: "Yes, every supplier, pharmacy, and hospital undergoes strict verification. We verify licenses, certifications, and track records to ensure authentic medicines.",
  },
  {
    q: "Can I request rare injections that are hard to find?",
    a: "Absolutely. Our Rare Injection Assistance service collaborates with specialized hospitals and research institutions to source hard-to-find injections.",
  },
  {
    q: "Is there a subscription fee?",
    a: "Basic access is free. Premium subscriptions include priority emergency handling, dedicated support, and discounted delivery rates.",
  },
  {
    q: "How do I track my medicine order?",
    a: "Once confirmed, you'll receive real-time tracking updates via SMS and our app. See your delivery partner's location and estimated arrival time.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
            Common questions
          </h2>
          <p className="mt-3 text-neutral-500 text-lg">
            Everything you need to know about MediCure
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-neutral-100">
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between py-5 text-left"
                aria-expanded={open === index}
              >
                <span className="font-semibold text-neutral-800 pr-4">
                  {item.q}
                </span>
                <MdExpandMore
                  className={`text-xl text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-neutral-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
