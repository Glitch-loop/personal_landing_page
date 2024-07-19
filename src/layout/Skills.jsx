import IndexComponent from "../components/IndexComponent"
import SkillsContainer from "../components/SkillsContainer"
import TitleSection from "../components/TitleSection"

function Skill() {
  return(
    <div className="w-full h-full flex flex-row justify-center">
        <div className="w-full h-full flex flex-col basis-1/3">
          <div className="flex basis-1/2 flex-row  items-start">
            <div className="mt-24 ml-24">
              <TitleSection title={"Skills"} />
            </div>
          </div>
          <div className="w-full flex basis-1/2 flex-row items-end">
            <div className="w-full flex mb-24 ml-24">
              <IndexComponent />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex basis-2/3 justify-center items-center">
          <SkillsContainer />
        </div>
    </div>
  )
}

export default Skill