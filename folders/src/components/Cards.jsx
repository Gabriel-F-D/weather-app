import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='grid grid-cols-3 bg-yellow-100'>
      {cities.map(c => <Card
          key = {c.id}
          id = {c.id}
          max = {c.max}
          min = {c.min}
          name = {c.name}
          img = {c.img}
          onClose = {() => onClose(c.id)}
        /> )}
    </div>
  );
}
