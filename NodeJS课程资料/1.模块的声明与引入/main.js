var hello = require('./hello');
var time = require('./format_date');
hello.say();
hello.person.eat();
var dt = new Date();
console.log(time.format_date(dt))