import { Component } from 'react';
import { CarType } from '../cars';

interface CarProps {
  meta: CarType;
}

class Car extends Component<CarProps> {
  render() {
    const { model, engine, blurb, picture } = this.props.meta;
    return (
      <div className="car">
        <h2>{model}</h2>
        <div><img width="100%" src={picture} alt="" /></div>
        <p>{blurb}</p>
        <p><strong>{engine}</strong></p>
      </div>
    );
  }
}
export default Car;