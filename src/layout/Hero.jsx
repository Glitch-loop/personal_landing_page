import StartButtom from "../components/StartButtom";
import TypewriterComponent from "typewriter-effect";

function Hero() {
  return (
    <div className="flex flex-col w-9/12">
      <span className="text-4xl">Hi, I’m <span className="text-project-color-red">Renet</span> an enthusiastic <span className="text-project-color-red">software engineer</span> ready for the action.</span>

      <div className="flex flex-row mt-36 text-center items-center">
        <span className="italic text-6xl">Let's 
        <span className="text-project-color-blue">
          <TypewriterComponent
              options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true,
              }}
          />
        </span>
          {/* <span className="text-project-color-blue">create</span> */}
        </span>
        <div className="ml-6">
          <StartButtom />

        </div>
      </div>
    </div>
  )
}

export default Hero;