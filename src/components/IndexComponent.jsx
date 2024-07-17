function IndexComponent() {
  return (
    <div className="flex flex-col h-4/5 w-3/6 justify-center text-3xl">
        <div className="my-2">
          <span>Who am I?</span>
          <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
        </div>
        <div className="my-2 opacity-25">
          <span className="my-2">Experience</span>
          <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
        </div>
        <div className="my-2 opacity-25">
          <span className="my-2">Skills</span>
          <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
        </div>
        <div className="my-2  opacity-25">
          <span className="my-2">What&apos;s next?</span>
          <div className="bg-base-color w-full h-1 rounded-full mt-2"></div>
        </div>
    </div>
  )
}


export default IndexComponent;