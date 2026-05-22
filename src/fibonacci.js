const fibs = function(n) {
  if (n <= 0)
    return [];
  
  if (n === 1)
    return [0];
  
  const fibsArr = [0, 1];

  if (n === 2)
    return fibsArr;

  for (let i = 2; i < n; ++i) {
    let nextNum = fibsArr[i-2] + fibsArr[i-1];
    fibsArr.push(nextNum);
  }

  return fibsArr;
};

const getFibNum = function(n, fibObj={0:0, 1:1}) {
  if (n in fibObj)
    return fibObj[n];

  fibObj[n] = getFibNum(n-2, fibObj) + getFibNum(n-1, fibObj);
  return fibObj[n];
}

const fibsRec = function(n) {
  if (n === 0)
    return [0];

  const fibObj = {0: 0, 1: 1};
  getFibNum(n-1, fibObj);
  return Object.values(fibObj);
};

export { fibs, fibsRec };