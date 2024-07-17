import { faChevronRight, faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function StartButtom() {
  return (
    <div 
      className="flex justify-center items-center w-24 h-24  rounded-full bg-base-color text-background-color text-5xl "
      >
        <FontAwesomeIcon icon={faAnglesRight} />
    </div>
  )
}


export default StartButtom