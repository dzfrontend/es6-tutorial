/**
 * Class
 * ES6使用calss关键字声明一个类
 */

/**
 * es5中的类
 */
var Pt = function (a, b) {
    this.a = a
    this.b = b
    return this
}
Pt.prototype = {
    constructor: Pt,
    print: function () {
        return this.a + this.b
    }
}
var pt1 = new Pt('hello', 'world')
console.log('es5', pt1.print())

/**
 * es6中的类
 */
class Component {
    constructor(a, b) {
        this.a = a
        this.b = b
        return this
    }
    print() {
        return this.a + this.b
    }
}
var pt2 = new Component('hello', 'world')
console.log('es6', pt2.print())

// 1.Component中的constructor方法是es5中的构造函数，this关键字则代表实例对象

// 2.定义类方法的时候，不需要加function关键字，方法之间不需要逗号分隔，否则会报错

// 3.定义在类里面的方法都是不可枚举的
console.log(Object.keys(Comment.prototype)) // 为空数组[]，说明不可枚举

// 4.调用必须要new