const mergeSort = function(arr) {
  let len = arr.length;
  if (len <= 1)
    return arr;

  // split array into two
  // if odd, first array have 1 more
  // call mergeSort on both array
  let leftLen = len % 2 === 0 ? len / 2 : len / 2 + 1;
  let rightLen = len / 2;
  const sortedLeftArr = mergeSort(arr.toSpliced(leftLen, rightLen));
  const sortedRightArr = mergeSort(arr.toSpliced(0, leftLen));

  // joining back
  // loop through both array until we run out of one of them
    // choose the min of each array and insert into new
  // insert the remains of the leftover array
  let sortedArr = [];
  while (sortedLeftArr.length && sortedRightArr.length) {
    const smallerElem = 
      sortedLeftArr[0] < sortedRightArr[0] 
        ? sortedLeftArr.shift() 
        : sortedRightArr.shift();

    sortedArr.push(smallerElem);
  }

  if (sortedLeftArr.length)
    sortedArr = sortedArr.concat(sortedLeftArr);

  if (sortedRightArr.length)
    sortedArr = sortedArr.concat(sortedRightArr);

  // return array
  return sortedArr;
};

export { mergeSort };