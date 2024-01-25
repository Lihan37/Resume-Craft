import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {  Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Container } from "../../../components/common/Container";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { PiGlobeStand } from "react-icons/pi";


const Popular: React.FC = () => {
    const sliderRef = useRef<SwiperRef>();

    const handleSlidePrev = () => {

        sliderRef.current?.swiper.slidePrev();
    };

    const handleSlideNext = () => {
  
        sliderRef.current?.swiper.slideNext();
    };
    return (
        <Container>
            <div className="flex justify-between items-center py-16">
               <div className="flex gap-3 items-center">
               <PiGlobeStand className="text-3xl" /> <h1 className="text-3xl font-semibold">  Most Popular</h1>
               </div>
            <div className="flex justify-end gap-2 pb-10">
                <button className=" bg-c-primary  text-white px-5 py-3 rounded-2xl text-2xl" onClick={handleSlidePrev} >
                    <MdOutlineArrowBackIos />
                </button>
                <button className="bg-c-primary text-white px-5 py-3 rounded-2xl text-2xl" onClick={handleSlideNext}>
                    <MdOutlineArrowForwardIos  />
                </button>
            </div>
            </div>
            <Swiper
                ref={sliderRef as React.RefObject<SwiperRef>}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
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
                }}
                className="mySwiper">

                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>



            </Swiper>
        </Container>
    );
};

export default Popular;
