import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
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
            <motion.div
              key={i} // Key artık sabit kalır, yenileme olmaz
              className={`relative group w-full flex items-center
                  gap-5 p-5 max-w-sm rounded-md border border-slate-200 tech-box xs:w-[208px] sm:w-[250px]`}
              variants={textVariant()}
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
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
