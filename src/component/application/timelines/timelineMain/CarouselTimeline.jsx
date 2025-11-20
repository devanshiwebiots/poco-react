import React from "react";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselTimelineData } from "../../../../data/timeline";
import { Image } from "../../../common/Image";

const CarouselTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

const dynamicImage = (image) => {
  return `/assets/images/${image}`;
};
  
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img bg-success">
        <i className="icon-image" />
      </div>
      <div className="cd-timeline-content">
      <h4 className="vertical-timeline-element-subtitle">{"Layout Drafts 3"}</h4>
        <div className="carousel m-t-10">
          <Swiper navigation modules={[Navigation, Pagination]} pagination={{ clickable: true }} slidesPerView={1} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} className="carousel-inner">
            {CarouselTimelineData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <Image src={dynamicImage(`banner/${item.image}`)} alt="drawing-room" className="d-block w-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <span className="cd-date">2016 - 2018</span>
      </div>
    </div>
  );
};
export default CarouselTimeline;
