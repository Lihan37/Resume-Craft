import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { PiGlobeStand } from "react-icons/pi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "swiper/swiper-bundle.css";
import Card from "./Card";

interface IResumes {
  _id: string | number;
  name: string;
  image: string;
  tags: string[];
}

interface IPopular {
  resumes: IResumes[];
}

const Popular: React.FC<IPopular> = ({ resumes = [] }) => {
  const sliderRef = useRef<SwiperRef>();

  const handleSlidePrev = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  const handleSlideNext = () => {
    sliderRef.current?.swiper.slideNext();
  };
  return (
    resumes?.length > 0 && (
      <>
        <div className="flex justify-between items-center py-7 border-b-2 mb-7">
          <div className="flex gap-3 items-center">
            <PiGlobeStand className="text-4xl text-c-primary" />
            <h1 className="text-4xl font-bold text-c-dark"> Most Popular</h1>
          </div>
          <div className="flex  justify-start gap-5">
            <button
              className=" bg-c-primary  text-white p-3 rounded-full text-2xl"
              onClick={handleSlidePrev}>
              <IoArrowBack />
            </button>
            <button
              className="bg-c-primary text-white p-3 rounded-full text-2xl"
              onClick={handleSlideNext}>
              <IoArrowForward />
            </button>
          </div>
        </div>
        <Swiper
          ref={sliderRef as React.RefObject<SwiperRef>}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}>
          {resumes?.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <Card imgUrl={item.image} link={`/`} name={item.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    )
  );
};

export default Popular;
