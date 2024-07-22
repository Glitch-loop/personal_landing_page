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
        linkDescription: "",
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
      linkPhoto: "",
      role: "Frontend Developer.",
      duration: "1 Week.",
      teamSize: "",
      technologies: ["React", "Tailwind", "Framer Motion"],
      linkDescription: "",
      linkToApplication: "",
      description: `Until this project I considered myself as a backend engineer, it was not because web design caught my attention that I decided to give an opportunity to frontend development, of course, I had had past experiences in frontend development using tailwind, react and other front technologies but it was until this project that I gave a little time to learn more about the field.
      Realizing that I didn't have a personal website I took advantage of the situation and I decided to create this website... Helping me both have a personal site and gain hands-on experience in frontend development.`,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: `Since I had a little of experience in frontend development I had to learn (and re-learn) technologies. One aspect of this project on which I struggled a lot was in the animations of the components... It was totally new for me.`,
      principalChallenges: ["Lack of knowledges in the fundamentals of CSS.", "Lack of knowledge related to how web animations are made.", "Get a design that fits for me."],
      messageForLearning: `This project left me three principal experiences.`,
      learnings: ["An introduction to web design (UI/UX).", "Hands on experience creating a frontend project.", "Have an open mind related to fields that at the moment you might say that you don't like it."],
      messageForImpacts: "",
      impacts: [`Boost my professional career having a website created by myself.`],
      futureScope: ""
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
    moreInformation: {
      title: "White belt Lean Six Sigma Certification",
      linkPhoto: "",
      role: "",
      duration: "1 Day",
      teamSize: "",
      technologies: [""],
      linkDescription: "Go to certification",
      linkToApplication: "https://drive.google.com/file/d/1UY-NAWomGh8cYDt1QPzBT6E3rIfgH1kI/view?usp=drive_link",
      description: ``,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: ``,
      principalChallenges: [""],
      messageForLearning: ``,
      learnings: [""],
      messageForImpacts: `I think the most important experience that I learnt from this course was the importance of the quality process to guarantee product quality and the importance of measuring the defects you found in your production line (something that will lead you to improve the efficiency of the company while ensureing better products for the customer).`,
      impacts: [``],
      futureScope: ""
    }
  },
  {
    id: '9',
    type: 'circle_education',
    data: { label: 'White belt Lean Six Sigma Certification - March 2023'},
    position: { x: 300, y: 900 },
    moreInformation: {
      title: "White belt Lean Six Sigma Certification",
      linkPhoto: "",
      role: "",
      duration: "1 Day",
      teamSize: "",
      technologies: [""],
      linkDescription: "Go to certification",
      linkToApplication: "https://drive.google.com/file/d/1v9M-nxsgLU7klqrGvzEMxBmjid13Ja0L/view?usp=sharing",
      description: ``,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: ``,
      principalChallenges: [""],
      messageForLearning: `I didn't plan to take this certification but it was an opportunity that my school gave me to expand my knowledge.

      It was interesting to learn about other fields and in certain way it was a brief approach to the quality area in general, the certification has an industrial engineering approach, but I found a lot of similarities on how the things are done in both engineering, so I can say that I took the certification thinking about Quality Assurance (QA) for software systems.

      Summing up, the certification was divided into two parts the "six sigma" and the "Lean".
      On the one hand "Six sigma"  refers to trying to achieve the minimum number of errors or failures within the current "production chain" (in fact, "six sigma" is used as ratio to calculate how many defective parts we can expect or tolerate over time of the production line). In the other hand, "Lean" refers to the agile methodology in which the team identifies areas of improvement and after an analisis, the team managment can implement them to have a better performance (it is more related to indutrial production rather than software development).
`,
      learnings: [""],
      messageForImpacts: `I think the most important experience that I learnt from this course was the importance of the quality process to guarantee product quality and the importance of measuring the defects you found in your production line (something that will lead you to improve the efficiency of the company while ensureing better products for the customer).`,
      impacts: [``],
      futureScope: ""
    }
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
    data: { label: 'Simulating an cross-intersection project - Oct 2022 to Dec 2022'},
    position: { x: 300, y: 1200 },
    moreInformation: {
      title: "Simulating an cross-intersection project",
      linkPhoto: "",
      role: "Backend developer",
      duration: "2 Months (November 2022 to December 2022)",
      teamSize: "5 members",
      technologies: ["Python", "Flask", "Agentpy", "Heroku"],
      linkDescription: "",
      linkToApplication: "",
      description: `This project was one of my favourites ones of the entire career, in this we had the opportunity to design a multi-agent system to simulate a cross-intersection. Although, it sound simply and without major implication, it was a great challange at the moment of implement it.

      Although they are different fields, they are very related (at least fundamentally) and I'm referring to the Artificial Intelligence (IA) and the design of complex simulations (such as multi-agents). 

      The problem was that to achieve the desirable behavior for the simulation we had to think from perspective of input and output rather than the exact "steps" or "instructions" that makes the behavior (remembering, this is the approach that takes to make the machine learn, you provide the inputs and outpus and the machine creates the "rules"). So, once we understood the "inputs" and "ouputs" needed for the simulation, we had to create the "rules" that together would make the simulation we were trying to achieve (this project was for me a brief introduction to Artificial Intelligence, one of the topics that I like the most).

      In the end, we had to create a server (backend) and connect it with the frontend (whic was developing using Unit), as expected the frontend simulated the intersection of four roads which are controlled by traffic lights (here the multi-agents were: cars and the traffic lights).`,
      messageForResponsabilities: `Since I was interesting in the simulation of this type of systems, I decided to be part of the "backend" team, having to create the server that hosted the application and helping to design and to implement the simulation itself.`,
      responsabilities: ["Backend developer.", "Create and implementing the multi-agent simulation."],
      messageForChallenges: `Again, I think the principal problem that we face was on developing the simulation, until that project, we had the paradigm in which you define what exactly the machine has to do (imperative paradigm) but in this ocation we had to change this perspective and turned to a more declarative perspective, providing only the needed rules waiting that this rules gave as result the expected behavior.`,
      principalChallenges: ["Create the rules for the simulation.", "Creating and hosting a the backend using Flask (I didn't have experience using this framework).", "Communicate the backend with the frontend (remember that Unit is a tool to create videogames something new at the moment of doing this project)"],
      messageForLearning: `This project help me to open my mind to new fields that I didn't know, and as I said before this project was a type of introduction for Artificial Intelligence.`,
      learnings: ["Develop a declarative perspective to create a simulation.", "Create and deploy a server using Flask (Python).", "Know how to use the simulations to understand complex systems (and ultimately how to implement effectively)."],
      messageForImpacts: ``,
      impacts: [''],
      futureScope: ""
    }
  },
  {
    id: '13',
    type: 'circle_side_project',
    data: { label: 'Financial analysis project - March 2021'},
    position: { x: 300, y: 1300 },
    moreInformation: {
      title: "Financial analysis project",
      linkPhoto: "",
      role: "Backend developer",
      duration: "3 Months (January 2021 to March 2021)",
      teamSize: "",
      technologies: ["NodeJS", "MySQL", ""],
      linkDescription: "",
      linkToApplication: "",
      description: `This was one of my first side projects that I had, I remember at that moment I knew the basics of how to make a web application, things like what is an API, the backend side, how to connect your application to a database, all of these concepts were surrounding my mind, but I didn't have practical experience of how to implement all of these concepts.

      This is a fun fact about me and it is that I like finance (in fact before deciding to study engineering, this was my first option), at that time I knew how to do financial analysis (unlike trading, this phylosophy is called 'value investing', it is a long-term strategy), so having this knowledge and the desire to put into practice what I  learnt about engineering, I decided to create a small program that helps me to calcualte the ratios and more insights necessary to take a financial decision (buy a stock).

      The API I used to get the information that I needed was: https://www.alphavantage.co/

      And basically, this program can be summrized in an application that helps me massively analyze the companies that currently are on the stock market, obtaining the best possible options when making a financial decision.`,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: `This project was challenging for me because it was one of the first projects that I ever made, the lack of practical knowledge and disorientation was the main problems that I had at the moment of making this project.`,
      principalChallenges: ["How to call to an API.", "How to make an application and what to make.", "How to connect the two modules of the application (backend and database).", "How to use the interface of MySQL workbench to get the information", "How to design a good database that helps me to store information effectively."],
      messageForLearning: `Although it was a hard project, I was able to learn a lot about it. As I was in my first years of the career, I was able to know on a first hand experience the powerful of software and also the power that it gives you the fact of knowing how to make software.`,
      learnings: ["How to create connection between modules (database, backend)", "The approach that you must follow to create an effective database", "Know how to search the information that you need to go ahead with your project."],
      messageForImpacts: `Although it was a personal project, it gave me a lot of experience and allowed me to change my mind about software development and the possibilities that it has. 
      Something that was amazing to me was that if I spent days understanding the state of an industry (gathering information from companies that make up the industry itself), with this little program I was able to know in a couple of minutes how the state of the industry, discarding many companies and focusing on those ones that were performing better.`,
      impacts: ['Reduce the time (from hours, even days, to minutes) to analyze  the state of one industry (at least from a financials reporting perspective).', 'Quickly identify promising companies.', 'Get a better undesrtanding of what a backend is and how to create one.', 'Put in practice database normalization and ultimately create a functional database.'],
      futureScope: ""
    }
  },
  {
    id: '14',
    type: 'circle_education',
    data: { label: 'Software Development Processes and Methodologies - Dec 2020'},
    position: { x: 300, y: 1400 },
    moreInformation: {
      title: "Software Development Processes and Methodologies",
      linkPhoto: "",
      role: "",
      duration: "2 Week",
      teamSize: "",
      technologies: [""],
      linkDescription: "Go to certification",
      linkToApplication: "https://www.coursera.org/account/accomplishments/verify/VV32R6KMJP7A",
      description: ``,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: ``,
      principalChallenges: [""],
      messageForLearning: `At the same time that I was interested about software architecture, software management was another field I wanted to gain experience in that was closely related to how I differentiated a software technician from a software engineer.
      Although they both know how to write code, a software engineer is capable of leading complex projects and carrying out complex management process, that is why I decided to take this course in which I was taught techniques and methodologies related to software development processes (waterfall, agile, scrum, etc) and methodologies to calculate risks, to planify sprints and in general how to struct a good plan management for a software project.`,
      learnings: [""],
      messageForImpacts: "",
      impacts: [``],
      futureScope: ""
    }
  },
  {
    id: '15',
    type: 'circle_education',
    data: { label: 'Software architecture (coursera course) - Dec 2020'},
    position: { x: 300, y: 500 },
    moreInformation: {
      title: "Software architecture (coursera course)",
      linkPhoto: "",
      role: "",
      duration: "1 Week",
      teamSize: "",
      technologies: [""],
      linkDescription: "Go to certification",
      linkToApplication: "https://www.coursera.org/account/accomplishments/verify/H2M5J5KFE37W",
      description: `I remember when I was studying my degree (Computer Technology Engineering) that software architecture caught my attention. 
      Although I enjoy developing systems and making application, I prefer to be in the system design side, making decision related to the "why" and "how" the system should to be created (although software architecture is more related to the "why" rather than "how").

      So, due to my interest in this discipline, I decided to take this course in which I was taught me the fundamentals of software architecture (how to think, tools that I can choose to design my software architecture designs and architectural sytles that exsists).`,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: ``,
      principalChallenges: [""],
      messageForLearning: `Although this course was just the fundamentals, I was able to learn a lot about this aspect of software engineering, helping me 'develop' the 'architect perspective' and also helping me gain useful tools  and knowledge to develop better solutions.`,
      learnings: [""],
      messageForImpacts: "",
      impacts: [``],
      futureScope: ""
    }
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