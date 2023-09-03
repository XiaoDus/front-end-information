module.exports.name = '张三'
module.exports.say = function(){
	console.log('大家好呀')
}

// module.exports = function(){
// 	console.log('直接执行')
// }

function eat(){
	console.log('我在吃饭')
}
function run(){
	console.log('跑步中...')
}
// module.exports = eat
//优先级
//1. module.exports = {}
//2. module.exports.xxx = 
//3. exports.xxx = 
//4. exports = {}
 //直接赋值，会替换/覆盖原本exports对象所有的内容
module.exports = { eat,run } 
// console.log(module)
