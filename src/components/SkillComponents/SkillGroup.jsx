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
          <span className={`ml-2 md:ml-0 mb-3 text-sm md:text-xl`}>{skill.groupName}</span>
          <div className="max-h-56 w-full h-full flex flex-row justify-around text-center flex-auto">
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
                  return <SkillItemRed 
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
