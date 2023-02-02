function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    if (arr[i] > min) {
      return max === arr[i];
    } else (arr[i] < max) {
      return min === arr[i];
    }
    sum += arr[i]
  }

  return { min: min, max: max, avg: avg };

  let averageValue = sum / arr.length;

  return Number(averageValue.toFixed(2));
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
