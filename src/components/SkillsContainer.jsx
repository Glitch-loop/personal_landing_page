import { useState, useEffect } from "react"
import SkillGroup from "./SkillComponents/SkillGroup"
import { developingSkills, testingSkills, devOpsSkill } from "../utils/skillsData"
import SkillNavBar from "./SkillComponents/SkillNavBar"

function SkillsContainer() {
  const [itemSelected, setItemSelected] = useState(0)
  const [skillsToshow, setSkillsToshow] = useState(developingSkills)

  useEffect(() => {
    if (itemSelected == 0){
      setSkillsToshow(developingSkills)
    }else if(itemSelected == 1) {
      setSkillsToshow(testingSkills)
    } else if(itemSelected == 2) {
      setSkillsToshow(devOpsSkill)
    } else {
      setSkillsToshow(developingSkills)
    }


  },[itemSelected])

  return (
    <div className="w-full h-full flex flex-col items-center justify-start md:justify-center">
      <div 
      className="w-full flex basis-1/12 justify-center md:justify-start"
      >
        <SkillNavBar 
          itemSelected={itemSelected}
          onSelectItem={setItemSelected}
          />
      </div>
      <div 
        className="w-full h-full flex basis-8/12"
        >
        <SkillGroup 
          skills={skillsToshow}
          /> 
      </div>
    </div>
  )
}


export default SkillsContainer