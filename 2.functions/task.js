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
function worker(...arr) {

    let sum1 = 0;
    let sum2 = 0;

    for (i = 0; i < arr[0].length; i++) {
        sum1 += arr[0][i];

    }
    for (i = 0; i < arr[1].length; i++) {
        sum2 += arr[1][i];
    }
    console.log(sum1 + " " + sum2);

    return sum;
}

function makeWork(arrOfArr, worker) {


    let max = 0;
    // Ваш кода
    // for ...

    return max;
}

// Задание 3
function worker2(arr) {
    // Ваш код
}