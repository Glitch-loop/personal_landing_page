const nodesExperience = [
  {
    id: '0',
    type: 'circle_today',
    data: { label: 'Today' },
    position: { x: 0, y: 0 },
  },
  {
    id: '1',
    type: 'circle_side_project',
    data: { label: 'Landing page - Jule 2024' },
    position: { x: 100, y: 200 },
  },
  {
    id: '2',
    type: 'circle_education',
    data: { label: 'Bachelor\'s Degree in Computer Science Technologies - Aug 2020 to Jun 2024' },
    position: { x: 200, y: 300 },
  },
  {
    id: '3',
    type: 'circle_side_project',
    data: { label: 'Friend\'s friend project - May 2024'},
    position: { x: -300, y: 400 },
  },
  {
    id: '4',
    type: 'circle_education',
    data: { label: 'AWS Cloud Practitioner Essentials - March 2024'},
    position: { x: 300, y: 500 },
  },
  {
    id: '5',
    type: 'circle_internship',
    data: { label: 'Internship at Bosch - June 2023 to May 2024'},
    position: { x: 300, y: 600 },
  },
  {
    id: '6',
    type: 'circle_education',
    data: { label: 'Certalytics Project - Jan 2023 to June 2023'},
    position: { x: 300, y: 700 },
  },
  {
    id: '7',
    type: 'circle_education',
    data: { label: 'Scrum fundamentals Certified - April 2023'},
    position: { x: 300, y: 800 },
  },
  {
    id: '8',
    type: 'circle_education',
    data: { label: 'White belt Six Sigma - March 2023'},
    position: { x: 300, y: 900 },
  },
  {
    id: '9',
    type: 'circle_scholar_service',
    data: { label: 'Banco de trabajo - Jan 2022 to Dec 2022'},
    position: { x: 300, y: 1000 },
  },
  {
    id: '10',
    type: 'circle_education',
    data: { label: 'Rolac Project - Aug 2022 to Oct 2022 '},
    position: { x: 300, y: 1100 },
  },
  {
    id: '11',
    type: 'circle_education',
    data: { label: 'Multiagent simulation project - Oct 2022 to Dec 2022'},
    position: { x: 300, y: 1200 },
  },
  {
    id: '12',
    type: 'circle_side_project',
    data: { label: 'Financial analysis project - March 2021'},
    position: { x: 300, y: 1300 },
  },
  {
    id: '13',
    type: 'circle_education',
    data: { label: 'Software Development Processes and Methodologies - Dec 2020'},
    position: { x: 300, y: 1400 },
  },
  {
    id: '14',
    type: 'circle_education',
    data: { label: 'Software architecture - Dec 2020'},
    position: { x: 300, y: 500 },
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