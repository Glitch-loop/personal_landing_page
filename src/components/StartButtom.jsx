import { faChevronRight, faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function StartButtom() {
  return (
    <div 
      className={`
        flex justify-center items-center 
        rounded-full bg-base-color text-background-color
        w-10 h-10
        md:w-16 md:h-16
        lg:w-24 lg:h-24
        
        `}
      >
        <FontAwesomeIcon icon={faAnglesRight} />
    </div>
  )
}


export default StartButtom