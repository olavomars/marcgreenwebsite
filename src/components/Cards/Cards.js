import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Image1 from '../../images/1.jpeg';
import Image2 from '../../images/4.jpeg';
import Image3 from '../../images/6.png';
import Image4 from '../../images/14.jpeg';
import Image5 from '../../images/13.jpg';
import Image6 from '../../images/12.jpeg';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='card__section__title'>Understand Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Image1}
              text='(EXAMPLE TEXT) At our facilities, we take raw materials and transform them into valuable products that are used in countless ways every day. Our advanced technologies and processes ensure that we produce the highest quality products, while also minimizing our impact on the environment.'
              label='Service'
              path='/Services'
            />
            <CardItem
              src={Image2}
              text="(EXAMPLE TEXT) We are proud to play a vital role in the global economy, and we take our responsibilities very seriously. That's why we adhere to the highest standards of safety, efficiency, and sustainability."
              label='Service'
              path='/Services'
            />
            <CardItem
              src={Image3}
              text='(EXAMPLE TEXT) An advantage of sugar cane refinery services is their environmental sustainability. Our refineries implement eco-friendly practices and technologies in order to minimize their impact on the environment. These practices may include the use of renewable energy sources, water conservation measures, and the responsible disposal of waste.'
              label='Service'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Image4}
              text='(EXAMPLE TEXT) We understand that running a rural operation can be challenging, which is why we offer personalized consulting services to help you overcome any obstacles and reach your goals. Whether you need help with financial planning, marketing, or resource management, we have the skills and expertise to guide you every step of the way.'
              label='Service'
              path='/Services'
            />
            <CardItem
              src={Image5}
              text='(EXAMPLE TEXT) At our company, we specialize in the transportation and storage of goods, ensuring that your products reach their destination safely and efficiently. Our team of professionals has years of experience in the industry, and we pride ourselves on our reliability and attention to detail.'
              label='Service'
              path='/Services'
            />
            <CardItem
              src={Image6}
              text='(EXAMPLE TEXT) Not only do our renewable energy solutions help protect the environment, they are also effective in lowering the production costs in the long run. We are proud to rely on cost-effective, reliable energy that benefits both our customers and the planet.'
              label='Service'
              path='/Services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
