function compareArrays(arr1, arr2) {

    let result = arr1.length === arr2.length && arr1.every((item, item2) => item === arr2[item2]);
    return result;

    // Ваш код

    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);

    // Ваш код

    return resultArr; // array
}