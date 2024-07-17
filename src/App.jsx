// import { useState } from 'react'
import './App.css'
import Hero from './layout/Hero'
import WhoAmI from './layout/WhoAmI'
import Section from './layout/Section'

function App() {

  return (
    <body className='overflow-x-hidden'>
        <Section>
          <Hero />
        </Section>
        <Section>
          <WhoAmI />
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
