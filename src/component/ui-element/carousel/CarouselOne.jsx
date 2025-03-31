import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../../assets/images/Carousel/1.jpg";
import img2 from "../../../assets/images/Carousel/2.jpg";
import img3 from "../../../assets/images/Carousel/3.jpg";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const Carouselone = () => {
  return (
    <Swiper loop={true} navigation={true} pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Navigation, Pagination, Autoplay]} className='swiper-container'>
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.src} alt={item.altText} className='d-block w-100' />
          <div className='carousel-caption d-none d-md-block'>
            <h5>{item.caption}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carouselone;
