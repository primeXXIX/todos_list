let comparisonArray = [false, false, false, false]
let isSet = false

function compareColor(setArray) {
  if (setArray[0].color === setArray[1].color && setArray[1].color === setArray[2].color) {
    comparisonArray[0] = true
  }
  else if (setArray[0].color !== setArray[1].color && setArray[1].color !== setArray[2].color && setArray[0].color !== setArray[2].color) {
    comparisonArray[0] = true
  }
  else {
      comparisonArray[0] = false
  }
}
function compareShape(setArray) {
  if (setArray[0].shape === setArray[1].shape && setArray[1].shape === setArray[2].shape) {
    comparisonArray[1] = true
  }
  else if (setArray[0].shape !== setArray[1].shape && setArray[1].shape !== setArray[2].shape && setArray[0].shape !== setArray[2].shape) {
    comparisonArray[1] = true
  }
  else {
      comparisonArray[1] = false
  }
}
function compareShading(setArray) {
  if (setArray[0].shading === setArray[1].shading && setArray[1].shading === setArray[2].shading) {
    comparisonArray[2] = true
  }
  else if (setArray[0].shading !== setArray[1].shading && setArray[1].shading !== setArray[2].shading && setArray[0].shading !== setArray[2].shading) {
    comparisonArray[2] = true
  }
  else {
      comparisonArray[2] = false
  }
}
function compareNumber(setArray) {
  if (setArray[0].number === setArray[1].number && setArray[1].number === setArray[2].number) {
    comparisonArray[3] = true
  }
  else if (setArray[0].number !== setArray[1].number && setArray[1].number !== setArray[2].number && setArray[0].number !== setArray[2].number) {
    comparisonArray[3] = true
  }
  else {
      comparisonArray[3] = false
  }
}


export default function set(setArray) {
  compareColor(setArray)
  compareShape(setArray)
  compareShading(setArray)
  compareNumber(setArray)
  // if not a Set display "Nope nope nope"
  if (comparisonArray.includes(false)) {
    alert("Nope nope nope")
    setArray = []
    isSet = false
  }
  // else, remove cards from board and deal new cards and give point
  else {
    alert("Congraturations. You winner!!@")
    isSet = true
  }
  console.log(isSet);
}
