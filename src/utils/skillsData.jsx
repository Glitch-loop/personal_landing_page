/*
  Remember to decalre a new group of skills, you have to follow thw following format:

  nameOfSkill = [
    {
      groupName: <string>,
      groupDesign: <number>
      set: [
        {
          skillName: <string>
          expertise: <number>
        }
      ]
    }
  ]

*/

const developingSkills = [
  {
    groupName: "Programming languages",
    groupDesign: 0,
    set: [
      {
        idSkill: 0,
        skillName: "Python",
        expertise: "81"
      },
      {
        idSkill: 1,
        skillName: "C/C++",
        expertise: "73"
      },
      {
        idSkill: 2,
        skillName: "Typescript",
        expertise: "75"
      },
      {
        idSkill: 3,
        skillName: "HTML",
        expertise: "80"
      },
      {
        idSkill: 4,
        skillName: "CSS",
        expertise: "54"
      },
      {
        idSkill: 5,
        skillName: "Javascript",
        expertise: "82"
      },
    ]
  },
  {
    groupName: "Frameworks & libraries",
    groupDesign: 1,
    set: [
      {
        idSkill: 0,
        skillName: "React",
        expertise: "84"
      },
      {
        idSkill: 2,
        skillName: "React native",
        expertise: "76"
      },
      {
        idSkill: 3,
        skillName: "Tailwind",
        expertise: "72"
      },
      {
        idSkill: 4,
        skillName: "Framer motion",
        expertise: "63"
      },
      {
        idSkill: 5,
        skillName: "Express",
        expertise: "85"
      },
      {
        idSkill: 6,
        skillName: "NodeJs",
        expertise: "83"
      },
    ]
  },
  {
    groupName: "Databases",
    groupDesign: 2,
    set: [
      {
        idSkill: 0,
        skillName: "MySQL",
        expertise: "85"
      },
      {
        idSkill: 1,
        skillName: "PostgreSQL",
        expertise: "77"
      },
    ]
  },
  {
    groupName: "Services & tools",
    groupDesign: 3,
    set: [
      {
        idSkill: 0,
        skillName: "Supabse",
        expertise: "71"
      },
      {
        idSkill: 1,
        skillName: "Firbase",
        expertise: "66"
      },
      {
        idSkill: 2,
        skillName: "Figma",
        expertise: "37"
      },
      {
        idSkill: 3,
        skillName: "DocumentIA",
        expertise: "36"
      },
      {
        idSkill: 4,
        skillName: "TextTract",
        expertise: "28"
      },
    ]
  },
]

const testingSkills = [
  {
    groupName: "Frameworks & libraries",
    groupDesign: 0,
    set: [
      {
        idSkill: 0,
        skillName: "Cantata C/C++",
        expertise: "65"
      },
      {
        idSkill: 1,
        skillName: "Jest",
        expertise: "68"
      }
    ]
  },
]

const devOpsSkill = [
  {    
    groupName: "IaaS",
    groupDesign: 0,
    set: [
      {
        idSkill: 0,
        skillName: "EC2 (AWS)",
        expertise: "50"
      },
      {
        idSkill: 1,
        skillName: "Route 53 (AWS)",
        expertise: "36"
      },
      {
        idSkill: 2,
        skillName: "Cloud run (GCP)",
        expertise: "45"
      },
      {
        idSkill: 3,
        skillName: "Cloud engine (GCP)",
        expertise: "31"
      },
      {
        idSkill: 4,
        skillName: "Cloud storage (GCP)",
        expertise: "21"
      },
    ]
  },
  {
    groupName: "Tools",
    groupDesign: 1,
    set: [
      {
        idSkill: 0,
        skillName: "Git",
        expertise: "70"
      },
    ]
  },
  {
    groupName: "Contaneirzation",
    groupDesign: 2,
    set: [
      {
        idSkill: 0,
        skillName: "Docker",
        expertise: "40"
      },
    ]
  },
]


export {
  developingSkills,
  testingSkills,
  devOpsSkill
}