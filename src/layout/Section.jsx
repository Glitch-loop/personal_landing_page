function Section({id, children}) {
  return (
    <div
      onMouseEnter={() => {console.log(id)}}
      id={id}
      className="section w-screen h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

export default Section