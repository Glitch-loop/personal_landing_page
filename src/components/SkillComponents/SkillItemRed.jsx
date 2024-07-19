import { useState } from "react";
import { motion } from "framer-motion";
import { skillVariants } from "../../utils/skillsVariants";

function SkillItemRed({idSkill, skillName, expertise}) {
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
      <div>
        <motion.div
          whileHover={{scale: 1.2 }}
          whileTap={{scale: 0.9 }}
          transition={{duration: 0.1}}
          initial="closed"
          whileInView="open"
          variants={skillVariants}
          custom={idSkill}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleSelect}
          className={!isSelected 
            ? `
            cursor-pointer bg-transparent text-center
            outline outline-2 outline-project-color-red text-project-color-red rounded-full 
            
            w-14 h-14
            md:w-20 md:h-20
            
            flex basis-3/4 items-center justify-center

            text-xs
            md:text-base 

            hover:outline-1 hover:bg-project-color-red hover:text-background-color duration-200 
            ` 
            : `
            cursor-pointer bg-project-color-red rounded-full text-center text-background-color
            
            w-14 h-14
            md:w-20 md:h-20

            text-xs
            md:text-base

            flex flex-row items-center justify-center
            `}
          >
          { (!isHovered && !isSelected) ? <span>{skillName}</span> :
            <span className='text-lg md:text-2xl font-bold'>{expertise}%</span>
          }
        </motion.div>
      </div>
      <div className="flex flex-row w-full basis-1/4 justify-center">
        { isSelected &&
          <motion.span 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className={`
              w-full text-project-color-red text-center text-wrap
              flex flex-row  items-center justify-center
              text-xs
              md:text-base 
            `}
            >{skillName}</motion.span>
        }
      </div>
    </div>
  )
}

export default SkillItemRed