let str = '今天 06:00'
console.log()
str = str.slice(3)
let start_time = str.split('~')[0]
let end_time = str.split('~')[1]
console.log(start_time)
console.log(end_time)