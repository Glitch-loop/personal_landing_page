function IndexComponent() {
  return (
    <div className={`
      flex flex-col w-full items-start justify-start
       lg:text-base xl:text-2xl
      `}>
        <div className="my-2 md:w-2/6 xl:w-1/4">
          <span>Who am I?</span>
          <div className="bg-base-color h-1 rounded-full mt-2"></div>
        </div>
        <div className="my-2 opacity-25  md:w-2/6 xl:w-1/4">
          <span className="my-2">Experience</span>
          <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
        </div>
        <div className="my-2 opacity-25  md:w-2/6 xl:w-1/4">
          <span className="my-2">Skills</span>
          <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
        </div>
        <div className="my-2 opacity-25  md:w-2/6 xl:w-1/4">
          <span className="my-2">What&apos;s next?</span>
          <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
        </div>
    </div>
  )
}


export default IndexComponent;