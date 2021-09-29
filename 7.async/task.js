class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (typeof id === 'undefined') {
            throw new Error('id не передан');
        }

        if (this.alarmCollection.find((alarm) => alarm.id === id)) {
            console.error('Звонок с таким id уже имеется');
            return;
        } else {
            this.alarmCollection.push({ time, id, callback });
        }
    }

    removeClock(id) {
        let ind = this.alarmCollection.findIndex((alarm) => alarm.id === id);
        return !!this.alarmCollection.splice(ind, 1);
    }

    getCurrentFormattedTime() {
        const currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return (hours + ":" + minutes);
    }

    checkClock = (alarm) => {
        if (alarm.time === this.getCurrentFormattedTime())
            return alarm.callback();

    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                    this.alarmCollection.forEach((alarm) => { //forEach - вызывает ф-цию для каждого элемента массива
                        checkClock(alarm);
                    });
                },
                1000);
        }

    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarm) => {
            console.log(alarm.id + ', ' + alarm.time)
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock("11:45", () => console.log("Пора вставать"), 1);
    phoneAlarm.addClock("11:46", () => {
            console.log("Уже нужно вставать");
            phoneAlarm.removeClock(2)
        },
        2);

    phoneAlarm.addClock("11:47", () => console.log("Иди умываться"), 3);
    phoneAlarm.addClock("11:48", () => {
        console.log("Вставай, а то проспишь!");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    phoneAlarm.addClock("11:47", () => console.log("Проспал"), 1);
    phoneAlarm.start();
    phoneAlarm.stop();
    phoneAlarm.printAlarms();
    console.log(this.getCurrentFormattedTime);
}

testCase();