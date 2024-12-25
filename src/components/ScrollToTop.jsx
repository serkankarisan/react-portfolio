import React, { useState, useEffect } from "react";
import { arrowUp } from "../assets";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Sayfa belli bir mesafeye kaydırıldığında butonu göster
  const handleScroll = () => {
    if (window.scrollY > 300) {
      // 300px'lik bir kaydırma mesafesi
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sayfayı en üste kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className={`scroll-top-button`}>
        <img style={{ width: "14px" }} src={arrowUp} alt="arrowUp" />
      </button>
    )
  );
};

export default ScrollToTop;
