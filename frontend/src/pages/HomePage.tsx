import About from "../components/About/About";
import AdvOfInstitution from "../components/AdvOfInstitution/AdvOfInstitution";
import BenefitsForStudents from "../components/BenefitsForStudents/BenefitsForStudents";
import BenefitsofTeam from "../components/BenefitsofTeam/BenefitsofTeam";
import CampusFeatures from "../components/CampusFeatures/CampusFeatures";
import Footer from "../components/Footer/Footer";

import Founder from "../components/Founder/Founder";
import Header from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import Testimonials from "../components/Testimonials/Testimonials";
import Values from "../components/Values/Values";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Values />
      <CampusFeatures />
      <AdvOfInstitution />
      <Testimonials/>
      <BenefitsofTeam/>
      <BenefitsForStudents/>
      <Founder/>
     <Footer/>
    </div>
  );
};
