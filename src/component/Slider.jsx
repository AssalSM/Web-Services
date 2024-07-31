"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import React from "react";
import "./slide.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/user-profile.png",
    name: "mohammed bn hassan",
    comment:
      "  Visit the Services page to see what we offer, the About page to learn how we work, and Contact us to create your own website",
  },
  {
    id: 2,
    image: "/pngwing.png",
    name: "salma ait fahmi",
    comment:
      "  Visit the Services page to see what we offer, the About page to learn how we work, and Contact us to create your own website",
  },
  {
    id: 3,
    image: "/user-profile.png",
    name: " khalid youssef",
    comment:
      "  Visit the Services page to see what we offer, the About page to learn how we work, and Contact us to create your own website",
  },
  {
    id: 4,
    image: "/user-profile.png",
    name: " omar dwida",
    comment:
      "  Visit the Services page to see what we offer, the About page to learn how we work, and Contact us to create your own website",
  },
  // أضف المزيد من التعليقات هنا
];

const Slider = () => {
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial">
                <Image
                  src={testimonial.image}
                  width={50}
                  height={50}
                  alt={testimonial.name}
                  className="testimonial-image"
                />

                <p className="commint">{testimonial.comment}</p>
                <p className="namecommint">{testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
