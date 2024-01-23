import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
// import BenefitSection from "./BenefitSection";
// import HowToUseSection from "./HowToUseSection";
import FaqSection from "./FaqSection";
// import PricingSection from "./PricingSection";
import Testimonials from "./testimonials/Testimonials";
import Achievement from "./Achievement";
import Suggestion from "./suggestion/Suggestion";
import Companies from "./Companies";
import BlogsSection from "./BlogsSection";
import Action from "./Action";

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Companies />
      <FeatureSection />
      <Suggestion />
      <Testimonials />
      <Achievement />
      <Action />
      <BlogsSection />
      <FaqSection />
      {/* <BenefitSection /> */}
      {/* <HowToUseSection /> */}
      {/* <PricingSection /> */}
    </>
  );
};
