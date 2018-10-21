/**
 * 解构赋值
 * 概念：允许按照一定的形式，从数据和对象中提取值，并对变量进行赋值
 */

// 1.数组解构-顺序对应

// es6
let [a, b, c] = [1, 2, 3]
console.log(a, b, c) // 1 2 3

// 相当于es5中
var arr = [1, 2, 3]
var d = arr[0]
var e = arr[1]
var f = arr[2]
console.log(d, e, f) // 1 2 3

// -----------------------------------------------------------

// 2.对象解构-key值对应

let { foo, bar } = { foo: 'a', bar: 'b' } // key对应，顺序可以不对应
console.log(foo, bar)

// 给key值取别名
let { left: F, top: B } = { left: 100, top: 100 }
console.log(F, B)

// 对象多重解构
let { range: [r1, r2] } = { range: [10, 20] }
console.log(r1, r2)

