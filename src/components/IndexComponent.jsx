import { useState } from "react";
import { Link } from "react-scroll";
import ItemIndex from "./IndexComponents/ItemIndex";

function IndexComponent() {
  const [currentSection, setCurrentSection] = useState("section1")
  return (
    <div className={`
      flex flex-col w-full items-start justify-start
       lg:text-base xl:text-2xl
      `}>
        <ItemIndex 
          to_direct={"section1"} 
          children={"Who am I?"}
          state={currentSection}
          onSelect={setCurrentSection}
          />
        <ItemIndex 
          to_direct={"section2"} 
          children={"Experience"}
          state={currentSection}
          onSelect={setCurrentSection}/>
        <ItemIndex 
          to_direct={"section3"} 
          children={"Skills"}
          state={currentSection}
          onSelect={setCurrentSection}/>
        <ItemIndex 
          to_direct={"section4"} 
          children={"What's next?"}
          state={currentSection}
          onSelect={setCurrentSection}/>
        {/* <div className="my-2 md:w-2/6 xl:w-1/4">
          <Link to="section1" smooth={true} duration={500}>
            <span>Who am I?</span>
            <div className="bg-base-color h-1 rounded-full mt-2"></div>
          </Link>
        </div> */}
        {/* <div className="my-2 opacity-25  md:w-2/6 xl:w-1/4">
          <Link to="section2" smooth={true} duration={500}>
            <span className="my-2">Experience</span>
            <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
          </Link>
        </div>
        <div className="my-2 opacity-25  md:w-2/6 xl:w-1/4">
          <Link to="section3" smooth={true} duration={500}>
            <span className="my-2">Skills</span>
            <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
          </Link>
        </div>
        <div className="my-2 opacity-25  md:w-2/6 xl:w-1/4">
          <Link to="section4" smooth={true} duration={500}>
            <span className="my-2">What&apos;s next?</span>
            <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
          </Link>
        </div> */}
    </div>
  )
}


export default IndexComponent;