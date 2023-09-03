function format_date(dateStr){
    dt = new Date(dateStr)
    y = dt.getFullYear()
    m = padZero(dt.getMonth() + 1)
    d = padZero(dt.getDate())

    hh = padZero(dt.getHours())
    mm = padZero(dt.getMinutes())
    ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function padZero(n){
    return n > 9 ? n : '0' + n
}
module.exports = { format_date }