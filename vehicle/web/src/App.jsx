import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import './App.css';

export default function App({ data }) {
  const [turningDirection] = useState(data.indicator);
  const [playAudio, setPlayAudio] = useState(false);

  useEffect(() => {
    if (turningDirection === 0) {
      setPlayAudio(false);
    } else {
      setPlayAudio(true);
    }
  }, [turningDirection]);

  return (
    <div className="animate__animated animate__fadeIn flex justify-center items-end h-screen">
      <div className="m-4">
        <div className="flex gap-1 items-center justify-between text-6xl">
          <BsFillArrowLeftSquareFill className={turningDirection === 1 ? 'turning' : ''} />
          <BsFillArrowRightSquareFill className={turningDirection === 2 ? 'turning' : ''} />
        </div>
      </div>
      {playAudio && (
        <ReactAudioPlayer
          src="../audio.ogg"
          autoPlay
        />
      )}
    </div>
  );
}
