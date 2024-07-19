

function TitleSection({title, children}) {
  return (
      <span className={`
        text-base
        md:text-2xl 
        lg:text-4xl 
        `}>
        {title}
        {children}
      </span>
  )
}


export default TitleSection