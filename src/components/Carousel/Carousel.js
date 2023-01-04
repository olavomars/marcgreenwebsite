import React, {useState, useEffect} from 'react';
import './Carousel.css';
import Image1 from '../../images/1.jpeg';
import Image2 from '../../images/4.jpeg';
import Image3 from '../../images/6.png';
import Image4 from '../../images/14.jpeg';
import Image5 from '../../images/13.jpg';
import Image6 from '../../images/12.jpeg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    {
      url: Image1,
      text: 'Service text 1',
    },
    {
      url: Image2,
      text: 'Service text 2',
    },
    {
      url: Image3,
      text: 'Service text 3',
    },
    {
      url: Image4,
      text: 'Service text 4',
    },
    {
      url: Image5,
      text: 'Service text 5',
    },
    {
      url: Image6,
      text: 'Service text 6',
    },
  ];

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    setIsAnimating(true);

    const intervalId = setInterval(handleNext, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='carousel'>
      <div
        className={`carousel__image ${
          isAnimating ? 'carousel__image--translate' : ''
        }`}
        style={{backgroundImage: `url(${images[currentIndex].url})`}}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className='carousel__text'>{images[currentIndex].text}</div>
        <div className='carousel__overlay'></div>
      </div>
      <button className='prev-next prev' onClick={handlePrev}>
        &lt;
      </button>
      <button className='prev-next next' onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
