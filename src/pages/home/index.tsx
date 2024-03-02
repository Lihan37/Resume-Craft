import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import FaqSection from "./FaqSection";
import Testimonials from "./testimonials/Testimonials";
import Achievement from "./Achievement";
import Suggestion from "./suggestion/Suggestion";
import Companies from "./Companies";
import BlogsSection from "./BlogsSection";
import Action from "./Action";
import useTitleSet from "../../hooks/useTitleSet";
import { useGetPriceQuery } from "../../services/api/api";

export const Home: React.FC = () => {
  useTitleSet("Home");
  useGetPriceQuery("price");
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
    </>
  );
};
