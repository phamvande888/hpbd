// File: src/BirthdayCard.jsx
import React, { useState, useEffect } from "react";
import birthdayBg from "./background.jpg";
import "./index.css";
import thuan1 from "./thuan1.jpeg";
import thuan2 from "./thuan2.jpeg";
import thuan3 from "./thuan3.jpeg";


const audio = new Audio("/hpbd.mp3");

const BirthdayCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPopup, setCurrentPopup] = useState(0);
  const [typedMessage, setTypedMessage] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const popups = [
    {
      img: thuan1,
      message: "Em biết không? Hôm nay là một ngày cực kỳ đặc biệt... 💗",
    },
    {
      img: thuan2,
      message:
        "Là ngày mà một cô gái Cự Giải xinh xắn, dịu dàng ra đời đó ✨🌙",
    },
    {
      img: thuan3,
      message:
        "Cảm ơn em vì đã bước vào cuộc đời anh. Mong em mãi luôn hạnh phúc nhé 💕",
    },
  ];

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const fullMessage = popups[currentPopup].message;
      if (charIndex < fullMessage.length) {
        setTypedMessage((prev) => prev + fullMessage.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [charIndex, currentPopup]);

  const nextPopup = () => {
    if (currentPopup < popups.length - 1) {
      setCurrentPopup(currentPopup + 1);
      setTypedMessage("");
      setCharIndex(0);
    }
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${birthdayBg})` }}>
      <h1>🎉 Chúc mừng sinh nhật em - Trần Thị Minh Thuận 🎂</h1>
      <p>
        Hôm nay là ngày thật đặc biệt… ngày em xuất hiện trong cuộc đời này 💫<br />
        Cảm ơn em đã luôn là cô gái dịu dàng, sâu sắc, đầy yêu thương.<br />
        Anh chúc em luôn cười thật tươi, ấm áp và hạnh phúc theo cách em xứng đáng!
      </p>

      <button onClick={toggleMusic} className="music-btn">
        {isPlaying ? "🔇 Tắt nhạc" : "🎵 Bật nhạc"}
      </button>

      <div className="popup">
        <img
          src={popups[currentPopup].img}
          alt="Em Thuận"
          className="popup-img"
        />
        <p className="popup-msg">{typedMessage}</p>
        {currentPopup < popups.length - 1 && (
          <button className="next-btn" onClick={nextPopup}>
            👉 Tiếp theo
          </button>
        )}
      </div>
    </div>
  );
};

export default BirthdayCard;