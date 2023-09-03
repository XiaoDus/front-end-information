function dateFormat(dt){
	let newdt = new Date(dt)
	let y = newdt.getFullYear()
	let m = padZero(newdt.getMonth()+1)
	let d = padZero(newdt.getDate())
	
	let hh = padZero(newdt.getHours())
	let mm = padZero(newdt.getMinutes())
	let ss = padZero(newdt.getSeconds())
	
	return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n){
	if(n > 9){
		return n
	}else{
		return '0' + n
	}
}

module.exports = {dateFormat}