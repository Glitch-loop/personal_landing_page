import { useState } from "react";
import { motion } from "framer-motion";

function SkillItemRed({skillName, expertise}) {
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
    <div className="flex flex-col w-full h-full justify-center items-center">
      <motion.div
        whileHover={{scale: 1.2 }}
        whileTap={{scale: 0.9 }}
        transition={{duration: 0.1}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSelect}
        className={!isSelected ? `cursor-pointer bg-transparent flex basis-3/4 items-center justify-center w-20 h-20 outline outline-2 outline-project-color-red text-project-color-red rounded-full hover:outline-1 hover:bg-project-color-red hover:text-background-color  duration-200 text-base text-center` : `cursor-pointer w-20 h-20 bg-project-color-red rounded-full flex flex-row items-center justify-center text-base text-center text-background-color`}
        >
        { (!isHovered && !isSelected) ? <span>{skillName}</span> :
          <span className='text-2xl font-bold'>{expertise}%</span>
        }
      </motion.div>
      <div className="flex flex-row w-full basis-1/4 justify-center">
        { isSelected &&
          <motion.span 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="flex flex-row w-full  items-center justify-center text-project-color-red text-center text-wrap"
            >{skillName}</motion.span>
        }
      </div>
    </div>
  )
}

export default SkillItemRed