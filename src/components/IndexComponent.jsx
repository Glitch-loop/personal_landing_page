import ItemIndex from "./IndexComponents/ItemIndex";

function IndexComponent({currentSection}) {
  return (
    <div className={`
      flex flex-col w-full items-start justify-start
       lg:text-base xl:text-2xl
      `}>
        <ItemIndex 
          to_direct={"section1"} 
          children={"Who am I?"}
          state={currentSection}/>
        <ItemIndex 
          to_direct={"section2"} 
          children={"Experience"}
          state={currentSection}/>
        <ItemIndex 
          to_direct={"section3"} 
          children={"Skills"}
          state={currentSection}/>
        <ItemIndex 
          to_direct={"section4"} 
          children={"What's next?"}
          state={currentSection}/>
    </div>
  )
}


export default IndexComponent;