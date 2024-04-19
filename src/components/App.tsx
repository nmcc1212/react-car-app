import { Component } from 'react';
import '../App.css';
import Header from './Header.js';
import Car from './Car'
import { initialCars, additionalCars, CarType, InitialCarsType } from '../cars';
import AddCar from './AddCar'


class App extends Component<{}, { cars: InitialCarsType }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cars: initialCars
    };
    this.loadAdditionalCars = this.loadAdditionalCars.bind(this);
    this.addCarToGallery = this.addCarToGallery.bind(this);
  }

  loadAdditionalCars() {
    const currentCars = { ...this.state.cars };

    const newCars = Object.assign(currentCars, additionalCars);
    this.setState({ cars: newCars });
  }

  addCarToGallery(car: CarType) {
    const ts = Date.now();
    const newCar: { [key: string]: CarType } = {};
    newCar['car' + ts] = car;
    const currentCars = { ...this.state.cars };
    const newCars = Object.assign(currentCars, newCar);
    this.setState({ cars: newCars });
  }

  render() {
    return (
      <div className="App">
        <Header text="Vehicle Quick Info" />
        <p className="App-intro">
          Some information about popular SUV and Crossover models.
        </p>
        <div className="cars">
          {
            Object
              .keys(this.state.cars)
              .map(key => <Car key={key} meta={this.state.cars[key]} />)
          }
        </div>
        <div className="add-cars"><button onClick={this.loadAdditionalCars}>Load more...</button></div>
        <AddCar addCar={this.addCarToGallery} />

      </div>
    );
  }
}

export default App;