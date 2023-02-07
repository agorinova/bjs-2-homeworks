function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > min) max = arr[i];
    if (arr[i] < max) min = arr[i];
    sum += arr[i];
  }

  let averageValue = sum / arr.length;

  let avg = Number(averageValue.toFixed(2));

  return { min: min, max: max, avg: avg };
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
