//Задание №1
const parseCount = (arg) => {
    let argNum = Number.parseInt(arg);
    if (!Number.isNaN(argNum)) {
        return argNum;
    } else {
        const parseCountErr = new Error('Невалидное значение');
        throw parseCountErr;
    }
}

const validateCount = (arg) => {
    try {
        return parseCount(arg);
    } catch (err) {
        return err;
    }
}

//Задание №2
class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (c + b) < a) {
            const triangleErr = new Error('Треугольник с такими сторонами не существует');
            throw triangleErr;
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }



    getPerimeter(a, b, c) {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    getArea(a, b, c) {
        const pp = 0.5 * this.getPerimeter(a, b, c, ); // полупериметр
        const area = Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}