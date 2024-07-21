/*
  To graph the map it is being used "React flow".

  The information that needs the library to define a node is:
    id: Refers to the unique identifier of the node in the map.
    type: It is a mechanism provided by the library that allows you to define your own nodes. With 
          this mechanism you can create a node adding it behavior and design.
    data: It is basically used to put the information contained in the node
    position: The position in the canvas.

  Complementary information:
    more_information: As the name suggest, this field is used to add
    complementary information... In this context information that 
    describes in detail the experience.

  How is the JSON structured:
    {
      id: <string>,
      type: <string>,
      data: { label: <string> },
      position: { x: <number>, y: <number> },
      moreInformation: {
        title: <string>,
        linkPhoto: <string (link)>,
        role: <string>,
        duration: <string>,
        teamSize: <string>,
        technologies: [<string>],
        linkToApplication: <string (link)>,
        description: <string>,
        messageForResponsabilities: <string>,
        responsabilities: [<string>],
        messageForChallenges: <string>,
        principalChallenges: [<string>],
        messageForLearning: <string>
        learnings: [<string>],
        messageForImpacts: <string>,
        impact: [<string>],
        futureScope: <string>
      }
    }

    Template
    {
      id: "",
      type: "",
      data: { label: "" },
      position: { x: 0, y: 0 },
      moreInformation: {
        linkPhoto: "",
        role: "",
        duration: "",
        teamSize: "",
        technologies: [""],
        linkToApplication: "",
        description: "",
        messageForResponsabilities: "",
        responsabilities: [""],
        messageForChallenges: "",
        principalChallenges: [""],
        messageForLearning: "",
        learnings: [""],
        messageForImpacts: "",
        impacts: [""],
        futureScope: ""
      }
    }
*/

const nodesExperience = [
  {
    id: '0',
    type: 'circle_today',
    data: { label: 'Today' },
    position: { x: 0, y: 0 },
    more_information: 'Hello world this is a message that describes thiss experience'
  },
  {
    id: '1',
    type: 'circle_side_project',
    data: { label: 'Personal landing page - Jule 2024' },
    position: { x: 100, y: 200 },
    moreInformation: {
      title: "Personal landing page",
      linkPhoto: "https://i.pinimg.com/originals/25/2d/e9/252de9410dba461a7f27d9b7eebad0e2.jpg",
      role: "Frontend Developer",
      duration: "1 week",
      teamSize: "5",
      technologies: ["React", "Tailwind", "Framer Motion"],
      linkToApplication: "https://fontawesome.com/search?q=x&o=r",
      description: `Until this project I considered myself as a backend engineer, it was not because web design caught my attention that I decided to give an opportunity to frontend development, of course, I had had past experience in frontend developing using tailwind, react and other front technologies but it was until this project that I gave a little time to learn more about the field.
      Realizing that I didn't have a personal website I took advantage of the situation and I decided to create this website... Helping me both to have a personal site and to get hands-on experience in frontend developing.`,
      messageForResponsabilities: "lorem ipsum testing text",
      responsabilities: ["lorem ipsum testing text"],
      messageForChallenges: `Since I had a little of experience in frontend development I had to learn (and re-learn) technologies. One aspect of this project on which I struggled a lot was in the animations of the components.. It was totally new for me.`,
      principalChallenges: ["lorem ipsum testing text"],
      messageForLearning: `This project left me three principal experiences`,
      learnings: ["An introduction to web design (UI/UX).", "Hands on experience creating a frontend project.", "Have an open mind related to fields that at the moment you might say that you don't like it."],
      messageForImpacts: "lorem ipsum testing text",
      impacts: [`Boost my professional career having a website created by myself.`],
      futureScope: "lorem ipsum testing text"
    }
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
    data: { label: 'AWS Cloud Practitioner Essentials - May 2024'},
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
    type: 'circle_scholar_service',
    data: { label: 'Renovating Tec de Monterrey web site - Jan 2023 to June 2023'},
    position: { x: 300, y: 600 },
  },
  {
    id: '7',
    type: 'circle_education',
    data: { label: 'Certalytics Project - Jan 2023 to June 2023'},
    position: { x: 300, y: 700 },
  },
  {
    id: '8',
    type: 'circle_education',
    data: { label: 'Scrum fundamentals Certified - April 2023'},
    position: { x: 300, y: 800 },
  },
  {
    id: '9',
    type: 'circle_education',
    data: { label: 'White belt Six Sigma - March 2023'},
    position: { x: 300, y: 900 },
  },
  {
    id: '10',
    type: 'circle_scholar_service',
    data: { label: 'Banco de trabajo - Jan 2022 to Dec 2022'},
    position: { x: 300, y: 1000 },
  },
  {
    id: '11',
    type: 'circle_education',
    data: { label: 'Rolac Project - Aug 2022 to Oct 2022 '},
    position: { x: 300, y: 1100 },
  },
  {
    id: '12',
    type: 'circle_education',
    data: { label: 'Multiagent simulation project - Oct 2022 to Dec 2022'},
    position: { x: 300, y: 1200 },
  },
  {
    id: '13',
    type: 'circle_side_project',
    data: { label: 'Financial analysis project - March 2021'},
    position: { x: 300, y: 1300 },
  },
  {
    id: '14',
    type: 'circle_education',
    data: { label: 'Software Development Processes and Methodologies - Dec 2020'},
    position: { x: 300, y: 1400 },
  },
  {
    id: '15',
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