class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(author) {
        super(author);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name) {
        super(name);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author) {
        super(author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author) {
        super(author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author) {
        super(author);
        this.type = "detective";
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (const book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

class Student {
    constructor(name, subject) {
        this.name = name;
        this.subject = {};
    }

    addMark(mark, subject) {
        if (mark > 5 || mark < 1) {
            return "Неверная оценка";
        } else {
            if (!this.subject[subject]) {
                this.subject[subject] = [];
            }
            this.subject[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (this.subject[subject] === undefined) {
            return "Такого предмета нет";
        }
        let sum = 0;
        let avg = 0;
        for (let i = 0; i < this.subject[subject].length; i++) {
            sum += this.subject[subject][i];
            avg = (sum / this.subject[subject].length);
        }
        return avg;
    }


    getAverage() {
        let sumSubj = 0;
        for (let subject in this.subject) {
            sumSubj += this.getAverageBySubject(subject);
        }
        let lengthSubj = Object.keys(this.subject).length;
        let avgSubj = 0;
        avgSubj = sumSubj / lengthSubj;
        return avgSubj;
    }
}