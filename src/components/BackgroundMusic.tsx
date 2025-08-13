"use client";
import { useRef, useEffect } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1;
        audioRef.current
          .play()
          .catch((err) => console.warn("Error al reproducir:", err));
      }
      // Quitar listeners después de la primera interacción
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
      document.removeEventListener("mousemove", enableAudio);
      document.removeEventListener("keydown", enableAudio);
      document.removeEventListener("scroll", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);
    document.addEventListener("mousemove", enableAudio);
    document.addEventListener("keydown", enableAudio);
    document.addEventListener("scroll", enableAudio);
  }, []);

  return (
    <audio ref={audioRef} loop preload="auto">
      <source src="/bg.mp3" type="audio/mpeg" />
    </audio>
  );
}
