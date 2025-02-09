// ----- Задание № 1 -----

"use strict"

function solveEquation(a, b, c) {
  const discriminant = (b ** 2) - (4 * a * c);

  const coefficient = [];

  if (discriminant < 0) {
    return [];
  } else if (discriminant == 0) {
    return [-b/(2*a)];
  } else {
   return [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)];
  }

  return coefficient;
}

// ----- Задание № 2 -----

let p,        // пеобразование ставки в месячную
    s,        // тело кредита
    payment,  // ежемесячная оплата
    result;   // общая сумма

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  }

  if (isNaN(contribution)) {
    return false;
  }

  if (isNaN(amount)) {
    return false;
  }

  p = percent / 100 / 12;
  s = amount - contribution;
  payment = s * (p + (p / (((1 + p)**countMonths) - 1)));
  result = payment * countMonths;

  return Number(result.toFixed(2)); 

}
