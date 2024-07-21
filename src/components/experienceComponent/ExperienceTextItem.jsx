

function ExperienceTextItem({nameItem, information}) {
  return (
    <div className="flex flex-col flex-wrap my-3">
      <span className="font-bold">
        {nameItem}
      </span>
      <span className="ml-2">
        {information}
      </span>
    </div>
  )
}

export default ExperienceTextItem