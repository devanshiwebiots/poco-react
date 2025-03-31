import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../../../assets/images/Carousel/1.jpg";
import img2 from "../../../assets/images/Carousel/2.jpg";
import img3 from "../../../assets/images/Carousel/3.jpg";

const items = [
  {
    id: 1,
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    id: 2,
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    id: 3,
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const Carsouselthree = () => {
  return (
    <Swiper loop={true} navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]} className='swiper-container'>
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.src} alt={item.altText} className='d-block w-100' />
          <div className='carousel-caption d-none d-md-block text-danger'>
            <h5>{item.caption}</h5>
            <p>{item.altText}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carsouselthree;
