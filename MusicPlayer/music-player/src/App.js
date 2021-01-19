import React from 'react';
import './styles/app.scss';
//Adding Components
import Song from './components/Song.js';
import Player from './components/Player.js';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
