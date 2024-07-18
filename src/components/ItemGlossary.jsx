import colors from "../utils/colors"

function ItemGlossary ({idItem, text}) {
  return (
    <div>
        <div className="w-3/4 flex flex-row items-center">
          <div>
            <div style={{background: colors[idItem]}} className="w-12 h-12 rounded-full my-2"></div>
          </div>
          <span className="ml-2 text-wrap">{text}</span>
        </div>
    </div>
  )
}

export default ItemGlossary