import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
          <Link to="/game">Game</Link>
      </nav>
    </div>
  );
}

export default Home;
