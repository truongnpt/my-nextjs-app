"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../app/styles/slideshow.scss";

export default function SlideShow() {
  const info = {
    boy: "Phi Trường",
    girl: "Kim Cúc",
    subtext: "Ngày 29 tháng 10 năm 2025",
    note: "(Âm lịch, ngày 09 tháng 09 năm 2025)",
  };

  const slides = [
    {
      id: 1,
      image: "/images/slide1.jpg",
      alt: "Slide 1",
    },
    {
      id: 2,
      image: "/images/slide2.jpg",
      alt: "Slide 2",
    },
  ];

  return (
    <div className="slideshow-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-image">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center gap-4 text-white">
          <h3 className="font-dancing text-8xl">{info.boy}</h3>
          <Image src="/images/heart.gif" width={100} height={100} alt="Heart" />
          <h3 className="font-dancing text-8xl">{info.girl} &nbsp; &nbsp;</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pt-6">
          <span className="line text-white text-2xl">{info.subtext}</span>
          <span className="text-white text-1xl">{info.note}</span>
        </div>
      </div>
    </div>
  );
}
