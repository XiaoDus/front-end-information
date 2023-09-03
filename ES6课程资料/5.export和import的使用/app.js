import * as reg from './reg.js'
// var a = 1;
// var b = function(){
// 	console.log('B')
// }

import {c as cc,d} from './login.js'
import person from './article.js'

console.log(reg.a)
reg.b()

console.log(cc)
d()

person.say()

let p = new person()
p.eat()
