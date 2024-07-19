import { motion } from "framer-motion"
import SkillItemBlue from "./SkillItemBlue"
import SkillItemGreen from "./SkillItemGreen"
import SkillItemOrange from "./SkillItemOrange"
import SkillItemRed from "./SkillItemRed"
import SkillItemYellow from "./SkillItemYellow"

function SkillGroup({skills}) {
  return (
    <motion.div className="w-full h-full flex flex-col">
      { skills.map(skill => (
        <div className="w-full h-full flex flex-col">
          <span className="mb-3">{skill.groupName}</span>
          <div className="w-full h-full flex flex-row">
            { skill.set.map(item =>  {
              if (skill.groupDesign == 0){
                return <SkillItemBlue 
                  skillName={item.skillName} 
                  expertise={item.expertise} 
                  />
                } else if (skill.groupDesign == 1){
                  return <SkillItemOrange 
                    skillName={item.skillName} 
                    expertise={item.expertise} 
                    />
                } else if (skill.groupDesign == 2){
                  return <SkillItemGreen 
                    skillName={item.skillName} 
                    expertise={item.expertise} 
                    />
                }else if (skill.groupDesign == 3){
                  return <SkillItemYellow 
                    skillName={item.skillName} 
                    expertise={item.expertise} 
                    />
              }
            }
            )}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default SkillGroup
