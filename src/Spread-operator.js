/**
 * 扩展运算符（...）
 * 概念：把数组、对象转成参数序列
 *      例如：[1, 2, 3] 转成=> 1, 2, 3
 *           { a:1, b:2 } 转成 => a:1, b:2
 */

// 1.数组扩展运算符

// 求数组最大值
let arr = [1, 3, 5, 7, 9]

// es5中
console.log(Math.max(arr[0], arr[1], arr[2], arr[3], arr[4]))
// es6中
console.log(Math.max(...arr)) // 9

// 2.对象扩展运算

let obj1 = { width: 100, margin: 10 }
let obj2 = { height: 100 }
let obj = {
    ...obj1,
    ...obj2
}
console.log(obj) // { width: 100, margin: 10, height: 100 }