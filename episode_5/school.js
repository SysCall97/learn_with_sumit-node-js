const EventEmitter = require('events');

const emitter = new EventEmitter;



class School extends EventEmitter {
    startPeriod = (periodName) => {
        this.emit('bellRingStart', {
            period: periodName,
            text: 'class start'
        })
    
        return setTimeout(() => {
            this.emit('bellRingEnd', {
                period: periodName,
                text: 'class end'
            });
        }, 2000);
    }
    
}

module.exports = School;