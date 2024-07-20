import { useState } from 'react'
import './App.css'
import Hero from './layout/Hero'
import WhoAmI from './layout/WhoAmI'
import Section from './layout/Section'
import Experience from './layout/Experience'
import Skills from './layout/Skills'
import WhatsNext from './layout/WhatsNext'

function App() {
  const [currentSection, setCurrentSection] = useState("section0");
  return (
    <body className='overflow-x-hidden'>
        <Section
          id="section0"
          setCurrentSection={setCurrentSection}
        >
          <Hero />
        </Section>
        <Section
          id="section1"
          setCurrentSection={setCurrentSection}
        >
          <WhoAmI 
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </Section>
        <Section
          id="section2"
          setCurrentSection={setCurrentSection}
        >
          <Experience 
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}/>
        </Section>
        <Section
          id="section3"
          setCurrentSection={setCurrentSection}
          >
          <Skills 
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}/>
        </Section>
        <Section
          id="section4"
          setCurrentSection={setCurrentSection}
          >
          <WhatsNext
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}/>
        </Section>
    </body>
  )
}

export default App
