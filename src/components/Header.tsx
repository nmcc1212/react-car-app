import { Component } from 'react';

interface HeaderProps {
    text: string;
}
class Header extends Component <HeaderProps> {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">{this.props.text}</h1>
            </header>
        );
    }
}

export default Header;