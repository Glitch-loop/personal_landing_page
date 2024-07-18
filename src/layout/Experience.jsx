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
      
      let nodesToShow = nodesExperience
      console.log("selectedExperience: ", selectedExperience)
      if (selectedExperience == 0){ // Only internship experience
        
        nodesToShow = nodesExperience.filter(item => {
          if (item.type === 'circle_today' || item.type === 'circle_internship') { return true } else { return false}
        })
          
      } else if(selectedExperience == 1) { // Only scholar service
        nodesToShow = nodesExperience.filter(item => {
          if (item.type === 'circle_today' || item.type === 'circle_scholar_service') { return true } else { return false}
        })
      } else if(selectedExperience == 2) { // Only Education service
        nodesToShow = nodesExperience.filter(item => {
          if (item.type === 'circle_today' || item.type === 'circle_education') { return true } else { return false}
        })
      } else if(selectedExperience == 3) { // Only certifications project
        nodesToShow = nodesExperience.filter(item => {
          if (item.type === 'circle_today' || item.type === 'circle_side_project') { return true } else { return false}
        })
      }

      // console.log("Output nodes: ", generateCoordinates(nodesToShow, width))
      // Creating the coordinates of the nodes
      setNodesExperienceState(generateCoordinates(nodesToShow, width))

      // Creating the edges of the nodes
      // console.log("Output edges: ", generateEdges(nodesToShow))
      setEdgesExperienceState(generateEdges(nodesToShow))

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