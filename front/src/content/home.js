import React from 'react';
import Header from '../components/header.jsx';
import Button from '../components/button.jsx';
import './../stylesheet/home.css';

function Home() {
  return (
    <div>
      <Header />
      <nav>
      <p className='title'>Penguin's Puzzle and Audio Production</p>
      <Button text="Game" to="/game" styleType="default" />
      <Button text="SoundTest" to="/st" styleType="default" />
      <Button text="Rules" to="/rules" styleType="default" />
      
      </nav>
    </div>
  );
}


export default Home;

