import React, { Suspense } from "react";
import Header from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import About from "../components/About/About";
import Values from "../components/Values/Values";
// Lazy load components
const CampusFeatures = React.lazy(() => import("../components/CampusFeatures/CampusFeatures"));
const AdvOfInstitution = React.lazy(() => import("../components/AdvOfInstitution/AdvOfInstitution"));
const Testimonials = React.lazy(() => import("../components/Testimonials/Testimonials"));
const BenefitsofTeam = React.lazy(() => import("../components/BenefitsofTeam/BenefitsofTeam"));
const BenefitsForStudents = React.lazy(() => import("../components/BenefitsForStudents/BenefitsForStudents"));
const Founder = React.lazy(() => import("../components/Founder/Founder"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Values />
      <Suspense fallback={<div>Loading...</div>}>
      <CampusFeatures />
      <AdvOfInstitution />
      <Testimonials />
      <BenefitsofTeam />
      <BenefitsForStudents />
      <Founder />
      <Footer />
    </Suspense>
    </div>
  );
};
