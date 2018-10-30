/**
 * Set集合
 * ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
 * Set应用：数组去重
 */

// 1.如何创建一个Set
// Set 本身是一个构造函数，用new生成
const s = new Set([1, 2, 3])
console.log(s) // Set(3) {1, 2, 3}

// 2.Set类的属性

console.log(s.size) // 3

// 3.Set类的方法
/**
 * 在Set实例的__proto里
 * Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）
 */

// 先介绍四个操作方法
// set.add(value) 添加一个数据，可以链式操作
s.add('a').add('b')

// set.delete(value) 删除指定数据，返回值为布尔值，表示删除是否成功
console.log(s.delete('b')) // ture
console.log(s.delete('b')) // false

// set.has(value) // 判断是否有某个值
console.log(s.has('b')) // false

// set.clear() // 清楚所有数据


// 遍历方法
const s2 = new Set(['red', 'green', 'blue'])

// keys() 返回键名的遍历器
for (let item of s2.keys()) {
    console.log(item);
}
// red
// green
// blue

// values() 返回键值的遍历器
for (let item of s2.values()) {
    console.log(item);
}
// red
// green
// blue

// entries() // 返回键值对的遍历器
for (let item of s2.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

// forEach()

// 数组去重
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
console.log(unique) // [3, 5, 2]


/**
 * WeakSet
 * WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
 * 首先，WeakSet 的成员只能是对象，而不能是其他类型的值
 * 其次，WeakSet 中的对象都是弱引用，WeakSet 里面的引用，都不计入垃圾回收机制
 */

const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
console.log(ws) // WeakSet {[1, 2], [3, 4]}

// 上面代码中，a是一个数组，它有两个成员，也都是数组。将a作为 WeakSet 构造函数的参数，a的成员会自动成为 WeakSet 的成员。

/**
const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)
 */

// 上面代码中，数组b的成员不是对象，加入 WeaKSet 就会报错


const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}
// 上面代码保证了Foo的实例方法，只能在Foo的实例上调用（因为不new就不会执行constructor，foos就没有Foo成员）。这里使用 WeakSet 的好处是，foos对实例的引用，不会被计入内存回收机制，所以删除实例的时候，不用考虑foos，也不会出现内存泄漏

