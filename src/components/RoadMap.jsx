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

function RoadMap({secreenWidth, edges, nodes, selectNode}) {
  const onNodeClick = (event, node) => {
    selectNode(node)
  };
  return (
    <div 
      className='w-11/12 h-5/6 outline outline-1 outline-base-color'
    >
      
      <ReactFlow 
        nodes={nodes} 
        edges={edges}
        style={rfStyle}
        nodeTypes={nodeTypes}
        panOnScroll
        panOnDrag={true}
        preventScrolling={false}
        onNodeClick={onNodeClick}
        // fitView
        // fitViewOptions={{
        //   padding: 0,
        //   maxZoom: 50,
        //   minZoom: -50,
        //   // duration: 5,
        //   nodes: nodes[0]
        // }}
        // fitView
        // defaultViewport={{x:500, y:100, zoom: 0}}
        defaultViewport={{
          x: secreenWidth, y:100, zoom: -5
        }}
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
