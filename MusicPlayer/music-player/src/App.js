import React, {useState} from 'react';
import './styles/app.scss';
//Adding Components
import Song from './components/Song.js';
import Player from './components/Player.js';
//Import Util
import data from './util';

function App() {
  //State 
  const[songs, setSongs] = useState(data());
  const[currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}/>
    </div>
  );
}

export default App;
