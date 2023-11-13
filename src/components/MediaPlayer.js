import { useState } from "react";
import {
  RiPlayCircleFill,
  RiPauseCircleLine,
  RiReplay15Line,
  RiForward15Line,
} from "react-icons/ri";

export default function MediaPlayer() {
  // Dummy state for play/pause toggle
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <div className="mt-2">
        <div className="bg-gray-200 rounded-full h-1">
          <div
            className="bg-gray-600 h-1 rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>0:00</span>
          <span>3:00</span>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <button onClick={() => {}} className="text-gray-800">
            <RiReplay15Line size={24} />
          </button>
          <button onClick={togglePlay} className="text-gray-800">
            {isPlaying ? (
              <RiPauseCircleLine size={32} />
            ) : (
              <RiPlayCircleFill size={32} />
            )}
          </button>
          <button onClick={() => {}} className="text-gray-800">
            <RiForward15Line size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
