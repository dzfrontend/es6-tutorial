/**
 * 迭代
 * 什么是迭代器？
        迭代器是带有特殊接口的对象。含有一个next()方法，调用返回一个包含两个属性的对象，
        分别是value和done，value表示当前位置的值，done表示是否迭代完，当为true的时候，调用next就无效了
 * 什么是可迭代对象？
 *      实现了迭代器的对象为可迭代对象
 */

// 1.es5实现迭代器
// 比如实现数组的迭代器
function createIterator(items) {
    var i = 0
    return {
        next: function() {
            var done = i < items.length
            var value = !done ? items[i++] : items[i]
            return {
                done: done,
                value: value
            }
        }
    }
}
var iteratorArr = createIterator([1, 2, 3])
console.log(iteratorArr.next()) // {done: false, value: 1}
console.log(iteratorArr.next()) // {done: false, value: 2}
console.log(iteratorArr.next()) // {done: true, value: 3}

// 2. 可迭代对象：
// 拥有Symbol.iterator属性的对象都是可迭代对象
// 对象的Symbol.iterator属性定义为对象的迭代器
var arr = ['a', 'b' ,'c'];
console.log(arr) // 查看__proto__可以看到Symbol(Symbol.iterator)属性，则数组本身就是可迭代对象


// 3.for-of循环只能遍历可迭代对象
// ES6创造了一种新的遍历命令for...of循环，for-of根据迭代对象的迭代器具体实现的迭代对象数据来循环

var obj = {
    width: 100,
    height: 100
}

function isIterable(obj) {
    return typeof obj[Symbol.iterator] === 'function' // 检测一个对象是否为可迭代对象
}
console.log(isIterable(obj)) // false，不是可迭代对象，或者看__proto__没有Symbol(Symbol.iterator)
// for(var attr of obj) {
//     console.log(attr) // for-of循环只能遍历可迭代对象，会报错
// }

// 4.es6实现迭代器（实现可迭代对象）

// 把obj转换成可迭代对象

var obj2 = {
    width: 100,
    height: 100
}
obj2[Symbol.iterator] = function() {
    // 实现的迭代器是一个方法，返回next方法， next方法里包含value和done
    let keys = Object.keys(obj2)
    let len = keys.length
    let n = 0
    return {
        next: function() {
            if(n < len) {
                return {
                    value: { k: keys[n], v: obj[keys[n++]]},
                    done: false
                }
            }else{
                return {
                    done: true
                }
            }
        }
    }
}

for (var {k, v} of obj2) { // k,v为迭代器里面的value
    // for-of循环一次就会调用一次obj2[Symbol.iterator]里面的next方法
    console.log(k, v);
}
