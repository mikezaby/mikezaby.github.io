"use client";

import { useState } from "react";

interface TogglePlayProps {
  onToggle: (state: boolean) => void;
}

const STOP_CLASS_NAMES = "bg-red-500 text-white hover:bg-red-700";
const PlAY_CLASS_NAMES = "bg-green-500 text-white hover:bg-green-700";

export function TogglePlay(props: TogglePlayProps) {
  const { onToggle } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    onToggle && onToggle(!isPlaying);
    setIsPlaying(!isPlaying);
  };

  const className = `${isPlaying ? STOP_CLASS_NAMES : PlAY_CLASS_NAMES} rounded bg-blue-500 px-4 py-2 font-bold`;

  return (
    <button
      onClick={togglePlay}
      className={className}
      aria-label={isPlaying ? "Stop" : "Play"}
    >
      {isPlaying ? "Stop" : "Play"}
    </button>
  );
}
