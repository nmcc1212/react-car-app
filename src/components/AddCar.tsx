import { useState } from 'react';
import { CarType } from '../cars';

interface AddCarProps {
    addCar: (car: CarType) => void;
}

const AddCar: React.FC<AddCarProps> = ({ addCar }) => {
    const [car, setCar] = useState<CarType>({
        model: '',
        picture: '',
        blurb: '',
        engine: ''
    });

    const addNewCar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addCar(car);
        setCar({
            model: '',
            picture: '',
            blurb: '',
            engine: ''
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    }

    return (
        <form className="car-form" onSubmit={addNewCar}>
            <p>Add a Car</p>
            <input name="model" value={car.model} onChange={handleChange} type="text" placeholder="Model" />
            <input name="picture" value={car.picture} onChange={handleChange} type="text" placeholder="Picture" />
            <input name="engine" value={car.engine} onChange={handleChange} type="text" placeholder="Engine" />
            <textarea name="blurb" value={car.blurb} onChange={handleChange} placeholder="Description">
            </textarea>
            <button type="submit">Add Car</button>
        </form>
    );
}

export default AddCar;
