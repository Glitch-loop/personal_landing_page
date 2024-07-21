

function ExperienceLinkItem({nameItem, message, link}) {
  return (
    <div className="flex flex-col my-3">
      <span className="font-bold mb-1">
        {nameItem}
      </span>
      <a 
        href={link}
        target="_blank"
        className="cursor-pointer hover:opacity-50 underline ml-2"
        >{message}</a>
    </div>
  )
}

export default ExperienceLinkItem