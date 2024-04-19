import React from 'react';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <header className="App-header">
      <h1 className="App-title">{text}</h1>
    </header>
  );
}

export default Header;
