import { useState, useEffect, useRef } from "react"
import RoadMap from "../components/RoadMap"
import IndexComponent from "../components/IndexComponent"
import Glossarycomponent from "../components/Glossarycomponent"
import { nodesExperience } from "../utils/roadMapData"
import { generateCoordinates, generateEdges } from "../utils/utilsFunctions"
import { motion } from "framer-motion"
import TitleSection from "../components/TitleSection"
import DialogComponent from "../components/experienceComponent/DialogComponent"
import ExperienceDescription from "../components/experienceComponent/ExperienceDescription"

function Experience({currentSection}) {
  const [selectedExperience, setSelectedExperience] = useState(-1)
  const [nodesExperienceState, setNodesExperienceState] = useState([])
  const [edgesExperienceState, setEdgesExperienceState] = useState([])
  const [nodesExperienceStateFull, setNodesExperienceStateFull] 
    = useState(generateCoordinates(nodesExperience, 300))
  const [edgesExperienceStateFull, setEdgesExperienceStateFull] = 
  useState(generateEdges(nodesExperience))
  const [screenWidth, setScreenWidth] = useState(150)
  const [experienceToShow, setExperienceToShow] = useState(null)
  const [showDialog, setShowDialog] = useState(null)


  const elementRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 300) {
      setScreenWidth(150)
    } else {
      setScreenWidth(500)
    }
  }, [])


  useEffect(() => {
    if (window.innerWidth < 300) {
      setScreenWidth(150)
    } else {
      setScreenWidth(500)
    }

    if (selectedExperience == -1) {
      // // Creating the coordinates of the nodes
      // setNodesExperienceStateFull(generateCoordinates(nodesExperience, width))

      // // Creating the edges of the nodes
      // setEdgesExperienceStateFull(generateEdges(nodesExperience))
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
  }, [selectedExperience]);
  
  return(
    <div className="relative w-full h-full flex flex-col md:flex-row justify-center">
      {experienceToShow != null &&
        <DialogComponent openDialog={true} onClose={setExperienceToShow}>
          <ExperienceDescription />
        </DialogComponent>
      }
      <div className="w-full h-full flex flex-col basis-1/3 justify-center">
        <div 
          className={`
            flex basis-1/5 items-end justify-start 
            ml-10 
            md:ml-16
            `}
        >
          <TitleSection
            title={"Experience"}>
            <motion.span 
              initial={{ color: "rgba(217, 217, 217, 0)" }}
              whileInView={{ color: "rgba(217, 217, 217, 1)" }}
              transition={{duration: 5}}
              viewport={{once: true}}
              className="ml-1 md:ml-2 italic"
            >& more</motion.span>
          </TitleSection>
        </div>
        <div 
          className={`
              flex flex-row basis-2/5 items-center
              mt-3 md:mt-0
              ml-12 md:ml-20 lg:ml-24
              `}
          ref={elementRef}
          >
          <Glossarycomponent state={selectedExperience} onSelect={setSelectedExperience}/>
        </div>
        <div className={`
          hidden
          md:flex basis-2/5 flex-row items-start w-full
          ml-10 
          md:ml-16
          `}>
            <IndexComponent 
              currentSection={currentSection}/>
        </div>
      </div>
      <div className="w-full h-full flex basis-2/3 justify-center items-center">
            {/* { selectedExperience == -1 ?
              <RoadMap nodes={[]} edges={[]}/>:
              <RoadMap nodes={[]} edges={[]}/>
            } */}
            { selectedExperience == -1 ?
              <RoadMap 
                nodes={nodesExperienceStateFull} 
                edges={edgesExperienceStateFull} 
                secreenWidth={screenWidth}
                selectNode={setExperienceToShow}
                />:
              <RoadMap 
                nodes={nodesExperienceState} 
                edges={edgesExperienceState}
                secreenWidth={screenWidth}
                selectNode={setExperienceToShow}
                />
            }
      </div>
    </div>
  )
}

export default Experience