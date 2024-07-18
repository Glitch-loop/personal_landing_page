import { ReactFlow, Controls, Background, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import colors from '../utils/colors';
import CircleNode from './CircleNode';
import ButtonEdge from './ButtonEdge';
import nodesExperience from '../utils/nodesExperience';

const nodeTypes = {
  circle: CircleNode,
};




const edges = [{ 
  id: '1-2', source: '1', target: '2' ,
  // style: { stroke: 'rgb(158, 118, 255)', strokeWidth: 5 },
}];

const edgeTypes = {
  button: ButtonEdge,
};


const rfStyle = {
  background: "#1E1E1E"
}

function RoadMap() {
  return (
    <div 
      className='w-full h-full'
    // style={{ height: '100%', width: '100%' }}
    >
      <ReactFlow 
        nodes={nodesExperience} 
        edges={edges}
        style={rfStyle}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        panOnScroll
        panOnDrag={false}
        preventScrolling={false}
        > 
        <Background 
          variant={
            BackgroundVariant.Dots
          }
          color='#1E1E1E'
        />
        {/* <Controls /> */}
      </ReactFlow>
    </div>
  );
}

export default RoadMap;
