import AboutMessageComponent from "../components/AboutMessageComponent"
import IndexComponent from "../components/IndexComponent"
import TitleSection from "../components/TitleSection"

function WhoAmI() {
  return(
    <div className="w-full h-full flex flex-row justify-center">
        <div className="w-full h-full flex flex-col basis-1/3">
          <div className="flex basis-1/2 flex-row  items-start">
            <div className="mt-24 ml-24">
              <TitleSection title={"Who am I?"} />
            </div>
          </div>
          <div className="w-full flex basis-1/2 flex-row items-end">
            <div className="w-full flex mb-24 ml-24">
              <IndexComponent />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex basis-2/3 justify-center items-center">
          <AboutMessageComponent />
        </div>
    </div>
  )
}

export default WhoAmI