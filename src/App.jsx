import { useState } from 'react'
import './App.css'
import Hero from './layout/Hero'
import WhoAmI from './layout/WhoAmI'
import Section from './layout/Section'
import Experience from './layout/Experience'
import Skills from './layout/Skills'

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <body className='overflow-x-hidden'>
        {/* <Section
          id={0}
          setCurrentSection={setCurrentSection}
        >
          <Hero />
        </Section>
        <Section
          id={1}
          setCurrentSection={setCurrentSection}
        >
          <WhoAmI />
        </Section> */}
        <Section
          id={2}
          setCurrentSection={setCurrentSection}
        >
          <Experience />
        </Section>
        {/* <Section
          id={3}
          setCurrentSection={setCurrentSection}
        >
          <Skills />
        </Section> */}
    </body>
  )
}

export default App
