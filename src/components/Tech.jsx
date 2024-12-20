import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Hover durumundaki öğeyi takip et
  const [isAnimating, setIsAnimating] = useState(true); // Animasyon durumu
  const animationDuration = 0.5; // Animasyon süresi (saniye cinsinden)
  const animationDelayStep = 0.5; // Her eleman için gecikme süresi (saniye cinsinden)

  // Toplam animasyon süresini hesapla
  const totalAnimationTime =
    animationDuration + (technologies.length - 1) * animationDelayStep;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false); // Animasyonu durdur
      setTimeout(() => setIsAnimating(true), 50); // Kısa bir bekleme ile yeniden başlat
    }, totalAnimationTime * 1000); // Tüm animasyonların süresini bekle

    return () => clearTimeout(timeout); // Temizlik
  }, [isAnimating, totalAnimationTime]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Becerilerim</p>
        <h2 className={styles.sectionHeadTextLight}>Teknolojiler</h2>
      </motion.div>

      <div className="flex flex-wrap gap-4 justify-center">
        {technologies
          .sort((a, b) => a.index - b.index)
          .map((skill, i) => (
            <div
              key={i} // Key artık sabit kalır, yenileme olmaz
              data-aos="fade-up"
              data-aos-delay={i * animationDelayStep * 1000}
              className={`relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border border-slate-200 tech-box ${
                  isAnimating ? "animating" : ""
                }`} // Animasyon durumu kontrol ediliyor
              style={{
                animation: isAnimating
                  ? `shake ${animationDuration}s ease-in-out ${
                      i * animationDelayStep
                    }s`
                  : "none", // Animasyonu durdur
                animationPlayState:
                  hoveredIndex === null || hoveredIndex === i
                    ? "running"
                    : "paused", // Sadece hover durumundaki öğe çalışır
              }}
              onMouseEnter={() => setHoveredIndex(i)} // Hover durumunu ayarla
              onMouseLeave={() => setHoveredIndex(null)} // Hover'dan çıkıldığında sıfırla
            >
              <div>
                <img
                  src={skill.icon}
                  alt="..."
                  className="w-20 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
