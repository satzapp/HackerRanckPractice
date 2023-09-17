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
    let a = (arr.slice(0,4)).reduce((a,b) => a+b,0);
    let b = (arr.slice(1,5)).reduce((a,b) => a+b,0);
    console.log(a + ' ' + b);
}

miniMaxSum([1,2,3,4,5]);