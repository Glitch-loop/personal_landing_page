import colors from "../utils/colors"
import { motion } from "framer-motion"

function ItemGlossary ({idItem, text}) {
  return (
    <motion.div
      whileHover={{scale: 1.1}}
      whileTap={{ scale: 0.9 }}
      className="w-3/4 flex flex-row items-center cursor-pointer"
    >
      <div>
        <div style={{background: colors[idItem]}} className="w-12 h-12 rounded-full my-3"></div>
      </div>
      <span className="ml-2 text-wrap">{text}</span>
    </motion.div>
  )
}

export default ItemGlossary