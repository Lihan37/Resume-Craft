import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import BenefitSection from "./BenefitSection";
import HowToUseSection from "./HowToUseSection";
import FaqSection from "./FaqSection";
import PricingSection from "./PricingSection";
import { Container } from "../../components/common/Container";

export const Home: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      <FeatureSection />
      <BenefitSection />
      <HowToUseSection />
      <PricingSection />
      <FaqSection />
    </Container>
  );
};
