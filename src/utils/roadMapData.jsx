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
    moreInformation: {
      title: "Today",
      linkPhoto: "",
      role: "",
      duration: "",
      teamSize: "",
      technologies: [""],
      linkDescription: "",
      linkToApplication: "",
      description: `Hi, I hope you are well and that you find my professional career interesting, continue enjoying the journey :D`,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: ``,
      principalChallenges: [""],
      messageForLearning: ``,
      learnings: [""],
      messageForImpacts: "",
      impacts: [``],
      futureScope: ""
    }
  },
  {
    id: '1',
    type: 'circle_side_project',
    data: { label: 'Personal landing page - Jule 2024' },
    position: { x: 100, y: 200 },
    moreInformation: {
      title: "Personal landing page (Web development)",
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
    moreInformation: {
      title: "Bachelor\'s Degree in Computer Science Technologies",
      linkPhoto: "",
      role: "",
      duration: "4 Years (August 2020 to June 2024)",
      teamSize: "",
      technologies: [""],
      linkDescription: "Go to degree",
      linkToApplication: "https://certificados.tec.mx/certificate/1bf9d3edd05a5cb2b9dc176d609dcb3f ",
      description: `Although at first I had many options to study, in the end I chose to study engineering, the fact of being able to understand the fundamentals to be able to make great applications, understand how the industry is currently developing and the experience of being able to use all these technologies that were coming out, all of them were my main reasons why I decided to venture into this career, a career that I am deeply grateful for having chosen and, above all, completed.`,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: ``,
      principalChallenges: [""],
      messageForLearning: `The objective of this career was to become an engineer capable of creating solutions for problems that the world currently has and as such I learned many methodologies, technologies and techniques to make dreams come true.
      But I also believe that having studied this degree helped me to be able to see life in a different way, being able to conclude something that lasted years helps me give another meaning to what "effort" and "dedication" are, and above all it helped me to better appreciate the people around me.`,
      learnings: [""],
      messageForImpacts: ``,
      impacts: [''],
      futureScope: ""
    }
  },
  {
    id: '3',
    type: 'circle_side_project',
    data: { label: 'Friend\'s friend project - June 2023 - June 2024'},
    position: { x: -300, y: 400 },
    moreInformation: {
      title: "Friend\'s friend project (Web development)",
      linkPhoto: "./src/assets/Organization_of_the_team.jpg",
      role: "Software engineer | Fullstack developer",
      duration: "1 Year (June 2023 to June 2024)",
      teamSize: "",
      technologies: ["Typescript", "ReactJS", "Tailwind", "Cloud engine", "JWT", "Supabase", "NodeJS", "DocumentIA", "Textract"],
      linkDescription: "Go to repo of the project",
      linkToApplication: "https://github.com/Glitch-loop/structure_management_interface",
      description: `Of all the projects, this has been one of the ones that has had the most "impact" in question to the purpose for which it was created.
      The project aims to allow people to exercise politics and know exactly who their team is.
      In the context of politics there is a term called "structure", which refers to the team that follows you and that will join at the time of the elections (not necessarily affiliated).
      The fact is that in order to keep this type of records (which tend to be arboreal, since it is a leader-follower relationship) it is very complicated to keep it in excel sheets or similar, having to invest a lot of time in organizing the information and above all preserve it (caspi always ending up more like a "set" than a "tree").
      Personally, I have always liked the topic of sociology and how technology has an impact on society. Together with a friend who had a different theory of the modus operandi to exercise politics, we agreed that I was going to provide him with the application (or infrastructure) to carry out this experiment, as the application is called "the friend of the friend", an application that It would allow us to monitor the "structures" that a team has in order to carry out a clear and safe campaign.`,
      messageForResponsabilities: "For this project I wanted to gain experience in full stack development, so in my free time I dedicated the necessary effort to be able to move the project forward.",
      responsabilities: ["Designing and implementing the system", "Gathering the requiremetns for the application"],
      messageForChallenges: `Since I play both developer and administrator roles, I can say that I faced many challenges throughout the development of this application.
      The fact that I was alone against the project made it quite difficult for me to move it forward (and even more so because of the purpose it had, so it was not very easy to get help), so I can say that although I had many technical challenges, I believe that where I really struggled the most was in creating an effective design that could cover the needs of the project, in fact, only in the design phase did it take between a fortnight and a month (since I knew from previous experiences that an error at the beginning of the project would cost quite expensive and would require a lot of time to correct, something I could not afford due to my other activities; school and internship).`,
      principalChallenges: ["Determining the design of the project.", "Refinig ambiguous requirements.", "Lack of technical knowledge related to frontend.", "Little time to testing the application.", "Provide relevant functionalities to satisfy the needs of the prject.", "Lack of knowledge about geospatial data."],
      messageForLearning: `This was really a quite integrative project, since I had the opportunity to implement the entire software cycle, it was something very big for a single person to implement, but in the end thanks to this project I was able to give myself the courage to not only be a "developer" but rather being a "software engineer", who could provide a solution to a real problem, in fact I consider this project as my unofficial graduation from the career since I demonstrated to myself what I am capable of doing. project for the real world.`,
      learnings: ["Realizing the importance of a good planification for a project.", "Understand the importance of be clear with your stakeholder.", "Have hands-on experience implementing a real product from scratch", "Realizing the importance of the testing phase."],
      messageForImpacts: `Although it was used in a real context, given that a theory was being tested in order to make politics, it was limited to the group with which the project is being carried out, which even takes away a little of its merit, really. It had a significant impact on both the team and the results of the campaign on this occasion.`,
      impacts: ["Be able to provide team members with information about their structure in \"real time.\"", "To be able to provide the information that the party to which you are affiliated would provide you (so that when we were given the information about the voting booths, the team through the program had already done it a fortnight before).", "Have a granular organization on election day (know which follower goes with which leader and which box each follower has to go to).", "You, as the team leader, know in a reliable way who contributed the most people to the team.", "Be a reference on how politics can be done \"by word of mouth.\""],
      futureScope: "In the end, as a team, we managed to gather between 700 and 800 votes (considering that we are a small team and limited in resources), it is normal for a team with \"resource\" to be between 1000 and 1,500 votes, so it could be considered that it was a success... Although this sounds good, it is necessary to remember that this was a prototype and that it was enclosed to the team in order to measure its effectiveness. Given the results, it is planned that in the following elections it will be used in a more \"massive\" way, trying to cover more teams within the party in which they are going to work."
    }
  },
  {
    id: '4',
    type: 'circle_education',
    data: { label: 'AWS Cloud Practitioner Essentials - May 2024'},
    position: { x: 300, y: 500 },
    moreInformation: {
      title: "Scrum fundamentals Certification",
      linkPhoto: "",
      role: "",
      duration: "2 Weeks",
      teamSize: "",
      technologies: [""],
      linkDescription: "Go to certificate",
      linkToApplication: "https://drive.google.com/file/d/1UpyWPLzr7DcSDGsSDgPaz_DDihBQHVTV/view?usp=sharing",
      description: `This certification was provided by AWS and covered fundamentals of the AWS cloud (services they provide and philosophy of how AWS works).
      I found this certification interesting because it allowed me to understand what AWS cloud really is (at that time I had used computing and networking services provided by them but I had no idea idea how massive AWS was and somehow how it works).
      It covered several topics and mote than going into depth about all the services, the course was more about knowing what you can find in AWS and depending on your needs you can opt by one service or another.
      There were just three topics that were not related to services and they where physical infrastructure, the "well-architected framework" (how to deply robust cloud applications) and  the AWS responsability model.`,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: ``,
      principalChallenges: [""],
      messageForLearning: `At the end of my degree I found interesting the DevOps aspect of the project, so wanting to know more about the topic is that I decided to make the course and I have to say that I learnt a lot, in fact I considered  this course as an introduction of DevOps.`,
      learnings: ["Core concepts AWS cloud.", "Learn about computing services.", "Learn about network services.", "Learn about databases services.", "How AWS infrastructure works.", "Well-architected framework.", "AWS responsibility model."],
      messageForImpacts: ``,
      impacts: [``],
      futureScope: ""
    }
  },
  {
    id: '5',
    type: 'circle_internship',
    data: { label: 'Internship at Bosch - June 2023 to May 2024'},
    position: { x: 300, y: 600 },
    moreInformation: {
      title: "Internship at Bosch (Embedded systems)",
      linkPhoto: "",
      role: "Software engineer internship.",
      duration: "11 months (June 2023 to May 2024)",
      teamSize: "",
      technologies: ["C/C++", "Cantata", "Python"],
      linkDescription: "Go to folder with the documents that validates the internship",
      linkToApplication: "https://drive.google.com/drive/folders/1RfORNy73xSPgjoisJ5lG7PrL3AiuERj1?usp=sharing",
      description: `In this internship I did for Bosch I was able to put my knowledge in software development into practice. Since the company is mainly dedicated to the automotive industry, my internship was more focused on the development of embedded systems.
      The team I belonged to was Brake Systems (ABS) and although my position was more in application development, the truth is that I worked in various areas within the organization, having activities that ranged from logic implementation to supporting with the testing of various components, including general support, delivery of a workshop to implement SCRUM in the team and process automation.`,
      messageForResponsabilities: "Again, in this internship I was able to do a little of everything, which allowed me to work in various areas within the team, having many learnings and allowing me to contribute value to the project.",
      responsabilities: ["Assisting in the implementation of component logic.", "Designing and implementing unit testing using Cantata Framwork (C/C++ based framework).", "Designing and implementing component testing using Labcar (high-fidelity simulation of the embedded system in real environment).", "Designing and implementing scripts to automate processes (business intelligence).", "Being a leader of a workshop for the implementation of SCRUM in the team.", "Helping with the documentation of project modules.", "Participating in an introductory course to 'embedded systems in Bosch'."],
      messageForChallenges: `Since I did not focus on the same area, I really had many challenges throughout my internship, so more than technical challenges, I really believe that the most relevant challenges I had were more related to soft-skills.`,
      principalChallenges: ["Limited spoken English.", "Slightly steep learning curve.", "Sometimes I didn't know how to communicate a problem well.", "Sometimes I didn't know when to ask for help and when to keep trying on my own."],
      messageForLearning: `As expected, since I was in various areas of the team I was able to learn a lot about how things are done in the embedded industry, something that I greatly appreciate since it allowed me to put into practice different skills related to software engineering.`,
      learnings: ["Get an introduction in embedded systems.", "Hands-on experience implementing unit testing.", "Hand-on experience implementing component testing.", "Put in practice the scrum methodology (to organize the workshop of scrum).", "Create relevant and useful documentation.", "Put in practice the design of software systems (code patterns).", "I was able to develop my effective communication."],
      messageForImpacts: `Although I had small tasks, I think I managed to have a positive impact on the team, leaving a mark and, above all, leaving value with my work.`,
      impacts: ["Scripts that allowed us to obtain more performance from team members.", "Ensure software quality.", "Creating relevant documentation for the project.", "Helping to adopt the scrum framework in the team."],
      futureScope: ""
    }
  },
  {
    id: '6',
    type: 'circle_scholar_service',
    data: { label: 'Renovating Tec de Monterrey web site - Jan 2023 to June 2023'},
    position: { x: 300, y: 600 },
    moreInformation: {
      title: "Renovating Tec de Monterrey web site (DevOps)",
      linkPhoto: "",
      role: "DevOps engineer.",
      duration: "6 months (January 2023 to June 2023)",
      teamSize: "2 members",
      technologies: ["RubyOnRails", "Postgress", "Docker"],
      linkDescription: "",
      linkToApplication: "",
      description: `In this social service, I helped Tecnologico de Monterrey to be able to rescue an application which they had to abandon years ago.
      The application in question was a webpage that allowed users (high school students) to find their calling by providing them with a range of possible careers that they could study.
      Given that it was a somewhat old application and due to the lack of documentation, it was very difficult to rescue the application (in fact it could only be partially rescued).`,
      messageForResponsabilities: "There was the idea that I would join the social service as a developer, but since I didn't even run the development server, I worked more as a devops engineer (basically doing reverse engineering to understand how the application worked and to run the application)",
      responsabilities: ["Reverse engineering.", "Make documantation related to the project.", "Update docker container."],
      messageForChallenges: `Given that it was an application that had not been maintained for 6 - 7 years, there were really many difficulties when it came to getting the server up and running (so much so that I had to ask for help from someone with more experience using RubyOnRails and docker. .. We only managed to get the app working partially).`,
      principalChallenges: ["Lack of knowledge using Ruby on Rails framework", "Lack of knowledge using Docker", "Lack of documentation."],
      messageForLearning: `This social service was a little satisfactory since I did not achieve the objective of being able to make the application work, however, that is what they say, you learn more from failure than from success and boy did I take several lessons from this social service.`,
      learnings: ["Understand the importance of documentation for legacy project.", "An introduction to Docker.", "Asking help when you get stuck.", "Introdunction to RubyOnRails.", "Communicate effectively the limitations of your time and knowledge."],
      messageForImpacts: ``,
      impacts: [""],
      futureScope: ""
    }
  },
  {
    id: '7',
    type: 'circle_education',
    data: { label: 'Certalytics Project - Jan 2023 to June 2023'},
    position: { x: 300, y: 700 },
    moreInformation: {
      title: "Certalytics Project (Web development)",
      linkPhoto: "",
      role: "Backend developer | SCRUM master",
      duration: "6 months (January 2023 to June 2023)",
      teamSize: "",
      technologies: ["Typescript", "EC2 computing service", "React", "Tailwind", "Postgress"],
      linkDescription: "",
      linkToApplication: "",
      description: `Certalytics was a school project aimed at solving a human resources problem that 'IBM' had at the time.
      The problem to be solved was related to the training that IBM had to provide to its employees to keep them up to date with the industry, in this context IBM wanted an application which would provide relevant certificates so that employees could take them and thus keep them updated, as well as Also, they wanted an application which would help them keep track of the courses their employees had taken over time.`,
      messageForResponsabilities: "",
      responsabilities: ["Helping with the design and implementation of the application.", "Helping with the development of the backend.", "Designing and creating the database.", "Gathering and abstrating software requirements (requirement engineering)."],
      messageForChallenges: `For this project, the main challenge was to get which certificates were the most relevant for the industry at the time of making the query, so we spent a lot of time trying to overcome this problem, solving it using web scriping (retriving information from webpages like udemy and coursera and filtering the information to get the best certifications using its rating).`,
      principalChallenges: ["Lack of information about relevant courses.", "Large number of certificates to filter.", "Legal implications for web scrapping."],
      messageForLearning: `Although I already knew what web scraping was, I had never used it to be able to make an application which would provide relevant information which could be used for decision making.`,
      learnings: ["Implementing web scripping to search information.", "Perfecting my requirements engineering.", "Perfecting my porject management skills."],
      messageForImpacts: `Being a school project, it only remained a prototype, it could not be taken to a production environment.`,
      impacts: ["Getting idea to the company to apply in a final solution."],
      futureScope: ""
    }
  },
  {
    id: '8',
    type: 'circle_education',
    data: { label: 'Scrum fundamentals Certified - April 2023'},
    position: { x: 300, y: 800 },
    moreInformation: {
      title: "Scrum fundamentals Certification",
      linkPhoto: "",
      role: "",
      duration: "1 Day",
      teamSize: "",
      technologies: [""],
      linkDescription: "Go to certificate",
      linkToApplication: "https://drive.google.com/file/d/1UY-NAWomGh8cYDt1QPzBT6E3rIfgH1kI/view?usp=drive_link",
      description: `I took this certification as a part of a course that I had in my career.
      The certification was about the fundamentals of scrum "what it is" and "how to apply it effectively in the team".
      Although I knew about the subject, because I had taken courses previously, this certification allowed me to consolidate the knowledge I had by learning in depth about the agile methodology and obtaining a couple of useful tools that have helped me a lot such as; time-boxing or risk management.

      The course was provided by SCRUMstudy a renowned organization that teaches about agile methodologies and other topics related to project management.`,
      messageForResponsabilities: "",
      responsabilities: [""],
      messageForChallenges: ``,
      principalChallenges: [""],
      messageForLearning: `Since I am really into project management and software architecture, this course was especially impactful and it showed that although I knew something about the methodology and project management in general (at least the basics of applying it) there were a lot of aspect that I was ignoring about this methodology.
      Perhaps one of the most important learnings of this course was not in the methodology itself but in continuing to study and try to delve deeper into topics that I find interesting.`,
      learnings: ["Agile methodologies principles (review).", "Risk management.", "Sprint plannification methodologies.", "Core concepts of SCRUM."],
      messageForImpacts: ``,
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
      linkDescription: "Go to certificate",
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
    data: { label: 'Banco de empleos - Jan 2022 to Dec 2022'},
    position: { x: 300, y: 1000 },
    moreInformation: {
      title: "Banco de empleos (Web Development)",
      linkPhoto: "",
      role: "Frontend developer | Team support",
      duration: "1 Year (January 2022 to December 2022)",
      teamSize: "4 members",
      technologies: ["AngularJS", "Flask", "Tailwind", "Postgress"],
      linkDescription: "Go to github repo",
      linkToApplication: "https://github.com/eder000000/JcEDev",
      description: `This was my first social service that I did and which was aimed at developing a web application that helped people find employment.
      This was a secondary project of the non-profit organization 'Food Bank' which aims in the first phase to eradicate unemployment at the Jalisco level, with the aim of having an impact at the national level.
      The application in question aims to ensure that people with technical and professional skills can share their talents, and that people who need such services can have a safe place to hire trusted people.`,
      messageForResponsabilities: "Although I had a frontend developer role, the truth is that I also worked in areas related to project administration.",
      responsabilities: ["Gathering requirements.", "Having tracking about what to do according with the meeting with 'Banco de alimentos'.", "Design of the roles scheme that was going to use the application.", "Helping to develop components of the frontend application."],
      messageForChallenges: ``,
      principalChallenges: ["Lack of knowledge in the use of AngularJS", "Inconsistencies when working on sprint objectives (blocker from mangament area)."],
      messageForLearning: `This social service helped me a lot in my professional career since it was my first "real" approach to the world of development.
      The fact of contributing to an application with the objectives of having a real impact on society motivated me to help the project a little more than necessary and to work in areas outside of the development itself.`,
      learnings: ["Getting aware about the importance of effective listening.", "Get a better understanding about engineering requirements.", "Acknowledge of the imporante of the planning for a sprint.", "Acknowledge of the imporante really understand the users requirements.", "Have a 'real' application of scrum framework.", "Learning tailwind.", "Learning React Native.", "Getting an idea of how to carry out a mobile development."],
      messageForImpacts: `Unfortunately, due to administrative issues (related to hosting) the project was stopped just before being launched, something that made me very sad since the project came from a very well-known organization (Banco de alimentos), this would have helped to have a great impact since its beginnings.`,
      impacts: [""],
      futureScope: ""
    }
  },
  {

    id: '11',
    type: 'circle_education',
    data: { label: 'Rolac Project - Aug 2022 to Oct 2022 '},
    position: { x: 300, y: 1100 },
    moreInformation: {
      title: "Rolac Project (Mobile Development)",
      linkPhoto: "",
      role: "Fullstack developer | SCRUM master",
      duration: "3 Months (August 2021 to Octuber 2021)",
      teamSize: "5 members",
      technologies: ["React Native", "Firebase", "Figma", "Tailwind"],
      linkDescription: "Go to demostration video",
      linkToApplication: "https://www.youtube.com/watch?v=Gq-PVjziytk",
      description: `This project was a mobile development aimed at meeting the needs of "Banco de Alimentos" our teaching partner; Banco de Alimentos is a non-profit organization that helps those who need it most. They have two main activities, fundraising (to buy supplies) and food collection (food collected from the organization's allies). 

      At that time the organization was facing two problems: The first was to improve the mechanism for collecting food from their allies. And the second, make people aware of the donation that they made to the organization.
      
      After an feasibility analysis, we decided to make an application that helps in these two problems; On the collecting side we deicded to implement a functionality in which it will provide the driver with the best way to follow on the route (he had to go to vrious parts of the city to collect all the food) in a way we were automated the process that they had to carry out before starting the route (route planning). And the second was a catalog that helps people know what they were donating... So instead of just being a number on a screen, the user had a menu with the food equivalent of what he was donating.
      `,
      messageForResponsabilities: "",
      responsabilities: ["Team organization.", "Design and implementation of the database.", "Implementation of authentication mechanism.", "Gathering software requirements", "Helping to develop parts of the application."],
      messageForChallenges: `Unfortunately, at the beginning of this project we had ambiguous requirements, we didn't understand what they really wanted, it was not until a couple of session with them that we were finally able to have a useful product (or at least the idea of one).
      Like in all the projects, the technical aspect was a challenging factor for us, but personally, as I was the scrum master of the team I found it difficult to provide an effective organization to the team, gather the requirements and in a way provide a feeling that the project was advanced.
      In the end, at least from my perspective this project taugh me lesson about leadership and organization rather than technology one.`,
      principalChallenges: ["Ambiguous organization.", "Lack of effective organization.", "Effective listening.", "Lack of technical knowledge."],
      messageForLearning: `The first and most obvious learning that we had form the project was related to how to make a mobile application. Although I found interesting these learnings I consider the soft skills that this project taught me to be more important (soft skills related to listenning, plannification and motivation).`,
      learnings: ["Getting aware about the importance of effective listening.", "Get a better understanding about engineering requirements.", "Acknowledge of the imporante of the planning for a sprint.", "Acknowledge of the imporante really understand the users requirements.", "Have a 'real' application of scrum framework.", "Learning tailwind.", "Learning React Native.", "Getting an idea of how to carry out a mobile development."],
      messageForImpacts: `Despite the difficulties we had throughout the project, in the end we were able to deliver a "functional" prototype of the idea that we had. 
      Maybe the application was not ready to deploy, but at least we were able to provide an idea of how to automate the route planning and a proposal of the fundraising catalog.`,
      impacts: ['Provide an idea of how to automate the route planning', 'Provide a tool to make easier what is the next allie to visit.', 'Provide a catalog that makes people aware of their donations.'],
      futureScope: ""
    }
  },
  {
    id: '12',
    type: 'circle_education',
    data: { label: 'Simulating a cross-intersection project - Oct 2022 to Dec 2022'},
    position: { x: 300, y: 1200 },
    moreInformation: {
      title: "Simulating an cross-intersection project (Simulation)",
      linkPhoto: "",
      role: "Backend developer",
      duration: "2 Months (November 2022 to December 2022)",
      teamSize: "5 members",
      technologies: ["Python", "Flask", "Agentpy", "Heroku"],
      linkDescription: "Go to demostration video",
      linkToApplication: "https://www.youtube.com/watch?v=px5B41TLdg8",
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
      title: "Financial analysis project (Web development)",
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
      linkDescription: "Go to certificate",
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
      linkDescription: "Go to certificate",
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