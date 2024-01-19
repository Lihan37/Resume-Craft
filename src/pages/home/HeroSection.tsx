import React from "react";
import { images } from "../../constant";

const HeroSection: React.FC = () => {
  return (
    <div>
      <div
        className=" text-black lg:flex lg:flex-row flex flex-col-reverse gap-10 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/NNZ8RQr/hero-bg.png")',
        }}>
        <div className=" flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Free Resume Builder <br /> for modern job seekers
          </h1>
          {/* fgfj */}
          <p className="text-lg">
            Introducing our Resume Builder – an essential tool designed for
            modern job seekers seeking to make a lasting impression in today's
            competitive job market. Crafted with simplicity and efficiency in
            mind, our resume builder empowers you to create a professional and
            eye-catching resume effortlessly.
          </p>
          <a
            href=""
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
            Build Your Resume
          </a>
        </div>
        <div
          className="flex-1  bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/K9h660B/Untitled-design-1.png")',
          }}>
          <img src={images.heroSection} alt="heroSection" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
