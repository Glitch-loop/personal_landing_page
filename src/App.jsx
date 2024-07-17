import { useState } from 'react'
import './App.css'
import Hero from './layout/Hero'
import WhoAmI from './layout/WhoAmI'
import Section from './layout/Section'
import Experience from './layout/Experience'

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <body className='overflow-x-hidden'>
        <Section
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
        </Section>
        <Section
          id={2}
          setCurrentSection={setCurrentSection}
        >
          <Experience />
        </Section>
        
      <div className="h-screen bg-blue-500 flex items-center justify-center section">
        <h1 className="text-white text-4xl">Section 1</h1>
      </div>

      <div className="h-screen bg-green-500 flex items-center justify-center section">
        <h1 className="text-white text-4xl">Section 2</h1>
      </div>

      <div className="h-screen bg-red-500 flex items-center justify-center section">
        <h1 className="text-white text-4xl">Section 3</h1>
      </div>

      <div className="h-screen bg-yellow-500 flex items-center justify-center section">
        <h1 className="text-white text-4xl">Section 4</h1>
      </div>      
    </body>
  )
}

export default App
