import TitleSection from "../components/TitleSection"
import IndexComponent from "../components/IndexComponent"
import MessageToActionComponent from "../components/whatNextComponents/MessageToActionComponent"
import ContactComponent from "../components/whatNextComponents/ContactComponent"

function WhatsNext({currentSection}) {
  return(
    <div className="w-full h-full flex flex-col md:flex-row justify-center">
      <div className="w-full h-full flex flex-col basis-1/5 justify-center md:justify-start md:basis-1/3">
        <div className={`
          flex basis-1/5 items-end justify-start
          ml-14
          md:ml-28
          `}>
            <TitleSection title={"What's next?"} />
        </div>
        <div className="hidden md:flex basis-1/5"></div>
        <div className={`
          hidden
          md:flex basis-2/5 w-full items-end justify-start
          ml-14
          md:ml-28
          `}>
            <IndexComponent 
              currentSection={currentSection}
            />
        </div>
        <div className="hidden md:basis-1/5"></div>
      </div>
      <div className={`
        flex flex-col basis-4/5 justify-start items-center md:basis-2/3 md:justify-center
        text-basic md:text-xl lg:text-2xl xl:text-4xl
        text-wrap
        `}>
          <div className="flex flex-row basis-4/12 items-end justify-center">
            <MessageToActionComponent />
          </div>
          <div className="flex flex-row basis-8/12 items-center justify-center">
            <ContactComponent />
          </div>
      </div>
      <div className="flex basis-1/5 md:hidden"></div>
    </div>
  )
}

export default WhatsNext