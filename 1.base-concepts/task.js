"use strict";
function solveEquation(a, b, c) {
  let arr=[];

  let d = (b**2)-(4*a*c);
  console.log(d)
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    let x = -b/(2*a);
    arr.push(x);
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d))/(2*a);
        let x2 = (-b - Math.sqrt(d))/(2*a);
        arr.push(x1, x2);
      };
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  

  let remainderAmount = (amount - contribution);

  //Считаем количесвто месяцев
  let endCreditYear = date.getYear();// забираем год
  let endCreditMonth = date.getMonth(); // забираем месяц
  let endCreditDay = date.getDate();
  let nowDate= new Date(); //дата сегодня
  let nowDateYear = nowDate.getYear();
  let nowDateMonth = nowDate.getMonth();
  let nowDateDay = nowDate.getDate();

  let diffMonth;

  if ((nowDateMonth ===endCreditMonth) && (nowDateDay <= endCreditDay)) {
    diffMonth = (endCreditYear - nowDateYear)*12 + (endCreditMonth - nowDateMonth);
  } else {
    diffMonth = (endCreditYear - nowDateYear)*12 + (endCreditMonth - nowDateMonth) - 1;
  }
  let monthlyPercent = percent/12/100;
  let monthPay = remainderAmount*(monthlyPercent + monthlyPercent/(((1 + monthlyPercent)**diffMonth) - 1));
  let totalAmount = (monthPay * diffMonth).toFixed(2);



  // код для задачи №2 писать здесь

  return totalAmount;
}
