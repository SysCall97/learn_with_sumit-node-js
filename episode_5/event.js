const School = require('./school');

const schoole = new School;

schoole.on('bellRingStart', ({period, text}) => console.log(`${period} ${text}`));
schoole.on('bellRingEnd', ({period, text}) => console.log(`${period} ${text}`));

schoole.startPeriod('Physics');