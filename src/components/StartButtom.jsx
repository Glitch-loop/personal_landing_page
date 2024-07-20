import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { Link } from "react-scroll"

function StartButtom() {
  return (
    <Link 
    to={"section1"} 
    smooth={true} 
    duration={500}>
    <motion.div 
          whileHover={{scale: 1.1}}
          whileTap={{ scale: 0.9 }}
          className={`
            flex justify-center items-center 
            rounded-full bg-base-color text-background-color
            w-10 h-10
            md:w-16 md:h-16
            lg:w-24 lg:h-24 
            `}
          >
            <FontAwesomeIcon icon={faAnglesRight} />
        </motion.div>
    </Link>
    
  )
}


export default StartButtom