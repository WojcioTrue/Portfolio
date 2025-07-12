import { useContext } from "react";
import { SkillPromptContext } from "./SkillPromptContextProvider";
import { motion } from "framer-motion";

const SkillText = () => {
  const { promptSkill } = useContext(SkillPromptContext);
  const { skill } = promptSkill;
  return (
    <motion.div id="skill-text" className="mx-6 py-[30px] text-white">
      <motion.p
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.8,
          },
        }}
        className="text-4xl"
      >
        {skill.name}
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.9,
          },
        }}
        className="my-3 h-[1px] w-full bg-my-lightBackground"
      ></motion.div>
      <motion.p
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 1,
          },
        }}
      >
        {skill.text}
      </motion.p>
    </motion.div>
  );
};

export default SkillText;
