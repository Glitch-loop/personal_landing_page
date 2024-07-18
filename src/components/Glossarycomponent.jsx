import { motion } from "framer-motion";
import ItemGlossary from "./ItemGlossary";
import itemsGlossary from "../utils/itemsGlossary";

function Glossarycomponent() {
  console.log(itemsGlossary)
  return (
    <motion.div className="flex flex-col h-full w-full justify-center text-3xl">
        {itemsGlossary.map(item => (
          <motion.div
            key={item.id}
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2, delay: item.id*0.5}}
          >
            <ItemGlossary 
              idItem={item.id}
              text={item.text}
            />
          </motion.div>
        ))}
    </motion.div>
  )
}


export default Glossarycomponent;