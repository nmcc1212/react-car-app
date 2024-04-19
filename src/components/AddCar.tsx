import { Component } from 'react';
import { CarType } from '../cars';

interface AddCarProps {
    addCar: (car: CarType) => void;
}

interface AddCarState extends CarType {}

class AddCar extends Component <AddCarProps, AddCarState> {
    state: AddCarState = {
        model: '',
        picture: '',
        blurb: '',
        engine: ''
    };

    addNewCar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.addCar(this.state);
        this.setState({
            model: '',
            picture: '',
            blurb: '',
            engine: ''
        });
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({ [e.target.name]: e.target.value } as Pick<AddCarState, keyof AddCarState>);
    }

    render() {
        return (
            <form className="car-form" onSubmit={(e) => this.addNewCar(e)}>
                <p>Add a Car</p>
                <input name="model" value={this.state.model} onChange={this.handleChange} type="text" placeholder="Model" />
                <input name="picture" value={this.state.picture} onChange={this.handleChange} type="text" placeholder="Picture" />
                <input name="engine" value={this.state.engine} onChange={this.handleChange} type="text" placeholder="Engine" />
                <textarea name="blurb" value={this.state.blurb} onChange={this.handleChange} placeholder="Description">
                </textarea>
                <button type="submit">Add Car</button>
            </form>
        );
    }
}

export default AddCar;
