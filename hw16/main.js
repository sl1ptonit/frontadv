function Student(firstName, secondName, dateOfBirth) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.dateOfBirth = dateOfBirth;
    this.grades = [];
    this.attendance = []; //25 max
    this.averageGrade = function () {

        if (!this.grades.length) {
            console.log('You have to fill grades');
        }

        const sum =  this.grades.reduce( (ac, cur) => {
            return ac + cur;
        }, 0);

        return sum / this.grades.length;
    }

    this.getFullName = function () {
        return this.firstName + ' ' + this.secondName;
    }

    this.getAge = function() {
        return this.getFullName() + " age: " + ((new Date()).getFullYear() - (new Date(this.dateOfBirth)).getFullYear());
    }

    this.present = function() {
        if (this.attendance.length >= 25) {
            console.log('Attendance is 25 already')
        } else {
            this.attendance.push(true);
        }
    }

    this.absent = function () {
        if (this.attendance.length >= 25) {
            console.log('Attendance is 25 already')
        } else {
            this.attendance.push(false);
        }
    }

    this.addGrade = function (value) {
        if (isNaN(value)) {
            console.log("Wrong value");
        } else {
            this.grades.push(value);
        }
    }

    this.summary = function() {
        let avgGrade = this.averageGrade();
        let countPresent = this.attendance.filter(value => value).length;
        let avgPresent = countPresent / this.attendance.length;

        if (avgGrade > 90 && avgPresent > 0.9) {
            return this.getFullName() + " Молодець!";
        } else if ( (avgGrade > 90 && avgPresent < 0.9) || (avgGrade < 90 && avgPresent > 0.9) )  {
            return this.getFullName() + " Добре, але можна краще";
        } else {
            return this.getFullName() + " Редиска!";
        }
    }
}

//Alex
let  alex = new Student('Alex', 'Alexandrovich', '1980-01-01');
alex.addGrade(99);
alex.addGrade(95);
alex.addGrade(96);
alex.addGrade(91);
alex.addGrade(94);
console.log(alex.getAge());
alex.present();
alex.present();
alex.present();
alex.present();
alex.present();
alex.present();
console.log(alex.summary());

//Oleg
let oleg = new Student('Oleg', 'Olegovich', '1990-01-01');
oleg.addGrade(91);
oleg.addGrade(95);
oleg.addGrade(92);
oleg.addGrade(91);
console.log(oleg.getAge());
oleg.present();
oleg.present();
oleg.present();
oleg.absent();
console.log(oleg.summary());

//Ola
let ola = new Student('Ola', 'Olegovna', '1995-01-01');
ola.addGrade(91);
ola.addGrade(95);
ola.addGrade(90);
ola.addGrade(80);
console.log(ola.getAge());
ola.present();
ola.present();
ola.absent();
ola.absent();
console.log(ola.summary());
