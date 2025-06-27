import React, { useState } from "react";

const BirthdayCard = () => {
  const [audio] = useState(new Audio("/birthday.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="card">
      <h1>🎉 Chúc mừng sinh nhật em! 🎂</h1>
      <p>
        Hôm nay là một ngày thật đặc biệt… vì là ngày em xuất hiện trên thế giới
        này. Anh chúc em luôn cười thật tươi, hạnh phúc, và gặp nhiều điều tuyệt
        vời trong cuộc sống.
      </p>
      <button onClick={toggleMusic}>
        {isPlaying ? "🔇 Tắt nhạc" : "🎵 Bật nhạc"}
      </button>
    </div>
  );
};

export default BirthdayCard;
