"use strict";

/**
 * Symbol: es6新增的一个基本数据类型
 *      数据类型：String、Number、Boolean、Undefined、Null、Object加上es6的Symbol
 *      Symbol值是由Symbol函数调用产生的
 *      每一个Symbol()返回的值都是唯一的，因此一个Symbol值能作为对象属性的标识符
 */

// 1.概念
var s1 = Symbol();
var s2 = Symbol()
var s3 = Symbol('1')
var s4 = Symbol('1')
console.log(s1, s2, s3, s4); // Symbol() Symbol() Symbol(1) Symbol(1)
console.log('typeof:', typeof s1); // 类型为Symbol
console.log(s3 === s4) // false，参数一样但值不相等，说明每一个Symbol()返回的值都是唯一的

// 2.Symbol使用：属性私有化(数据保护)

// 实现Person的gender不能被直接被外部读取

// es5中
var Person1 = (function(){
    var _gender = ''
    function P(name, gender) {
        this.name = name,
        _gender = gender
    }
    // 需要通过特定方法才能获取gender
    P.prototype.getGender = function() {
        return _gender
    }
    return P
})()
var p1 = new Person1('Jack', 'man')
console.log(p1) // P {name: "Jack"} 访问不到gender，需要通过p1.getGender()

// Symbol中 Symbol值能作为对象属性的标识符
var Person2 = (function(){
    var _gender = Symbol('gender') // 用Symbol指定数据类型
    function P(name, gender) {
        this.name = name,
        this[_gender] = gender
    }
    // 需要通过特定方法才能获取gender
    P.prototype.getGender = function() {
        return this[_gender]
    }
    return P
})()
var p2 = new Person2('Jack', 'man')
console.log(p2) // {name: "Jack", Symbol(gender): "man"} 无法通过p2[Symbol(gender)]访问
console.log(p2.getGender())
