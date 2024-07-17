
function ItemGlossary ({color, radius, otherStyle, text}) {
  let style = `${color} w-${radius} h-${radius} rounded-full ${otherStyle}`
  return (
    <div>
        <div className="flex flex-row items-center">
          <div>
            <div className={style}></div>
          </div>
          <span className="ml-2">{text}</span>
        </div>
    </div>
  )
}

export default ItemGlossary