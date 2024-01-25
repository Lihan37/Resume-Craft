import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";
import "./slider.css";

interface IResume {
  url: string;
}

interface ISlider {
  resumes: IResume[];
}

// Custom component for the previous button
const Button: React.FC<{
  left?: string;
  right?: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, left, right, children }) => (
  <button
    className="p-2 absolute top-3/4 md:top-1/2 transform -translate-y-1/2 text-white flex justify-center items-center z-50 text-4xl bg-c-primary-light hover:bg-c-primary duration-300 transition-colors rounded-full"
    style={{ left: left, right: right }}
    onClick={onClick}>
    {children}
  </button>
);

const Slider: React.FC<ISlider> = ({ resumes = [] }) => {
  const sliderRef = useRef<SwiperRef>();

  const handleSlideNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  return (
    resumes.length > 0 && (
      <div>
        <Swiper
          ref={sliderRef as React.RefObject<SwiperRef>}
          spaceBetween={50}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}>
          {resumes.map((item, index) => (
            <SwiperSlide key={index}>
              <img id="image"
                src={item.url}
                alt="resumes"
                className="pointer-events-none select-none rounded-xl"
              />
            </SwiperSlide>
          ))}
          <Button onClick={handleSlidePrev} left="15%">
            <IoArrowBack />
          </Button>
          <Button onClick={handleSlideNext} right="15%">
            <IoArrowForward />
          </Button>
        </Swiper>
      </div>
    )
  );
};

export default Slider;
