let myName = "张三";
let myAge = 20;
let myfn = function(){
    return "我是" + myName + "! 我今年 '" + myAge + "岁了."
}
let myClass =  class myClass {
    static a = "我是class类!";
}
export { myName, myAge, myfn, myClass }