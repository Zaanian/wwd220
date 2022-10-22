// f is the wind chill factor in Fahrenheit
let f = 0
//t is the air average temperature in Fahrenheit
let t = 40
// s is the wind speed in miles per hour
let s = 10
let x = Math.pow(s, 0.16)



f = 35.74+0.6215*t-35.75*x+0.4275*t*x;

let num = f
let n = num.toFixed(2)
let b = `${n} Degrees  Fahrenheit`
document.querySelector("#windchill").textContent = b;