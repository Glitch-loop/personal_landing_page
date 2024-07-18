import { 
  ReactFlow, 
  Controls, 
  Background, 
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import {nodesExperience, edgesExperience} from '../utils/roadMapData';
import CircleNodeEducation from './circlesTimeLine/CircleNodeEducation';
import CircleNodeInternship from './circlesTimeLine/CircleNodeInternship';
import CircleNodeScholarService from './circlesTimeLine/CircleNodeScholarService';
import CircleNodeSideProject from './circlesTimeLine/CircleNodeSideProject';
import CircleNodeToday from './circlesTimeLine/CircleNodeToday';

const nodeTypes = {
  circle_education: CircleNodeEducation,
  circle_internship: CircleNodeInternship,
  circle_scholar_service: CircleNodeScholarService,
  circle_side_project: CircleNodeSideProject,
  circle_today: CircleNodeToday,
};

const rfStyle = {
  background: "#1E1E1E"
}

function RoadMap({edges, nodes}) {
  // const [nodes, setNodes, onNodesChange] = useNodesState(nodesExperience);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(edgesExperience);
  return (
    <div 
      className='w-11/12 h-5/6 outline outline-1 outline-base-color'
    >
      <ReactFlow 
        nodes={nodes} 
        edges={edges}
        style={rfStyle}
        nodeTypes={nodeTypes}
        fitView
        panOnScroll
        panOnDrag={false}
        preventScrolling={false}
        > 
        <Background 
          color='#1E1E1E'
        />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default RoadMap;
