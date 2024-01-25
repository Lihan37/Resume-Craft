import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {  Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Container } from "../../../components/common/Container";
import { PiGlobeStand } from "react-icons/pi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { images } from "../../../constant";
import "swiper/swiper-bundle.css";


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
               <PiGlobeStand className="text-4xl text-c-primary" /> <h1 className="text-4xl font-bold text-c-dark">  Most Popular</h1>
               </div>
            <div className="flex justify-end gap-2 pb-10">
                <button className=" bg-c-primary  text-white  p-3    rounded-full text-2xl" onClick={handleSlidePrev} >
                    <IoArrowBack/>
                </button>
                <button className="bg-c-primary text-white p-3  rounded-full text-2xl" onClick={handleSlideNext}>
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

                <SwiperSlide><img src={images.resume1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={images.resume2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={images.resume3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={images.resume4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={images.resume5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={images.resume6} alt="" /></SwiperSlide>
               
                



            </Swiper>
        </Container>
    );
};

export default Popular;
