import colors from "../utils/colors"
import { motion } from "framer-motion"

function ItemGlossary ({idItem, state, text}) {
  let style = "w-3/4 flex flex-row items-center cursor-pointer"
  if (state == -1) { // All items are selected
    style = "w-3/4 flex flex-row items-center cursor-pointer"
  } else if (state == idItem) { // Only this item was selected
    style = "w-3/4 flex flex-row items-center cursor-pointer"
  } else { // Other item was selected
    style = "w-3/4 flex flex-row items-center cursor-pointer opacity-50"
  }

  return (
    <motion.div
      whileHover={{scale: 1.1}}
      whileTap={{ scale: 0.9 }}
      className={style}
      >
      <div>
        <div style={{background: colors[idItem]}} className="w-10 h-10 xl:w-12 xl:h-12 rounded-full my-3"></div>
      </div>
      <span className="ml-2 text-wrap">{text}</span>
    </motion.div>
  )
}

export default ItemGlossary