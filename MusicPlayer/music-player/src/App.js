import React, {useState, useRef} from 'react';
import './styles/app.scss';
//Adding Components
import Song from './components/Song.js';
import Player from './components/Player.js';
import Library from './components/Library';
//Import Util
import data from './util';

function App() {
  //Ref
  const audioRef = useRef(null);
  //State 
  const[songs, setSongs] = useState(data());
  const[currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime: current, duration});
  }

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
      audioRef={audioRef}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      />
      <Library 
      audioRef={audioRef}
      songs={songs} 
      setCurrentSong={setCurrentSong}
      isPlaying={isPlaying}
      />
      <audio 
            onTimeUpdate={timeUpdateHandler} 
            onLoadedMetadata={timeUpdateHandler} 
            ref ={audioRef} 
            src={currentSong.audio}
            ></audio>
    </div>
  );
}

export default App;
