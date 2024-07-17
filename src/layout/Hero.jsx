
import StartButtom from "../components/StartButtom";
// import TypewriterComponent from "typewriter-effect";
import TypewriterComponent from "../components/TypewriterComponent";

function Hero() {
  return (
    <div className="flex flex-col w-9/12">
      <span className="text-4xl">Hi, I’m <span className="text-project-color-red">Renet</span> an enthusiastic <span className="text-project-color-red">software engineer</span> ready for the action.</span>

      {/* <div className="flex flex-row mt-36 text-center items-center"> */}
      <div className="grid grid-cols-3 gap-4 mt-36 text-center items-center">
        <div className="flex flex-row">
          <span className="italic text-6xl">Let&apos;s 
            {/* <span className="text-project-color-blue">create</span> */}
          </span>
           <span className="ml-3 italic text-6xl">
            <TypewriterComponent/>
          </span>

        </div>        
        <div className="ml-16">
          <StartButtom />
        </div>
      </div>
    </div>
  )
}

export default Hero;