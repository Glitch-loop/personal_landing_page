const nodesExperience = [
  {
    id: '0',
    type: 'circle_today',
    data: { label: 'Today' },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'circle_education',
    data: { label: 'Study' },
    position: { x: 100, y: 200 },
  },
  {
    id: '2',
    type: 'circle_internship',
    data: { label: 'Internship' },
    position: { x: 200, y: 300 },
  },
  {
    id: '3',
    type: 'circle_scholar_service',
    data: { label: 'Data'},
    position: { x: 0, y: 400 },
  },
  {
    id: '4',
    type: 'circle_side_project',
    data: { label: 'Hello'},
    position: { x: 150, y: 500 },
  },
];

const edgesExperience = [
  {
    id: 'e0-1',
    source: '0',
    target: '1',
    animated: true,
    style: { stroke: '#d9d9d9' },
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#d9d9d9' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: '#d9d9d9' },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    style: { stroke: '#d9d9d9' },
  },
];


export {
  nodesExperience,
  edgesExperience
};