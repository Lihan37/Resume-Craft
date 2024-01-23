import React from "react";
import { images } from "../../constant";
import { Container } from "../../components/common/Container";

const companies = [
  images.amazon,
  images.drillle,
  images.hubspot,
  images.notion,
  images.netflix,
  images.zoom,
];

const Companies: React.FC = () => {
  return (
    <Container>
      <div className=" my-16 md:my-6 py-7 lg:py-14 gap-5  grid grid-cols-3 md:grid-cols-6 border border-blue-100 rounded-xl">
        {companies.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-center items-center  opacity-80 hover:opacity-100 duration-300 transition-opacity">
            <img className="w-20 lg:w-28  cursor-pointer" src={item} alt="" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Companies;
