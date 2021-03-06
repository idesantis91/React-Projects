import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight, faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import { NIL } from 'uuid';
import {playAudio} from '../util';
const Player = ({setSongs, setCurrentSong, songs, songInfo, setSongInfo, audioRef, currentSong, isPlaying, setIsPlaying}) =>{
    //useEffect
    useEffect(() => {
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id){
                return{
                    ...song,
                    active:true,
                };
            }else{
                return{
                    ...song,
                    active: false,
                };
            }
    });
    setSongs(newSongs);
}, [currentSong]);

    //Event Handlers
    const playSongHandler = () =>{
        if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    //Function to Format Player Time
    const getTime = (time) =>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) =>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    };

    const skipTrackHandler = (direction) =>{
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back'){
            if((currentIndex - 1) % songs.length === -1){
                setCurrentSong(songs[songs.length-1]);
                //Return ends the functions after excuting the above code. 
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        playAudio(isPlaying, audioRef);
    };

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                min={0} 
                max={songInfo.duration} 
                value={songInfo.currentTime}
                onChange={dragHandler}
                type="range"
                />
                <p>{getTime(songInfo.duration || 0)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    );
}

export default Player;