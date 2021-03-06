import React, {useState, useRef} from 'react';
import './styles/app.scss';
//Adding Components
import Song from './components/Song.js';
import Player from './components/Player.js';
import Library from './components/Library';
import Nav from './components/Nav';
//Import Util
import data from './data';

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
  const [libraryStatus, setLibraryStatus] = useState(false);

    const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime: current, duration});
  }

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
      audioRef={audioRef}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      songs={songs}
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}
      />
      <Library 
      audioRef={audioRef}
      songs={songs} 
      setCurrentSong={setCurrentSong}
      isPlaying={isPlaying}
      setSongs={setSongs}
      libraryStatus={libraryStatus}
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
