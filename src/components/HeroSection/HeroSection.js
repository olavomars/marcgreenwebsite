import React from 'react';
import '../../App.css';
import {Button} from '../Buttons/Button';
import './HeroSection.css';
import Carousel from '../Carousel/Carousel';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='carousel-container'>
        <Carousel />
      </div>
      <div className='hero-btns'>
        <Button
          className='bttns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SERVICES
        </Button>
        <Button
          className='bttns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONTACT US
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
