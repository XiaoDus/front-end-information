var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 123;
var b = '123';
var c = false;
var d = null;
var e = undefined;
// 数组里所有值类型的定义
var arr1 = [1, 2, 3];
// 联合类型 数组中可以有多个类型的定义
var arr2 = [1, '张三', 18];
var arr3 = [1, '张三', true];
// 只能是number类型或 string类型的数组
var arr4 = 5;
var num = [123, '123'];
var num2 = [123, '123', false];
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
function say(name, word) {
    if (word) {
        console.log('我叫：' + name + ',我说了：' + word);
    }
    else {
        console.log('我叫：' + name);
    }
}
say();
{
    name: '张三';
}
// 对象的类型声明及可选属性的指定
var obj = {
    name: '张三',
    sum: function (n1, n2) {
        return n1 + n2;
    }
};
var tiger = {
    name: '小虎',
    "class": '老虎',
    skin: '橘色',
    age: 3,
    say: function () {
        console.log('嗷呜');
    }
};
var arr5 = ['1', '2', '3'];
var arr6 = ['string', 1];
var abc = 1;
var abc2 = '1';
var abc3 = true;
var abc4;
function jian(n1, n2) {
    return n1 - n2;
}
// <a id="link" href=""></a>
// HTMLElement 是公共标签的属性类型
// let alink = document.getElementById('link') as HTMLAnchorElement
// alink.href = ""
var haha = "你好";
// function changeDirection(direction: 'up'|'down'|'left'|'right'){
//     console.log(direction)
// }
var enum_direction;
(function (enum_direction) {
    enum_direction["up"] = "up";
    enum_direction["down"] = "down";
    enum_direction["left"] = "left";
    enum_direction["right"] = "right";
})(enum_direction || (enum_direction = {}));
function changeDirection(direction) {
    console.log(direction);
}
changeDirection(enum_direction.left);
var aa = { name: '张三', age: 20 };
var bb;
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
var Male = /** @class */ (function () {
    function Male(name) {
        this.name = name;
    }
    Male.prototype.say = function () {
        console.log('你好');
    };
    Male.prototype.run = function () {
        console.log('跑步');
    };
    Male.prototype.eat = function () {
        console.log('吃饭');
    };
    Male.prototype.aa = function () {
        this.say();
        this.run();
    };
    return Male;
}());
var kid = /** @class */ (function (_super) {
    __extends(kid, _super);
    function kid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    kid.prototype.learn = function () {
        this.run();
        // this.eat()
    };
    return kid;
}(Male));
var pp = new Male('张三');
pp.say();
var json1 = {
    name: '张三',
    age: 18
};
function shout(word) {
    return word;
}
var rlt = shout({ name: '李四', age: 18 });
console.log(rlt);
function shout2(word) {
    return word;
}
var rlt2 = shout2({ a: 18, b: 19 });
console.log(rlt2);
