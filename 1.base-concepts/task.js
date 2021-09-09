function solveEquation(a, b, c) {
    let arr = [];

    let d = (b ** 2) - (4 * a * c);
    console.log(d)
    if (d < 0) {
        arr = [];
    } else if (d === 0) {
        let x = -b / (2 * a);
        arr.push(x);
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x1, x2);
    };
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    console.log(percent)
    let checkForNumberPercent = parseInt(percent);
    let checkForNumberContribution = parseInt(contribution);
    let checkForNumberAmount = parseInt(amount);
    let remainderAmount = amount - contribution;
    let totalAmount;


    if (Number.isNaN(checkForNumberPercent)) {
        totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;

    } else if (Number.isNaN(checkForNumberContribution)) {
        totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    } else if (Number.isNaN(checkForNumberAmount)) {
        totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    } else {
        //Считаем количество месяцев
        let endCreditYear = date.getYear(); // забираем год
        let endCreditMonth = date.getMonth(); // забираем месяц
        let endCreditDay = date.getDate(); //забираем день
        let nowDate = new Date(); //дата сегодня
        let nowDateYear = nowDate.getYear();
        let nowDateMonth = nowDate.getMonth();
        let nowDateDay = nowDate.getDate();

        let diffMonth; // месяцев до окончания кредита

        if ((nowDateYear === endCreditYear) && (nowDateMonth === endCreditMonth) && (nowDateDay <= endCreditDay)) {
            diffMonth = (endCreditYear - nowDateYear) * 12 + (endCreditMonth - nowDateMonth) + 1;
        } else {
            diffMonth = (endCreditYear - nowDateYear) * 12 + (endCreditMonth - nowDateMonth);
        };

        let monthlyPercent = percent / 12 / 100;
        let monthPay = remainderAmount * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** diffMonth) - 1));
        totalAmount = (monthPay * diffMonth).toFixed(2);
        console.log(diffMonth);
        totalAmount = parseFloat(totalAmount);

    }
    return totalAmount;
}