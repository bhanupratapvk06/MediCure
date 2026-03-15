import React from "react";
import {
  MdHealthAndSafety,
  MdSpeed,
  MdDiversity3,
  MdEco,
  MdVerified,
  MdFlag,
  MdPeople,
  MdTimeline,
} from "react-icons/md";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const values = [
  {
    icon: <MdHealthAndSafety className="text-2xl" />,
    title: "Patient First",
    description: "Every decision we make puts patient well-being at the center.",
  },
  {
    icon: <MdSpeed className="text-2xl" />,
    title: "Speed & Reliability",
    description: "15-minute response time backed by cutting-edge logistics.",
  },
  {
    icon: <MdDiversity3 className="text-2xl" />,
    title: "Inclusivity",
    description: "Healthcare access for everyone, regardless of location or income.",
  },
  {
    icon: <MdEco className="text-2xl" />,
    title: "Sustainability",
    description: "Eco-friendly operations caring for both people and the planet.",
  },
];

const milestones = [
  { year: "2019", event: "MediCure founded with a vision for accessible emergency healthcare" },
  { year: "2020", event: "Expanded to 50+ cities and assisted 200k+ COVID patients" },
  { year: "2021", event: "Reached 500+ cities with 15,000+ fleet vehicles" },
  { year: "2023", event: "Launched rare injection assistance and 5G integration" },
  { year: "2024", event: "Crossed 8M+ subscribers and 800k+ lives assisted" },
];

const highlights = [
  { title: "24/7 Support", text: "Always here to assist you in emergencies." },
  { title: "Cutting-Edge Tech", text: "Using AI, IoT, and 5G to revolutionize care." },
  { title: "Personalized Care", text: "Your comfort and concerns are our priority." },
  { title: "Global Reach", text: "Expanding healthcare access across borders." },
  { title: "Skilled Professionals", text: "Dedicated experts driven by a shared vision." },
  { title: "Eco-Friendly Solutions", text: "Caring for both you and the planet." },
];

const teamMembers = [
  { name: "Pranav Bajaj", role: "Co-Founder & CEO", initials: "PB" },
  { name: "Ravjot Singh", role: "Co-Founder & COO", initials: "RS" },
  { name: "Dr. Meera Iyer", role: "Chief Medical Officer", initials: "MI" },
  { name: "Arun Sharma", role: "CTO", initials: "AS" },
];

const avatarColors = ["bg-primary-500", "bg-teal-500", "bg-violet-500", "bg-rose-500"];

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-['Inter',sans-serif]">
      <NavBar />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-teal-600" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Redefining Healthcare{" "}
            <span className="text-gradient-white">with Technology & Care</span>
          </h1>
          <p className="mt-5 text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
            At MediCure, we merge technology and compassion to create a better world.
            Our mission: make healthcare accessible, efficient, and compassionate for everyone.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-white rounded-2xl border border-neutral-100 p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 mb-5">
              <MdFlag className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Our Mission</h2>
            <p className="text-neutral-600 leading-relaxed">
              We aim to empower individuals and communities with advanced healthcare
              solutions, prioritizing their well-being and accessibility. We bridge
              the gap between patients and life-saving medicines.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-100 p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-500 mb-5">
              <MdVerified className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Our Vision</h2>
            <p className="text-neutral-600 leading-relaxed">
              To lead the global transformation of healthcare with technology, trust,
              and empathy at the forefront of everything we do. A world where no one
              waits for life-saving care.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 text-sm font-medium rounded-full mb-4">
              Core Values
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 md:-translate-x-0.5" />

            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className={`relative flex items-center mb-8 last:mb-0 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-sm -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${
                    idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-xl border border-neutral-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-primary-600 font-bold text-lg">
                      {milestone.year}
                    </span>
                    <p className="text-neutral-600 mt-1">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-700 text-sm font-medium rounded-full mb-4">
              Differentiators
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-neutral-500 leading-relaxed">{highlight.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-700 text-sm font-medium rounded-full mb-4">
              Leadership
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-neutral-500 mt-3">The people behind MediCure's mission</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-neutral-100 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full ${avatarColors[idx]} flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {member.name}
                </h3>
                <p className="text-sm text-neutral-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
