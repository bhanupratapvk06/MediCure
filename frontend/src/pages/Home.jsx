import ChooseUs from "../components/ChooseUs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Insights from "../components/Insights";
import MedNews from "../components/MedNews";
import NavBar from "../components/NavBar";
import OurPartners from "../components/Partners";
import Testimonies from "../components/Testimonies";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="relative w-full bg-white font-['Inter',sans-serif] flex flex-col">
      <NavBar />
      <Header />
      <HowItWorks />
      <ChooseUs />
      <Features />
      <Insights />
      <MedNews />
      <Testimonies />
      <OurPartners />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
