// Задание 1
function getArrayParams(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let avg = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        };
        sum += arr[i];
    }
    avg = ((sum / arr.length).toFixed(2));

    return {
        min: min,
        max: max,
        avg: Number(avg)
    };
}


// Задание 2
function worker(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log("Массив " + array);
    console.log(sum + " это сумма");
    return sum;
}


function makeWork(arrOfArr, func) {

    let max = 0;
    for (let i = 0; i < arrOfArr.length; i++) {

    }
    return max;
}


// Задание 3
function worker2(arr) {
    // Ваш код
}