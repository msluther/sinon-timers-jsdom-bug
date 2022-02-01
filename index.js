
// Only global.performance exists
console.log('before: global.performance', global.performance.mark, global.performance.constructor.prototype);
console.log('before: global.Performance', global.Performance?.prototype, '\n');

require('global-jsdom/register');

// Now they both exists and global.Performance is a minimal hr-timer
console.log('after global-jsdom: global.performance', global.performance.mark, global.performance.constructor.prototype);
console.log('after global-jsdom: global.Performance', global.Performance?.prototype, '\n');

const sinon = require('sinon');

// Nothing changes
console.log('after sinon: global.performance', global.performance.mark, global.performance.constructor.prototype);
console.log('after sinon: global.Performance', global.Performance?.prototype, '\n');

const clock = sinon.useFakeTimers();

// This is where the bug shows up, performance.mark no longer exists
console.log('after sinon.useFakeTimers: global.performance', global.performance.mark, global.performance.constructor.prototype);
console.log('after sinon.useFakeTimers: global.Performance', global.Performance?.prototype, '\n');

clock.restore();

// Restoration seems to work, back to the same as after the global-jsdom/register
console.log('after sinon clock.restore: global.performance', global.performance.mark, global.performance.constructor.prototype);
console.log('after sinon clock.restore: global.Performance', global.Performance?.prototype, '\n');
