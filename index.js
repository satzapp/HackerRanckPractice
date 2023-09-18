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

  minArr.splice(minIndex, 1);
  maxArr.splice(maxIndex, 1);
  let minVal = minArr.reduce((a, b) => a + b, 0);
  let maxVal = maxArr.reduce((a, b) => a + b, 0);
  console.log(maxVal + ' ' + minVal);
}
let input = [7, 69, 2, 221, 8974];
// miniMaxSum(input);

function birthdayCakeCandles(candles) {
  let maxCandleCount = candles.filter((val) => (val === Math.max(...candles)))?.length;
  console.log(maxCandleCount);
}
// let candles = [3, 2, 1, 3];
// birthdayCakeCandles(candles);

function timeConversion(s) {
  let [hrs, mins, secWithModifier] = s.split(':');
  let sWithM = secWithModifier.match(/(\d+)([A-Za-z]+)/);
  if (hrs === '12') {
    hrs = '00';
  }
  if (sWithM[2] === 'PM') {
    hrs = parseInt(hrs, 10) + 12;
  }
  console.log(`${hrs}:${mins}:${sWithM[1]}`)
}

// timeConversion("07:05:45PM");

let grades = [73, 67, 38, 33 ];

function gradingStudents(grades) {
    // Write your code here
    
    for(let i=0;i<grades.length; i++) {
      let divisible = grades[i]%5;
      if(divisible >= 3 && grades[i] > 37) {
          console.log(Math.ceil(grades[i] / 5) * 5);
      } else {
        console.log(grades[i])
      }
    }
}

// gradingStudents(grades);

// oranges and apple distance

// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let apCount = 0;
    let orCount = 0;
    
    for(let i=0;i<apples.length;i++) {
        let pos = a + apples[i];
        if(pos >= s && pos <= t) {
            apCount++;
        }
    }
    
    for(let i=0;i<oranges.length;i++) {
        let pos = b + oranges[i];
        if(pos >= s && pos <= t) {
            orCount++;
        }
    }
    
    console.log(apCount);
    console.log(orCount);
}

