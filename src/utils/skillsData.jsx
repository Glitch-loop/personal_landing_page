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
        skillName: "Python",
        expertise: "81"
      },
      {
        skillName: "C/C++",
        expertise: "73"
      },
      {
        skillName: "Typescript",
        expertise: "75"
      },
      {
        skillName: "HTML",
        expertise: "80"
      },
      {
        skillName: "CSS",
        expertise: "54"
      },
      {
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
        skillName: "React",
        expertise: "84"
      },
      {
        skillName: "React native",
        expertise: "76"
      },
      {
        skillName: "Tailwind",
        expertise: "72"
      },
      {
        skillName: "Express",
        expertise: "85"
      },
      {
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
        skillName: "MySQL",
        expertise: "85"
      },
      {
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
        skillName: "Supabse",
        expertise: "71"
      },
      {
        skillName: "Firbase",
        expertise: "66"
      },
      {
        skillName: "Figma",
        expertise: "37"
      },
      {
        skillName: "DocumentIA",
        expertise: "36"
      },
      {
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
        skillName: "Cantata C/C++",
        expertise: "65"
      },
      {
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
        skillName: "EC2 (AWS)",
        expertise: "50"
      },
      {
        skillName: "Route 53 (AWS)",
        expertise: "36"
      },
      {
        skillName: "Cloud run (GCP)",
        expertise: "45"
      },
      {
        skillName: "Cloud engine (GCP)",
        expertise: "31"
      },
      {
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