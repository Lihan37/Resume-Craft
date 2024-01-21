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

const buttonStyles: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
};

// Custom component for the previous button
const PrevButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    className="p-2 text-white flex justify-center items-center z-50 text-4xl bg-c-primary rounded-full"
    style={{ ...buttonStyles, left: "15%" }}
    onClick={onClick}>
    <IoArrowBack />
  </button>
);

// Custom component for the next button
const NextButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    className="p-2 text-white flex justify-center items-center z-50 text-4xl bg-c-primary rounded-full"
    style={{ ...buttonStyles, right: "15%" }}
    onClick={onClick}>
    <IoArrowForward />
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
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
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
              <img
                src={item.url}
                alt="resumes"
                className="pointer-events-none select-none rounded-xl"
              />
            </SwiperSlide>
          ))}
          <PrevButton onClick={handleSlidePrev} />
          <NextButton onClick={handleSlideNext} />
        </Swiper>
      </div>
    )
  );
};

export default Slider;
