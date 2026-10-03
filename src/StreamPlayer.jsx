import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';


function StreamPlayer ({ stationName, streamUrl}){
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const playPauseButton = () => {
        if(!isPlaying){
            audioRef.current.play();
            setIsPlaying(true);
        } else { 
            audioRef.current.pause();
            setIsPlaying(false);
        }

    }

    const muteButton = () => {
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(!isMuted);
    }


    return(
        <div className='stream-player'>
            <audio ref={audioRef} src={streamUrl}/>
            <h2>{stationName}
                <span className="live">LIVE</span>
            </h2>
            <button onClick={playPauseButton}>{isPlaying ?  <FaPause /> : <FaPlay/> }</button>
            <button onClick={muteButton}>{isMuted ?  <FaVolumeMute /> : <FaVolumeUp/> }</button>
        </div>
    )
}

export default StreamPlayer;