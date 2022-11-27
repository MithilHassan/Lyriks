import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

function PlayPause({ song, activeSong, isPlaying, handlePause, handlePlay }) {
  return (
    <div>
      {
        isPlaying && activeSong?.title === song.title ? <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} /> : <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
      }
    </div>
  );
}

export default PlayPause;
