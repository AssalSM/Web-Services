"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import React from 'react';
import Image from 'next/image';
 import "./slide.css"





const Imageslider = ({images}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    rtl: true,
  };
  

  return (
    
   <>
     <div className="testimonials-slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
       
        {images.map((image) => (
          <SwiperSlide key={image}>
             <div className="testimonial">

              
            <img src={image} width={50} height={50} alt="image" className="testimonial-image" /> 
            
            </div>    
          </SwiperSlide>
        ))}
       
      </Swiper>
    
    </div>
   
   </>
  );
};

export default Imageslider;