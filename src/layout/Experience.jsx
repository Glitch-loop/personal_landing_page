import AboutMessageComponent from "../components/AboutMessageComponent"
import IndexComponent from "../components/IndexComponent"
import Glossarycomponent from "../components/Glossarycomponent"

function Experience() {
  return(
    <div className="w-full h-full flex flex-row justify-center">
        <div className="w-full h-full flex flex-col basis-1/3">
          <div className="flex basis-1/3 flex-row  items-start">
            <div className="mt-24 ml-24">
              <span className="text-6xl">Experience</span>
            </div>
          </div>
          <div className="mb-16 ml-24 w-full flex basis-1/3 flex-row items-center">
            <Glossarycomponent />
          </div>
          <div className="w-full flex basis-1/3 flex-row items-end">
            <div className="w-full flex mb-24 ml-24">
              <IndexComponent />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex basis-2/3 justify-center items-center">
          <AboutMessageComponent />
        </div>
    </div>
  )
}

export default Experience