function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        console.log("1" + hash);
        let index = cache.findIndex((item) => !!item[hash]);
        console.log(index);
        if (index !== -1) {
            console.log('Из кэша: ' + cache[index][hash]);
            return 'Из кэша: ' + cache[index][hash];
        } else {
            const result = {};
            result[hash] = func.call(this, ...args);
            cache.push(result);
            if (cache.length > 5) {
                cache.splice(0, 1);
            }
            console.log("Вычисляем: " + result[hash]);
            return "Вычисляем: " + result[hash];
        }
    }
    return wrapper;
}


function debounceDecoratorNew(func, ms) {

    let timeout = false;

    let isCooldown = true;

    function wrapper(...args) {
        if (!isCooldown) {
            console.log("игнор");
            return;
        }
        func.apply(this, args);
        isCooldown = false;

        setTimeout(() => {
            isCooldown = true;
            console.log('Время прошло')
        }, ms);
    };
    return wrapper;
}

function debounceDecorator2(func, ms) {

}