import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion"
import { email, socialNetworks } from "../../utils/contactInformation";
import colors from "../../utils/colors";
import CopyToClipboard from "react-copy-to-clipboard";
// import ReactTooltip from 'react-tooltip';

function ContactComponent() {
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');
  const [emailHovered, setEmailHovered] = useState(false)
  const [emailClicked, setEmailClicked] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setEmailClicked(false)
    }, 5000)
  },[emailClicked])

  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      // alert('Text copied to clipboard!');
    } catch (err) {
      // console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center">
        <div className="flex flex-col basis-1/2 items-center justify-center">
          <div className="flex flex-row basis-11/12 items-end">
            <motion.span
              whileTap={{scale: 0.9 }}
              transition={{duration: 0.1}}
              
              className="cursor-pointer flex flex-row"
              onClick={() => {
                copyTextToClipboard()
                setEmailClicked(true)
              }}
              onHoverStart={() => {setEmailHovered(true)}}
              onHoverEnd={() => {setEmailHovered(false)}}
              
            >
              {email}
            </motion.span>
          </div>
            <div className="flex flex-row basis-1/12 items-start mt-2">
              { (emailHovered && !emailClicked) &&
                <motion.span 
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{ duration: 1 }}
                  className="text-sm">(Click to copy)
                </motion.span>
              }
              { emailClicked &&
                <motion.span 
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{ duration: 1 }}
                  className="text-sm">(Copied!!!)
                </motion.span>
              }
            </div>
        </div>
        <div className={`
          flex flex-row basis-1/2 items-center justify-around
          text-4xl lg:text-7xl
          `}>
          <motion.a 
            whileHover={{
              scale: 1.2,
              color: colors[5]
            }}
            href={socialNetworks.instagram}>
            <FontAwesomeIcon icon={faInstagram} />
          </motion.a>
          <motion.a 
            whileHover={{
              scale: 1.2,
              color: colors[6]
            }}
            href={socialNetworks.github}>
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.a 
            whileHover={{
              scale: 1.2,
              color: colors[2]
            }}
          href={socialNetworks.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
        </div>
    </div>
  )
}

export default ContactComponent;
