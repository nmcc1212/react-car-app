import React from 'react';
import { CarType } from '../cars';

interface CarProps {
  meta: CarType;
}

const Car: React.FC<CarProps> = ({ meta }) => {
  const { model, engine, blurb, picture } = meta;
  return (
    <div className="car">
      <h2>{model}</h2>
      <div><img width="100%" src={picture} alt="" /></div>
      <p>{blurb}</p>
      <p><strong>{engine}</strong></p>
    </div>
  );
}

export default Car;
