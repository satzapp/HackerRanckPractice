function plusMinus(arr) {
  let positiveCount, negativeCount, zeroCount;
  positiveCount = negativeCount = zeroCount = 0;
  let result = [];
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }
  console.log(Number(positiveCount / arrLength).toFixed(6));
  console.log(Number(negativeCount / arrLength).toFixed(6));
  console.log(Number(zeroCount / arrLength).toFixed(6));
}

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

function miniMaxSum(arr) {
    // Write your code here
  let minIndex = [...arr].indexOf(Math.min(...arr));
  let maxIndex = [...arr].indexOf(Math.max(...arr));
  let minArr = [...arr];
  let maxArr = [...arr];
  
  minArr.splice(minIndex,1);
  maxArr.splice(maxIndex,1);
  let minVal = minArr.reduce((a,b) => a+b,0);
  let maxVal = maxArr.reduce((a,b) => a+b,0);
  console.log(maxVal + ' ' + minVal);
}
let input = [7, 69, 2, 221, 8974];
miniMaxSum(input);