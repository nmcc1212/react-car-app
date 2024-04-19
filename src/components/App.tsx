import React, { useState } from 'react';
import '../App.css';
import Header from './Header.js';
import Car from './Car'
import { initialCars, additionalCars, CarType, InitialCarsType } from '../cars';
import AddCar from './AddCar'

const App: React.FC = () => {
  const [cars, setCars] = useState<InitialCarsType>(initialCars);

  const loadAdditionalCars = () => {
    const currentCars = { ...cars };
    const newCars = Object.assign(currentCars, additionalCars);
    setCars(newCars);
  }

  const addCarToGallery = (car: CarType) => {
    const ts = Date.now();
    const newCar: { [key: string]: CarType } = {};
    newCar['car' + ts] = car;
    const currentCars = { ...cars };
    const newCars = Object.assign(currentCars, newCar);
    setCars(newCars);
  }

  return (
    <div className="App">
      <Header text="Vehicle Quick Info" />
      <p className="App-intro">
        Some information about popular SUV and Crossover models.
      </p>
      <div className="cars">
        {
          Object
            .keys(cars)
            .map(key => <Car key={key} meta={cars[key]} />)
        }
      </div>
      <div className="add-cars"><button onClick={loadAdditionalCars}>Load more...</button></div>
      <AddCar addCar={addCarToGallery} />
    </div>
  );
}

export default App;
