import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Top Five Compilations from the <big> poet, writer and actor.</big></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Midsummer.jpg'
              text='A Midsummer Nights Dream'
              label='Fantasy'
             
            />
            <CardItem
              src='Othello.jpg'
              text='Othello'
              label='Social Commentary'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='MerchVenice.jpg'
              text='Merchant of Venice'
              label='Comedy'
            />
            <CardItem
              src='Macbeth.jpeg'
              text='The Tragedy of Macbeth'
              label='Drama'
            />
            <CardItem
              src='sonnets.jpg'
              text='Sonnets by William Shakespeare'
              label='Prose and Poetry'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;