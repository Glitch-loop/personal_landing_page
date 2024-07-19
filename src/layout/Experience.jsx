import { useState, useEffect, useRef } from "react"
import RoadMap from "../components/RoadMap"
import IndexComponent from "../components/IndexComponent"
import Glossarycomponent from "../components/Glossarycomponent"
import { nodesExperience } from "../utils/roadMapData"
import { generateCoordinates, generateEdges } from "../utils/utilsFunctions"
import { motion } from "framer-motion"
import TitleSection from "../components/TitleSection"

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(-1)
  const [nodesExperienceState, setNodesExperienceState] = useState([])
  const [edgesExperienceState, setEdgesExperienceState] = useState([])
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const { width } = elementRef.current.getBoundingClientRect();      
      if (selectedExperience == -1) {
        // Creating the coordinates of the nodes
        setNodesExperienceState(generateCoordinates(nodesExperience, width))
  
        // Creating the edges of the nodes
        setEdgesExperienceState(generateEdges(nodesExperience))
      } else {
        let nodesToShow = []
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

        let sortedNodesToShow = nodesToShow.sort()
        // Creating the coordinates of the nodes
        setNodesExperienceState(generateCoordinates(sortedNodesToShow, width))
  
        // Creating the edges of the nodes
        setEdgesExperienceState(generateEdges(sortedNodesToShow))
      }
      

    }
  }, [selectedExperience]);
  
  return(
    <div className="w-full h-full flex flex-row justify-center">
        <div className="w-full h-full flex flex-col basis-1/3">
          <div className="flex basis-1/5 flex-row  items-start">
            <div className="mt-20 ml-24">
              <TitleSection
               title={"Experience"}>
              <motion.span 
                initial={{ color: "rgba(217, 217, 217, 0)" }}
                whileInView={{ color: "rgba(217, 217, 217, 1)" }}
                transition={{duration: 5}}
                viewport={{once: true}}
                className="ml-2 italic"
              >& more</motion.span>
              </TitleSection>
              {/* <span className="text-4xl">
                
                <motion.span 
                  initial={{ color: "rgba(217, 217, 217, 0)" }}
                  whileInView={{ color: "rgba(217, 217, 217, 1)" }}
                  transition={{duration: 5}}
                  viewport={{once: true}}
                  className="ml-2 italic"
                >& more</motion.span>
                </span> */}
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