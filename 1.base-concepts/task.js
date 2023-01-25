// ----- Задание № 1 -----

"use strict"
function solveEquation(a, b, c) {
  let d = (b ** 2) - (4 * a * c);

  let arr = [];

  if (d < 0) {
    return [];
  } else if (d == 0) {
    return [-b/(2*a)];
  } else {
   return [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
  }

  return arr;
}

// ----- Задание № 2 -----

let p,        // пеобразование ставки в месячную
    s,        // тело кредита
    payment,  // ежемесячная оплата
    result;   // общая сумма

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  isNaN(percent);
  isNaN(contribution);
  isNaN(amount);
  isNaN(countMonths);

  p = (percent / 12) / 100;
  s = amount - contribution;
  payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  result = amount * payment;

  return result.toFixed(2);

  
}