import IndexComponent from "../components/IndexComponent"
import SkillsContainer from "../components/SkillsContainer"
import TitleSection from "../components/TitleSection"

function Skill() {
  return(
    <div className="w-full h-full flex flex-col md:flex-row justify-center">
      <div className={`
        w-full h-full 
        flex flex-col basis-1/12 justify-center 
        md:justify-start md:basis-1/3
        `}>
        <div className={`
          flex basis-1/5 items-end justify-start
          ml-8
          md:ml-28
          `}>
          {/* <div className="mt-24 ml-24"> */}
            <TitleSection title={"Skills"} />
          {/* </div> */}
        </div>
        <div className="hidden md:flex basis-1/5"></div>
        <div className={`
          hidden
          md:flex basis-2/5 w-full items-end justify-start
          ml-14
          md:ml-28
          `}>
            <IndexComponent />
        </div>
        <div className="hidden md:flex basis-1/5"></div>
      </div>
      <div className={`
        text-wrap
        flex flex-col basis-11/12 justify-start items-center 
        
        md:basis-2/3 
        md:justify-center
        
        text-sm md:text-lg lg:text-xl xl:text-3xl
        `}
      
      // "w-full h-full flex basis-4/5 md:basis-2/3 justify-center items-center"
      >
        <SkillsContainer />
      </div>
    </div>
  )
}

export default Skill