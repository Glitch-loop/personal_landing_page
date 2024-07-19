function Section({id, setCurrentSection, children}) {
  return (
    <div
      onMouseEnter={() => {setCurrentSection(id)}}
      id={id}
      className="section w-screen h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

export default Section