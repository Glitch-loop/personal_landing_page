import { memo } from 'react';
import { Background, Handle, Position, useStore } from '@xyflow/react';
import { motion } from 'framer-motion'

const CircleNodeToday = ({data, id}) => {
  return (
      <motion.div 
        whileHover={{scale: 1.1}}
        whileTap={{ scale: 0.9 }}
        className='flex flex-row items-center cursor-pointer'
        >
        <div 
          onClick={() => {console.log("Hola mundo")}}
          className="w-12 h-12 bg-project-color-yellow  rounded-full text-nowrap">
          <Handle 
            type="target" 
            className='outline outline-0 bg-project-color-yellow mr-12'
            position={Position.Top} 
            id={`${id}.top`}
            />
          <Handle 
            className='outline outline-0 bg-project-color-yellow'
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


export default CircleNodeToday
// export default memo(({ id }) => {
//     const label = useStore((s) => {
//     const node = s.nodeLookup.get(id);

//     if (!node) {
//       return null;
//     }
//   });

//   return (
//     <>
//     <Handle type='source' position={Position.Bottom}/>
//     <Handle type='source' position={Position.Top}/>
    
//       <div 
//       onClick={() => {console.log("Hola mundo")}}
//       className="w-12 h-12 bg-project-color-blue  rounded-full">
//         <div>Hola mundo</div>
//       </div>
//     </>
//   );
// });
