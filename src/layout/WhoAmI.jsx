import AboutMessageComponent from "../components/AboutMessageComponent"
import IndexComponent from "../components/IndexComponent"
import TitleSection from "../components/TitleSection"

function WhoAmI() {
  return(
    <div className="w-full h-full flex flex-col md:flex-row justify-center">
        <div className="w-full h-full flex flex-col basis-1/5 md:basis-1/3">
          <div className={`
            flex basis-1/5 items-end justify-start
            ml-14
            md:ml-28
            `}>
              <TitleSection title={"Who am I?"} />
          </div>
          <div className="hidden md:flex basis-1/5"></div>
          <div className={`
            hidden
            md:flex basis-2/5 w-full items-end  justify-start

            ml-14
            md:ml-28
            `}>
              <IndexComponent />
          </div>
          <div className="hidden md:basis-1/5"></div>
        </div>
        <div className={`
          flex flex-col basis-1/5 md:basis-2/3 justify-center items-center
          text-sm md:text-lg lg:text-xl xl:text-3xl
          text-wrap
          `}>
          <AboutMessageComponent />
        </div>
        <div className="flex basis-1/5 md:hidden"></div>
    </div>
  )
}

export default WhoAmI