import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import c1 from "/assets/images/Carousel/1.jpg";
import c2 from "/assets/images/Carousel/2.jpg";
import c3 from "/assets/images/Carousel/3.jpg";

const items = [
  {
    src: c1,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: c2,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: c3,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

const CarouselTwo = () => {
  return (
    <Swiper autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} navigation={true} pagination={{ clickable: true }} modules={[Autoplay, Navigation, Pagination]} className='swiper-container'>
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.src} alt={item.altText} className='d-block w-100' />
          <div className='carousel-caption d-none d-md-block'>
            <h5>{item.header}</h5>
            <p>{item.caption}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselTwo;
