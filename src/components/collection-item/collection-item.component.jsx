import React from 'react';
import './collection-item.style.scss';

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>&#8358;{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
