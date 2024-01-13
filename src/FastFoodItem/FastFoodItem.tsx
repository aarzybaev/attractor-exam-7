import React from 'react';
import './FastFoodItem.css';
import {FastfoodItem} from '../type';

interface Props extends FastfoodItem {
  addItem: React.MouseEventHandler;
}

const FastFoodItem: React.FC<Props> = ({
                                         name,
                                         price,
                                         image,
                                         addItem
                                       }) => {
  return (
    <div className="ff-item" onClick={addItem}>
      <img src={image} alt={name}/>
      <div className="ff-text-block">
        <span className="ff-item-title">{name}</span>
        <span className="ff-item-price">Price: {price} KGS</span>
      </div>
    </div>
  );
};

export default FastFoodItem;