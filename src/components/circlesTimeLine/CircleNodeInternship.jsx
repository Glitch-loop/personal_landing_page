import { memo } from 'react';
import { Background, Handle, Position, useStore } from '@xyflow/react';
import { motion } from 'framer-motion'

const CircleNodeInternship = ({data, id}) => {
  return (
      <motion.div 
        whileHover={{scale: 1.1}}
        whileTap={{ scale: 0.9 }}
        className='flex flex-row items-center cursor-pointer'
        onClick={() => {console.log("Hola mundo")}}
        >
        <div 
          className="w-12 h-12 bg-project-color-red  rounded-full text-nowrap">
          <Handle 
            type="target" 
            className='outline outline-0 bg-project-color-red mr-12'
            position={Position.Top} 
            id={`${id}.top`}
            />
          <Handle 
            className='outline outline-0 bg-project-color-red'
            type="source" 
            position={Position.Bottom} 
            id={`${id}.bottom`} />
        </div>
          <span className='ml-3'>
            {data.label}
          </span>
      </motion.div>
  )
}

export default CircleNodeInternship