import { PlayCircleIcon, PauseCircleIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { useRef, useState, useEffect } from "react";

export interface AudioProps {
  source: string;
}
export const Audio: React.FC<AudioProps> = ({ source }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setIsPlaying(true);
  }

  const handlePause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }

  const handleReplay = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  }

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (!audioRef.current) return;
      const progress = audioRef.current.currentTime / audioRef.current.duration * 100;
      setProgress(progress);
    }
    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
  }, []);

  
  return (
    <div>
      <audio ref={audioRef}>
          <source src={source} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="mt-2">
        <div className="h-1 rounded-lg w-full bg-neutral-200 overflow-hidden">
          <div className="h-1 bg-blue-600" style={{ width: `${progress}%`}}></div>
        </div>
        </div>
        <div className="flex gap-4 mt-2">
          {isPlaying ? (
            <button className="flex items-center gap-1" onClick={handlePause}>
              <PauseCircleIcon width={20} stroke="#4b5563" /> <span className="text-gray-600">Tạm dừng</span>
            </button>
          ) : (
            <button className="flex items-center gap-1" onClick={handlePlay}>
              <PlayCircleIcon width={20} stroke="#4b5563" /> <span className="text-gray-600">Nghe nhạc</span>
            </button>
          )}
          <button className="flex items-center gap-1" onClick={handleReplay}>
            <ArrowPathIcon width={20} stroke="#4b5563" /> <span className="text-gray-600">Nghe lại</span>
          </button>
        </div>
    </div>
  )
}