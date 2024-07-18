import { useState } from "react"
import RoadMap from "../components/RoadMap"
import IndexComponent from "../components/IndexComponent"
import Glossarycomponent from "../components/Glossarycomponent"


function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(0)

  return(
    <div className="w-full h-full flex flex-row justify-center">
        <div className="w-full h-full flex flex-col basis-1/3">
          <div className="flex basis-1/5 flex-row  items-start">
            <div className="mt-24 ml-24">
              <span className="text-6xl">Experience</span>
            </div>
          </div>
          <div className="ml-24 w-full flex basis-2/5 flex-row items-center">
            <Glossarycomponent />
          </div>
          <div className="w-full flex basis-2/5 flex-row items-end">
            <div className="w-full flex mb-24 ml-24">
              <IndexComponent />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex basis-2/3 justify-center items-center">
          <RoadMap />
        </div>
    </div>
  )
}

export default Experience