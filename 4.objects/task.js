function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}


Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}


Student.prototype.addMarks = function(...marks) {

    for (let i = 0; i < marks.length; i++) {
        this.marks.push(marks[i]);
    }
}

Student.prototype.getAverage = function() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
        console.log(sum);
    }
    let average = (sum / this.mark.length);
    console.log(sum);
    return average;
}

Student.prototype.exclude = function(reason) {
    if (average < 0) {
        delete this.subjectName;
        delete this.mark;
        this.exclude = reason;
    }
}