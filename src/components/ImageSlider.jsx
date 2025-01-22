import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/ImageSlider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ImageSlider = ({ images }) => {

     // State to store shuffled images
  const [shuffledImages, setShuffledImages] = useState([]);
  const isShuffled = useRef(false); // A ref to track if shuffle has occurred

  // Shuffle the images array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (!isShuffled.current) {
        // Only shuffle once
        setShuffledImages(shuffleArray(images));
        isShuffled.current = true; // Mark that shuffle has occurred
      }
  }, [images]);

  return (
    <Swiper
    modules={[ Pagination, Navigation]}
      spaceBetween={10} // Space between slides
      pagination={{
        clickable: true, // Enable clickable pagination dots
      }}
      loop={true} // Optional: Enable loop for infinite sliding
      autoplay={{ delay: 3000 }} // Optional: Auto slide every 3 seconds
    >
      {shuffledImages?.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} className='sliderImage' alt={`Slider Image ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
