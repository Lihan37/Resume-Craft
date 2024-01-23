import React, { useRef } from "react";
import { data } from "../../../constant";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import "swiper/swiper-bundle.css";
import "./style.css";
import ShowStarRating, {
  StarSize,
} from "../../../components/common/ShowStarRating";

const Button: React.FC<{
  left?: string;
  right?: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, left, right, children }) => (
  <button
    className="p-2 absolute  transform bottom-10 lg:bottom-11 xl:bottom-8 2xl:bottom-6 text-white flex justify-center items-center z-50 text-xl xl:text-4xl bg-c-primary-light hover:bg-c-primary duration-300 transition-colors rounded-full"
    style={{ left: left, right: right }}
    onClick={onClick}>
    {children}
  </button>
);
const Slider: React.FC = () => {
  const sliderRef = useRef<SwiperRef>();

  const handleSlideNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current?.swiper.slidePrev();
  };
  return (
    <Swiper
      ref={sliderRef as React.RefObject<SwiperRef>}
      spaceBetween={30}
      scrollbar={{ draggable: true }}
      navigation={{
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
      }}
      loop={true}
      modules={[Scrollbar, Navigation]}
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
      className="mySwiper">
      {data.reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div className=" w-full xl:px-5 flex flex-col gap-5 items-start justify-between border md:border-0 p-2 py-3 md:p-0">
            <div className=" w-full flex flex-col gap-2 items-start justify-between">
              <ShowStarRating
                size={StarSize.MD}
                rating={review.star}
                activeColor={review.color}
              />
              <h1 className=" font-semibold xl:text-xl">
                {review.title.slice(0, 22)}
                {review.title.length > 22 && " ..."}
              </h1>
              <h2 className=" text-base font-mono fonts-">
                {review.review.slice(0, 150)}
                {review.review.length > 150 && " ..."}
              </h2>
            </div>
            <h1 className=" text-sm text-c-dark-light">
              {review.name} . {review.date}
            </h1>
          </div>
        </SwiperSlide>
      ))}

      <Button onClick={handleSlidePrev} left="0%">
        <IoArrowBack />
      </Button>
      <Button onClick={handleSlideNext} left="14%">
        <IoArrowForward />
      </Button>
    </Swiper>
  );
};

export default Slider;
