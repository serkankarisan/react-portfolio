import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-french text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Özet</p>
        <h2 className={styles.sectionHeadText}>Genel Bakış</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-french text-[18px] leading-[30px]"
      >
        Deneyimli bir Yazılım Geliştirici olarak, C#, .NET ve JavaScript gibi
        çeşitli teknolojilerde güçlü teknik becerilere ve uygulama deneyimine
        sahibim. Özellikle endüstriyel otomasyon, IoT platformları ve web
        tabanlı uygulama geliştirme konularında uzmanlaştım. Projelerimde hem
        Back-End hem de Front-End geliştirme süreçlerinde aktif rol alarak
        kullanıcı dostu, performanslı ve sürdürülebilir yazılım çözümleri
        sunmayı hedefliyorum. Modern yazılım geliştirme prensiplerine uygun
        olarak temiz, okunabilir ve uzun vadede kolayca sürdürülebilir kodlar
        yazmaya özen gösteriyorum. Yeni teknolojilere hızlı bir şekilde uyum
        sağlama yeteneğim ve yenilikçi yaklaşımım sayesinde projelerde yüksek
        verimlilik ve kalite standartlarını yakalamayı amaçlıyorum. Yazılım
        geliştirme sürecinde sürekli öğrenme ve kendimi geliştirme prensibiyle
        hareket ederek, iş süreçlerine değer katan sonuçlar üretmeye
        odaklanıyorum.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
