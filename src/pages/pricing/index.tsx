import React from "react";
import useTitleSet from "../../hooks/useTitleSet";
import { Container } from "../../components/common/Container";

const Pricing: React.FC = () => {
  useTitleSet("Pricing");
  const packagePlans = [
    {
      name: "Components",
      free: true,
      premium: true,
      enterprise: true,
    },
    {
      name: "Easily edited and customized",
      free: true,
      premium: true,
      enterprise: true,
    },
    {
      name: "Components",
      free: true,
      premium: true,
      enterprise: true,
    },
    {
      name: "Easily edited and customized",
      free: true,
      premium: true,
      enterprise: true,
    },
    {
      name: "Components",
      free: true,
      premium: true,
      enterprise: true,
    },
  ];

  return (
    <Container>
      <div className="py-10">
        <div className="text-center py-10 h-[600px] bg-gradient-to-t from-blue-200 via-violet-100 to-white rounded-2xl">
          <button className="font-semibold py-2 px-4 border-2 rounded-full">
            Choose Your Package
          </button>
          <h1 className="text-5xl font-semibold py-5 text-c-dark">
            Our plans scale <br /> with{" "}
            <span className="text-c-primary">your business</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            excepturi modi magni <br /> possimus temporibus officiis quod rerum
            fugit, eveniet repellat.
          </p>
        </div>

        <div></div>
      </div>
    </Container>
  );
};

export default Pricing;
