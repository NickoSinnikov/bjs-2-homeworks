function Student(name, gender, age) {
    let student1 = new student1("Tony", "male", 37);
    let student2 = new student2("Buzz", "female", 35);
}


Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
    if (this.mark === undefined) {
        this.mark = mark;
    } else {
        this.marks.push(mark);
    }
}


Student.prototype.addMark = function(...marks) {
    for (let i = 0; i < marks.length; i++) {
        this.mark.push(marks[i]);
    }
}

Student.prototype.getAverage = function(average) {
    for (let i = 0; i < this.mark.length; i++) {
        let sum = 0;
        sum += this.mark[i];
        let average = ((sum / this.mark.length).toFixed(2))
        this.average = average;
    }
}