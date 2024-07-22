import { Link } from "react-scroll";
import { motion } from "framer-motion";

function ItemIndex({to_direct, state, children}) {
  return (
    <Link 
    to={to_direct} 
    smooth={true} 
    duration={500}
    className={to_direct === state ? 
      "my-2 md:w-2/6 xl:w-1/4 cursor-pointer text-left" : 
      "my-2 md:w-2/6 xl:w-1/4 cursor-pointer opacity-25 text-left"}
    >
      <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{ scale: 0.9 }}
        className="w-full text-start"
        >
        <span>{children}</span>
        <div className="bg-base-color h-1 rounded-full mt-2"></div>
      </motion.button>
    </Link>
  )
}

export default ItemIndex