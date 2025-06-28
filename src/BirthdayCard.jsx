import React, { useState, useEffect } from "react";
import birthdayBg from "./bg3.jpg";
import "./index.css";
import thuan1 from "./thuan1.jpeg";
import thuan2 from "./thuan2.jpeg";
import thuan3 from "./thuan3.jpeg";
import thuan4 from "./thuan4.jpeg";
import thuan5 from "./thuan5.jpeg";
import thuan6 from "./thuan6.jpeg";
import thuan7 from "./thuan7.jpeg";
import thuan8 from "./thuan8.jpeg";
import kiss from "../public/kiss.gif"; // Assuming kiss.gif is in the public folder
import HeartRain from "./HeartRain";
import ConfettiEffect from "./ConfettiEffect";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const audio = new Audio("/hpbd.mp3");

const BirthdayCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showEnding, setShowEnding] = useState(false);
  const [refusedCount, setRefusedCount] = useState(0);
  const [showKissVideo, setShowKissVideo] = useState(false);
  const introMessage =
    " 💟Chào em  bé ... anh có một món quà nhỏ và đôi lời muốn gửi đến em nhân ngày hôm nay... 💟";
  const popups = [
    {
      img: thuan1,
      message: "Em biết không? Hôm nay  là một ngày cực kỳ đặc biệt... 💗",
    },
    {
      img: thuan2,
      message: "Là ngày mà một cô gái xinh xắn, dịu dàng ra đời đó ✨🌙",
    },
    {
      img: thuan3,
      message:
        "Cảm ơn em vì đã bước vào cuộc đời anh. Mong em mãi luôn hạnh phúc nhé 💕",
    },
    {
      img: thuan4,
      message:
        "Anh thật sự biết ơn vì có em bên cạnh trong thời gian vừa qua 💘",
    },
    {
      img: thuan5,
      message: "Mỗi nụ cười của em đều làm tim anh ấm lên rất nhiều 🥰",
    },
    {
      img: thuan8,
      message:
        "Hy vọng em sẽ luôn mạnh mẽ, kiên cường và được yêu thương đúng cách 🌼",
    },
    {
      img: thuan7,
      message: "Chúc em tuổi mới luôn bình an, toả sáng như chính em nhé 🌟",
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

  // Hiệu ứng gõ intro
  useEffect(() => {
    if (!showMainContent) {
      const interval = setInterval(() => {
        if (charIndex < introMessage.length) {
          setTypedMessage((prev) => prev + introMessage.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }
      }, 50);
      return () => clearInterval(interval);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Autoplay bị chặn:", err.message));
    }
  }, [charIndex, introMessage, showMainContent]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    if (index === popups.length - 1) {
      setTimeout(() => {
        setShowEnding(true);
      }, 4500); // 4.5 giây sau slide cuối thì hiện kết
    }
  };
  return (
    <div className="card" style={{ backgroundImage: `url(${birthdayBg})` }}>
      {!showMainContent ? (
        <div className="popup">
          <p className="popup-msg">{typedMessage}</p>
          {typedMessage === introMessage && (
            <button
              className="next-btn"
              onClick={() => {
                setShowMainContent(true);
                setHasStarted(true);
              }}
            >
              💌 Bắt đầu 💌
            </button>
          )}
        </div>
      ) : (
        <>
          {hasStarted && (
            <>
              <HeartRain />
              <ConfettiEffect />
            </>
          )}

          <h1>
            {" "}
            🎂Chúc mừng sinh nhật em bé🎂 <br />
            Trần Thị Minh Thuận
            <br /> 🎀 15/7/2006 🎀
          </h1>
          <p className="birthday-message">
            Hôm nay là ngày thật đặc biệt … ngày em xuất hiện trong cuộc đời này
            💫
            <br />
            Cảm ơn em đã luôn đối xử dịu dàng với anh
            <br />
            Anh chúc em luôn cười thật tươi, ấm áp và hạnh phúc theo cách em
            xứng đáng!
          </p>

          <button onClick={toggleMusic} className="music-btn">
            {isPlaying ? "🔇 Tắt nhạc" : "🎵 Bật nhạc"}
          </button>

          {!showEnding ? (
            <Carousel
              selectedItem={currentSlide}
              onChange={handleSlideChange}
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={false}
              autoPlay={false}
              showIndicators={true}
            >
              {popups.map((popup, index) => (
                <div key={index} className="popup">
                  <img
                    src={popup.img}
                    alt={`popup-${index}`}
                    className="popup-img"
                  />
                  <p className="popup-msg">{popup.message}</p>
                </div>
              ))}
            </Carousel>
          ) : (
            <div className="ending-popup fade-in">
              {!showKissVideo ? (
                <>
                  <p
                    className="popup-msg"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "900",
                      textShadow: "0 0 5px rgba(3, 9, 21, 0.8)",
                    }}
                  >
                    🎁 Vậy là món quà nhỏ anh chuẩn bị cũng đến hồi kết rồi...{" "}
                    <br />
                    Anh mong mình sẽ cùng nhau đón thật nhiều sinh nhật nữa em
                    nhé 💝
                    <br />
                    <br />
                    <span style={{ fontSize: "1.3rem", color: "#ffe066" }}>
                      {refusedCount === 0 && "Cho anh hunn miếng nha?"}
                      {refusedCount === 1 &&
                        "Chỉ một miếng thôi mà, được không nè? 😚"}
                      {refusedCount === 2 &&
                        "Hun một miếng là anh vui cả ngày luôn đó 🥺"}
                      {refusedCount >= 3 && "Thôi hun đại đi chớ 😢"}
                    </span>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    {/* Nút "Có 💋" cũng to dần */}
                    <button
                      className="next-btn"
                      onClick={() => setShowKissVideo(true)}
                      style={{
                        fontSize: `${1 + refusedCount * 0.1}rem`,
                        padding: `${0.5 + refusedCount * 0.1}rem ${
                          1 + refusedCount * 0.2
                        }rem`,
                        transition: "all 0.3s ease",
                        backgroundColor: "#ff6b81",
                        color: "white",
                        borderRadius: "10px",
                      }}
                    >
                      Có 💋
                    </button>

                    <button
                      className="next-btn"
                      onClick={() => {
                        if (refusedCount < 3) {
                          setRefusedCount((prev) => prev + 1);
                        }
                      }}
                      onMouseEnter={() => {
                        if (refusedCount >= 2) {
                          setRefusedCount((prev) => prev + 1);
                        }
                      }}
                      style={{
                        fontSize: `${Math.max(
                          0.9 - refusedCount * 0.1,
                          0.4
                        )}rem`,
                        padding: `${Math.max(
                          0.4 - refusedCount * 0.05,
                          0.2
                        )}rem ${Math.max(0.9 - refusedCount * 0.1, 0.3)}rem`,
                        width: `${Math.max(100 - refusedCount * 20, 40)}px`,
                        position: refusedCount >= 2 ? "absolute" : "relative",
                        top:
                          refusedCount >= 2
                            ? `${Math.random() * 120}px`
                            : undefined,
                        left:
                          refusedCount >= 2
                            ? `${Math.random() * 200 - 100}px`
                            : undefined,
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      Hămm 😤
                    </button>
                  </div>
                </>
              ) : (
                <div className="fade-in" style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      color: "#ff6b81",
                      textShadow: "0 0 5px rgba(3, 9, 21, 0.8)",
                    }}
                  >
                    💞 Hihi cảm ơn em! Hun nè 💞
                  </p>
                  <img
                    src={kiss}
                    alt="Cute kiss"
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      borderRadius: "20px",
                      boxShadow: "0 0 20px rgba(255,255,255,0.4)",
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BirthdayCard;
