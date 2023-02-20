function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  let averageValue = sum / arr.length;

  let avg = Number(averageValue.toFixed(2));

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement++;
    } else {
      sumOddElement++;
    }
  }
  let elementDifference = sumEvenElement - sumOddElement;
  return elementDifference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  let sumDivision = (sumEvenElement + countEvenElement) / arr[i];
  return sumDivision;
}

function makeWork (arrOfArr, func) {

}
