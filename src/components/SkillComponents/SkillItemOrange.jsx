import { useState } from "react";
import { motion } from "framer-motion";

function SkillItemOrange({skillName, expertise}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };


  return (
    <div className="ml-6 flex flex-col h-full justify-center items-end text-center">
      <motion.div
        whileHover={{scale: 1.2 }}
        whileTap={{scale: 0.9 }}
        transition={{duration: 0.1}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSelect}
        className={!isSelected ? `bg-transparent w-20 h-20 outline outline-2 outline-project-color-orange text-project-color-orange rounded-full flex basis-4/5 items-center justify-center hover:outline-1 hover:bg-project-color-orange hover:text-background-color  duration-200 text-base text-center` : `w-20 h-20 bg-project-color-orange rounded-full flex items-center justify-center text-base text-center text-background-color`}
        >
        { (!isHovered && !isSelected) ? <span>{skillName}</span> :
          <span className='text-2xl font-bold'>{expertise}%</span>
        }
      </motion.div>
      <div className="flex flex-row w-full basis-1/4 justify-center text-center text-wrap">
        { isSelected &&
          <motion.span 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="text-project-color-orange"
            >{skillName}</motion.span>
        }
      </div>
    </div>
  )
}

export default SkillItemOrange