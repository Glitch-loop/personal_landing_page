import { useState, useEffect, useRef } from "react"
import RoadMap from "../components/RoadMap"
import IndexComponent from "../components/IndexComponent"
import Glossarycomponent from "../components/Glossarycomponent"
import { nodesExperience } from "../utils/roadMapData"
import { generateCoordinates, generateEdges } from "../utils/utilsFunctions"


function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(-1)
  const [nodesExperienceState, setNodesExperienceState] = useState([])
  const [edgesExperienceState, setEdgesExperienceState] = useState([])
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const { width } = elementRef.current.getBoundingClientRect();
      

      console.log("Output nodes: ", generateCoordinates(nodesExperience, width))
      // Creating the coordinates of the nodes
      setNodesExperienceState(generateCoordinates(nodesExperience, width))

      // Creating the edges of the nodes
      console.log("Output edges: ", generateEdges(nodesExperience))
      setEdgesExperienceState(generateEdges(nodesExperience))
    }
  }, [selectedExperience]);
  


  return(
    <div className="w-full h-full flex flex-row justify-center">
        <div className="w-full h-full flex flex-col basis-1/3">
          <div className="flex basis-1/5 flex-row  items-start">
            <div className="mt-24 ml-24">
              <span className="text-6xl">Experience</span>
            </div>
          </div>
          <div 
            className="ml-24 w-full flex basis-2/5 flex-row items-center"
            ref={elementRef}
            >
            <Glossarycomponent state={selectedExperience} onSelect={setSelectedExperience}/>
          </div>
          <div className="w-full flex basis-2/5 flex-row items-end">
            <div className="w-full flex mb-24 ml-24">
              <IndexComponent />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex basis-2/3 justify-center items-center">
          <RoadMap nodes={nodesExperienceState} edges={edgesExperienceState}/>
        </div>
    </div>
  )
}

export default Experience