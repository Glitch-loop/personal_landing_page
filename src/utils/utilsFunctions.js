
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateCoordinates(items, limit) {
  // Boundaries for vertical number
  let lowNumer = 0
  let highNumer = 0
  for(let i = 0; i < items.length; i++) {

    if(items[i].id === '0') { // First node that indicates "today"
      items[i].position.x = 0
      items[i].position.y = 0
    } else {
      items[i].position.x = getRandomNumber(limit * -1, limit)
      items[i].position.y = getRandomNumber(lowNumer, highNumer)
    }
    
    
    lowNumer =  items[i].position.y + 100
    // lowNumer += 50 // This might be an option, but it is possible the overlapping of edges
    highNumer = items[i].position.y + 200
  }

  return items
}

function generateEdges(items) {
  let edges = []
  if (items.lenght <= 1) //Either there is one node or there isn't anyone
    return edges
  
  for(let i = 0; i < items.length - 1; i++) {
    edges.push(
      {
        id: 'e' + items[i].id + '-' +  items[i + 1].id,
        source: items[i].id,
        target: items[i + 1].id,
        animated: true,
        style: { stroke: '#d9d9d9' },
      }
    )
  }

  return edges
}


function generateId(items) {
  for(let i = 0; i < items.lenght; i++) {
    items[i].id = JSON.stringify(i)
  }

  return items
}
export {
  getRandomNumber,
  generateCoordinates,
  generateEdges,
  generateId
}