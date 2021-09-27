class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, id, callback) {
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
        this.alarmCollection.splice(ind, 1);
        return;
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

    start() {
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime())
                return alarm.callback();
        }

        if (this.timerId === null) {
            setInterval(() => {
                    this.alarmCollection.forEach((alarm) => { //forEach - вызывает ф-цию для каждого элемента массива
                        checkClock(alarm);
                    });
                },
                1000);
        }
        this.timerId = setInterval;
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