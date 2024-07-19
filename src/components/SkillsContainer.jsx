import SkillGroup from "./SkillComponents/SkillGroup"
import { developingSkills, testingSkills, devOpsSkill } from "../utils/skillsData"

function SkillsContainer() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full flex basis-1/5 justify-start items-center text-3xl">
        <span>Developing / Testing / DevOps</span>
      </div>
      <div className="w-full h-full flex basis-4/5">
        <SkillGroup skills={developingSkills}/> 
        
      </div>
    </div>
  )
}


export default SkillsContainer