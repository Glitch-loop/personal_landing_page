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
        <div
        key={skill.groupName} 
        className="w-full h-full flex flex-col">
          <span className="mb-3">{skill.groupName}</span>
          <div className="max-h-28 w-full h-full flex flex-row justify-around text-center">
            { skill.set.map(item =>  {
              if (skill.groupDesign == 0){
                return <SkillItemBlue 
                  key={item.skillName}
                  idSkill={item.idSkill}
                  skillName={item.skillName} 
                  expertise={item.expertise} 
                  />
                } else if (skill.groupDesign == 1){
                  return <SkillItemOrange 
                    key={item.skillName}
                    idSkill={item.idSkill}
                    skillName={item.skillName} 
                    expertise={item.expertise} 
                    />
                } else if (skill.groupDesign == 2){
                  return <SkillItemGreen 
                    key={item.skillName}
                    idSkill={item.idSkill}
                    skillName={item.skillName} 
                    expertise={item.expertise} 
                    />
                }else if (skill.groupDesign == 3){
                  return <SkillItemYellow 
                    key={item.skillName}
                    idSkill={item.idSkill}
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
