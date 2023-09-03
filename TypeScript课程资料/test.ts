let a: number = 123
let b: string = '123'
let c: boolean = false
let d: null = null
let e: undefined = undefined

// 数组里所有值类型的定义
let arr1: number[] = [1,2,3]

// 联合类型 数组中可以有多个类型的定义
let arr2: (number | string)[] = [1,'张三',18]
let arr3: (number | string | boolean)[] = [1,'张三',true]

// 只能是number类型或 string类型的数组
let arr4: number | string[] = 5

// 声明自定义类型
type customType = (string | number)[]
let num: customType = [123,'123']
let num2 = [123,'123',false]

// let sum = (n1: number = 1,n2: number = 4): number => {
//     return n1+n2
// }

// let sum: (n1: number,n2: number) => void = (n1,n2) => {
//     // return n1+n2
//     console.log(n1+n2)
// }
// function sum(n1: number,n2: number):void {
//     // return n1+n2
//     console.log(n1+n2)
// }

// 函数中参数的可选状态声明 ， 参数后冒号前加?
function say(name?: string,word?: string):void {
    if(word){
        console.log('我叫：'+name+',我说了：'+word)
    }else{
        console.log('我叫：'+name)
    }
}
say()

{
    name: '张三'
}

// 对象的类型声明及可选属性的指定
let obj: {
    name: string,
    age?: number,
    sex?: string,
    sum(n1: number,n2: number):number
} = {
    name: '张三',
    sum(n1,n2){
        return n1+n2
    }
}


// type animalType1 = {
//     name: string,
//     class: string,
//     age: number,
//     say(): void
// }
// type aType = number
// interface bType {}
interface animalType {
    name: string,
    class: string,
    age: number,
    say(): void
}
interface catType extends animalType{
    skin: string
}
interface dogType extends animalType{
    tooth: string
}
let tiger: catType = {
    name: '小虎',
    class: '老虎',
    skin: '橘色',
    age: 3,
    say(){
        console.log('嗷呜')
    }
}

let arr5: string[] = ['1','2','3']
let arr6: [string,number] = ['string',1]

let abc = 1
let abc2 = '1'
let abc3 = true
let abc4: boolean

function jian(n1: number,n2: number){
    return n1-n2
}

// <a id="link" href=""></a>
// HTMLElement 是公共标签的属性类型
// let alink = document.getElementById('link') as HTMLAnchorElement
// alink.href = ""

const haha = "你好"

// function changeDirection(direction: 'up'|'down'|'left'|'right'){
//     console.log(direction)
// }


enum enum_direction {
    up='up',
    down='down',
    left='left',
    right='right'
}
function changeDirection(direction: enum_direction){
    console.log(direction)
}
changeDirection(enum_direction.left)

let aa = {name:'张三',age:20}
let bb: typeof aa.name

// function speak(content: any){
//     return content
// }
// // 泛型
// speak(123)
// speak('你好')


// class Person {
//     name: string
//     constructor(nickname: string){
//         this.name = nickname 
//     }
//     say(){
//         console.log('我叫'+this.name)
//     }
//     run(){
//         console.log('我在跑步')
//     }
// }

// class Male extends Person {
//     banzhuan(){
//         console.log('搬砖')
//     }
// }
// class Female extends Person {
//     eat(){
//         console.log('吃饭')
//     }
// }
// const p1 = new Person('张三')
// const p_male = new Male('李四')
// const p_female = new Female('小凤')



// class Cat implements Animal{
//     name: string
//     age: number
//     eat(){
//         console.log('吃饭')
//     }
//     jump(){
//         console.log('跳')
//     }
// }

// interface login {
//     username: string
//     password: string
//     doLogin(): boolean
// }
// class user implements login {
//     username: string
//     password: string
//     doLogin(){
//         return true
//     }
// }


class Male {
    readonly name: string
    constructor(name: string){
        this.name = name
    }
    public say(){ //公开
        console.log('你好')
    }
    protected run(){ //受保护的
        console.log('跑步')
    }
    private eat(){ //私有的
        console.log('吃饭')
    }
    aa(){
        this.say()
        this.run()
    }
}
class kid extends Male {
    learn(){
        this.run()
        // this.eat()
    }
}
const pp = new Male('张三')
pp.say()
// pp.run()
// pp.eat()


// 交叉类型
// 错误演示：
// type skin = string
// type hair = number
// type person1 = skin & hair
// let pp4: person1 = '123'

type pp1 = {
    name: string
    skin?: string
}
type pp2 = {age: number}
type pp3 = pp1 & pp2 // {name: string,age: number}
let json1: pp3 = {
    name:'张三',
    age:18
}

// 泛型约束
interface person {
    name: string,
    age: number,
    skin?: string
}
function shout<Type extends person>(word: Type): Type{
    return word
}
let rlt = shout({name:'李四',age:18})
console.log(rlt)
function shout2<Type extends {a:number}>(word: Type): Type{
    return word
}
let rlt2 = shout2({a:18,b:19})
console.log(rlt2)