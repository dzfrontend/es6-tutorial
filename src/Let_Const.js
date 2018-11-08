/**
 * let：用来声明一个局部变量
 * const：用来声明一个常量，常量就是不可改变的值
 */

/**
 * let
 */
// 1.1 用let声明的变量，只在所在代码块内有效
{
    let a = 1
    console.log(a)
}
// console.log(a) // Uncaught ReferenceError: a is not defined

// 1.2 使用let声明的变量预解析时不存在变量提升

console.log(b) // undefined 用var声明的变量有变量提升，赋值为undefined
var b = 2

// let声明的变量需要先定义
// console.log(c) // Uncaught ReferenceError: c is not defined
let c = 2

// 1.3 let不允许在同一个作用域重复声明
// let c = 3 // Identifier 'c' has already been declared

// 1.4 let暂时性死区

/**
 * const
 * const同样具有局部作用域，不存在变量提升，不允许重复声明
 * 另外，声明const时必须赋值，声明的常量不允许改变
 */

// 2.1 声明const时必须赋值
// const d // 报错Uncaught SyntaxError: Missing initializer in const declaration

// 2.2 声明的常量存储简单数据类型的值时不允许改变其值，如果常量存储的是对象，则对象引用不可改变，至于对象里面的数据如果变化，是没有关系的
const obj = {
    a: 10
}
obj.a = 20 // 不会报错，是因为对象引用没有改变，只是修改了对象里面的数据
console.log(obj) // {a: 20}