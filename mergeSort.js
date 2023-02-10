function merge(array1, array2) {
  const mergedList = []
  let array1Index = 0
  let array2Index = 0
  while (array1Index < array1.length && array2Index < array2.length) {
    const num1 = array1[array1Index]
    const num2 = array2[array2Index]
    console.log(num1, num2)
    if(num1 <= num2) {
      // push num1 if it's smaller, and prioritize it over num2 if they are equal
      mergedList.push(num1)
      array1Index++
    } else {
      // push num2 if it's the smaller number
      mergedList.push(num2)
      array2Index++
    }
  }
  
  // check for any remaining in either list and push those to mergedList
  while(array2Index < array2.length) {
    mergedList.push(array2[array2Index])
    array2Index++
  }
  while(array1Index < array1.length) {
    mergedList.push(array1[array1Index])
    array1Index++
  }
  return mergedList
}

function splitAt(index, array) {
  return [
    array.slice(0, index), 
    array.slice(index, array.length)
  ]
}

function mergeSortRec(array) {
  if(array.length <= 1) return array
  // round the midPoint to the nearest whole index if it's not even
  const midPoint = Math.round((0 + array.length) / 2)
  const [left, right] = splitAt(midPoint, array)
  return merge(mergeSortRec(left), mergeSortRec(right))
}

/*
  A really bad iterative attempt that doesn't scale.
  Hide your eyes.
  You have been warned...
*/
function mergeSortIterative(array) {
  const originalLength = array.length
  const tempArray = []
  let i = 0
  // first pass

  while(i < array.length) {
    if(array[i + 1] !== undefined) {
      const list1 = [array[i]]
      const list2 = [array[i + 1]]
      tempArray.push(merge(list1, list2))
      i += 2
    } else {
      tempArray.push([array[i]])
      i += 1
    }
  }

  
  array = []
  i = 0
  while(i < tempArray.length) {
    if(tempArray[i + 1] !== undefined) {
      const list1 = tempArray[i]
      const list2 = tempArray[i + 1]
      array.push(merge(list1, list2))
      i += 2
    } else {
      array.push(tempArray[i])
      i += 1
    }
  }

  tempArray.length = 0
  i = 0
  while(i < array.length) {
    if(array[i + 1] !== undefined) {
      const list1 = array[i]
      const list2 = array[i + 1]
      tempArray.push(merge(list1, list2))
      i += 2
    } else {
      tempArray.push(array[i])
      i += 1
    }
  }

  return array
}

//[10, 30, 999999999, 76]
mergeSortIterative([30, 10, 999999999, 76])