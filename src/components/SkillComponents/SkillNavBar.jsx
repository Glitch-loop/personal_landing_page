import { motion } from "framer-motion"

function SkillNavBar({itemSelected, onSelectItem}) {
  return (
    <motion.div
      className="flex flex-row justify-start items-center text-3xl"
    >
      <motion.div
        whileHover={{scale: 1.2 }}
        whileTap={{scale: 0.9}}
        // initial={{ color: "rgba(217, 217, 217, 0)" }}
        // whileInView={{ color: "rgba(217, 217, 217, 1)" }}
        // viewport={{once: true}}
        transition={{duration: 0.1}}
        className="cursor-pointer"
        onClick={() => {onSelectItem(0)}}
      >
        <span className={itemSelected!=0 ? " opacity-50" : ""}>Developing</span>
      </motion.div>
      <motion.span 
        // initial={{ color: "rgba(217, 217, 217, 0)" }}
        // whileInView={{ color: "rgba(217, 217, 217, 1)" }}
        // transition={{duration: 0.1, delay: 0.25}}
        // viewport={{once: true}}
        className="mx-3 cursor-default opacity-50">/</motion.span>
      <motion.div
        whileHover={{scale: 1.2 }}
        whileTap={{scale: 0.9}}
        // initial={{ color: "rgba(217, 217, 217, 0)" }}
        // whileInView={{ color: "rgba(217, 217, 217, 1)" }}
        transition={{duration: 0.1}}
        // viewport={{once: true}}
        className="cursor-pointer"
        onClick={() => {onSelectItem(1)}}
      >
        <span className={itemSelected!=1 ? " opacity-50" : ""}>Testing</span>
      </motion.div>
      <motion.span 
        // initial={{ color: "rgba(217, 217, 217, 0)" }}
        // whileInView={{ color: "rgba(217, 217, 217, 1)" }}
        // transition={{duration: 0.1, delay: 0.75}}
        // viewport={{once: true}}
        className="mx-3 cursor-default opacity-50">/</motion.span>
      <motion.div
        whileHover={{scale: 1.2 }}
        whileTap={{scale: 0.9}}
        transition={{duration: 0.1}}
        className="cursor-pointer"
        onClick={() => {onSelectItem(2)}}
        // initial={{ color: "rgba(217, 217, 217, 0)" }}
        // whileInView={{ color: "rgba(217, 217, 217, 1)" }}
        // viewport={{once: true}}
      >
        <span className={itemSelected!=2 ? " opacity-50" : ""}>DevOps</span>
      </motion.div>
    </motion.div>
  )
}


export default SkillNavBar