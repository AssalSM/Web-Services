"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './Slide.css';




const Slider = ({images}) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + 3 < images.length) {
      setStartIndex(startIndex + 1);
    }
   
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="prev" disabled={startIndex === 0}>
        &#10094;
      </button>
     
      <div className="slides">
        {images.slice(startIndex, startIndex + 3).map((image, index) => (
          <div key={index} className="slide">
            <Image
            className="imageslide"
              src={image}
              alt={`Slider Image ${index + 1}`}
              width={100}
              height={140}
            //   objectFit="cover"
            />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="next" disabled={startIndex + 3 >= images.length}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
