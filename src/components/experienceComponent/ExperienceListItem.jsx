

function ExperienceListItem({nameItem, message, items, typeOfList}) {
  return (
    <div className="flex flex-col flex-wrap my-3">
      <span className="font-bold">
        {nameItem}
      </span>
      <span className="ml-2">
        {message}
      </span>
      { (typeOfList == 0) &&
        <ul className="list-disc ml-8">
          {items.map(item => {
            if (item === "")
              return (<div key={item} className="hidden"></div>)            
            else
            return (<li key={item} className="my-2">{item}</li>)
          }
          
          )}
        </ul>
      }
    </div>
  )
}

export default ExperienceListItem