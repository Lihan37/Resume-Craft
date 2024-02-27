/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import ButtonUse from "../../../components/common/Button";
import useCreateResume from "../../../hooks/useCreateResume";
import { ResumeTemplatesType } from "../../../components/resumeTemplates/template";
interface IResume {
  template: {
    templateId: string;
    img: string;
    style: any;
  };
  tags: string[];
  name: string;
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
  const [active, setActive] = useState<number>(1);

  const handleSlideNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current?.swiper.slidePrev();
  };
  const [createResume] = useCreateResume();

  const handleTemplate = () => {
    const activeItem = resumes.find((_, i) => i === active);

    if (activeItem && activeItem.template) {
      createResume({
        SelectedTemplateId: activeItem.template
          .templateId as keyof ResumeTemplatesType,
      });
    }
  };

  return (
    resumes.length > 0 && (
      <div className=" w-full relative">
        <Swiper
          ref={sliderRef as React.RefObject<SwiperRef>}
          spaceBetween={50}
          initialSlide={1}
          centeredSlides={true}
          loop={false}
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
          }}
          onActiveIndexChange={(data) => {
            setActive(data.activeIndex);
          }}>
          {resumes.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div id="image_container">
                  <img
                    id="image"
                    src={item.template.img}
                    alt="resumes"
                    className="pointer-events-none select-none rounded-xl h-full w-full "
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className=" absolute top-0 left-0 right-0 bottom-0 z-50">
          <div className=" w-full h-full flex justify-center items-center">
            <ButtonUse
              onClick={handleTemplate}
              icon={false}
              className=" bg-c-primary text-white font-mono text-base uppercase font-semibold 
            px-5 py-2 rounded-full">
              Use Template
            </ButtonUse>
          </div>
        </div>
        <Button onClick={handleSlidePrev} left="15%">
          <IoArrowBack />
        </Button>
        <Button onClick={handleSlideNext} right="15%">
          <IoArrowForward />
        </Button>
      </div>
    )
  );
};

export default Slider;
