import { useState } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

function DialogComponent({ openDialog, onClose, children }) {
  const [showDialog, setShowDialog] = useState(openDialog);

  return (
    <>
      { showDialog &&
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 2}}
          style={{ backgroundColor: 'rgba(18, 18, 18,0.5)'}}
          className="w-full h-full absolute text-background-color inset-0 flex flex-col justify-center items-center z-20">
            <div className="flex flex-col w-2/4 h-3/5 bg-base-color rounded-lg justify-center items-center">
              <div className="flex flex-row basis-1/6 w-11/12 justify-end items-center">
                <motion.div
                  whileHover={{
                    scale: 1.2
                  }}
                  whileTap={{
                    scale: 0.9, 
                    opacity: 0.8
                  }}
                  className={`
                  bg-project-color-gray rounded-full cursor-pointer
                    flex items-center justify-center text-center
                    mr-3
                    md:mr-0
                    h-5 w-5 text-xs
                    md:h-10 md:w-10 md:text-lg  
                  `}
                  onClick={() => {
                    setShowDialog(false)
                    onClose(null)
                  }}
                  >
                  <FontAwesomeIcon icon={faX} />
                </motion.div>
              </div>
              <div className="flex flex-col basis-5/6 justify-center items-center">
                {children}
              </div>
            </div>
        </motion.div>
      }
    </>
  )
}

export default DialogComponent