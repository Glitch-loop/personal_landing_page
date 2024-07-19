
import StartButtom from "../components/StartButtom";
import TypewriterComponent from "../components/TypewriterComponent";

function Hero() {
  return (
    <div className={`
      flex flex-col w-9/12
      text-xl md:text-3xl lg:text-5xl xl:text-6xl
    `}>
      <span className="">Hi, I’m <span className="text-project-color-red">Renet</span> an enthusiastic <span className="text-project-color-red">software engineer</span> ready for the action.</span>

      <div className="mt-10 md:mt-36 w-full flex flex-col md:flex-row md:text-center md:items-center">
        <div className="flex flex-row basis-2/4">
          <span className="italic">Let&apos;s 
          </span>
           <span className="ml-1 md:ml-3 italic">
            <TypewriterComponent/>
          </span>
        </div>        
        <div className="flex flex-row basis-2/4 mt-3 md:mt-0">
          <StartButtom />
        </div>
      </div>
    </div>
  )
}

export default Hero;