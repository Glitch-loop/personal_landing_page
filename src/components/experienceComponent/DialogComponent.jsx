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
          transition={{duration: 0.5}}
          style={{ backgroundColor: 'rgba(18, 18, 18,0.5)'}}
          onClick={() => {
            setShowDialog(false)
            onClose(null)
          }}
          className="w-full h-full absolute text-background-color inset-0 flex flex-col justify-center items-center z-20 overflow-y-hidden overflow-x-hidden">
            {/* Container of the dialog */}
            <div 
              onClick={(e) => {e.stopPropagation();}}
              className="flex flex-col relative w-3/4 sm:w-2/4 h-5/6 bg-base-color rounded-lg">
              {/* Close item */}
              <div className="flex flex-row basis-1/12 mt-5 mr-5 md:mr-10 justify-end items-start">
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
                    h-7 w-7 text-xs
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
              <div className="flex flex-col basis-11/12 max-w-full overflow-x-hidden overflow-y-auto">
                {children}
              </div>
            </div>
        </motion.div>
      }
    </>
  )
}

export default DialogComponent