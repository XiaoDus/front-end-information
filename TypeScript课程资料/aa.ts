import { sum } from './calc' //自动帮你引入calc.js/calc.d.ts
// 如果要引入.d.ts这种文件，必须以引入ES6模块化的方式去引入
console.log(sum(1,2))

// import{Person} from './demo'
// demo.d.ts文件内容
type Person = {name: string,age: number}
// export {Person}

let p1: Person = {name:'张三',age:20}
console.log(p1)



