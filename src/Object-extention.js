/**
 * es5中内置对象有String、Number、Boolean、Object、Array、Function、Date、RegExp、Math、Json等
 * es6中对内置对象做了一些扩展
 * 内置对象之ES6对象扩展
 */

/**
 * 1.对象简洁表示法：
 * 当对象的key与对应的属性所引用的变量或函数同名的时候，可以简写成一个
 */
// 

var a = 1;
var fn = function () { };

var obj1 = {
    a: a,
    fn: fn
}

//简写
var obj2 = {
    a,
    fn
};
console.log(obj2)

/**
 * 2.属性名表达式：
 * 对象的属性名可以接收表达式做为key，表达式计算的结果作为最终的key
 */

var name = 'imgUrl'
var obj3 = {
    [name]: 'img.png'
}
console.log(obj3) // {imgUrl: "img.png"}

/**
 * 3.Object.assign()
 * 对象复制
 * 定义：将源对象（sourceN，不知一个源对象）的所有可枚举属性复制到目标对象上（target）
 * 使用方式：Object.assign(target, source1, source2, ..., sourceN)
 * 注意：Object.assign()这个方法是对对象引用的复制，即是浅复制，而不是深复制
 */

let assign1 = { x: 1, y: 2, arr: [1, 2, 3] };
let assign2 = { x: 10 };
// 浅拷贝（只作一层拷贝，当assign1.arr.push(4)，assign2的arr也会变化）
Object.assign(assign2, assign1);

// Object.assign有返回值是目标对象
let assign3 = Object.assign({}, assign2)
console.log(assign2, assign3) // {x: 10, y: 2, arr: Array(3)} {x: 10, y: 2, arr: Array(3)}

/**
 * 4.Object.create()
 * 给Object的原型对象加属性
 */
let objCreate = Object.create({ a: 1, b: 2 })
console.log(objCreate) //{} __proto__:{ a: 1, b: 2 }

/**
 * 5.Object.defineProperty()
 * 定义对象的属性，添加对象的新属性或者修改对象现有属性的配置
 * 语法：Object.defineProperty(object, propertyname, descriptor)
 * 参数object为操作的对象，propertyname为属性名称，descriptor里面有configurable\enumerable\value\writable\get\set等，具体查看文档
 */

// 通过Object.和Object[]方式添加或修改的属性，configurable\enumerable\value\writable默认是true
let objProperty = { x: 1 }
objProperty.y = 10

// 通过 defineProperty 添加或修改的属性，configurable\enumerable\value\writable默认是false
Object.defineProperty(objProperty, 'z', {
    value: 100,
    configurable: false, // 对象属性'z'是否能使用delete删除，默认false不能
    enumerable: false, // 对象属性'z'是否可通过for-in循环枚举，默认false不能
})
delete objProperty.y
// delete objProperty.z // 会报错不能删除
console.log(objProperty) // {x: 1, z: 100}

for (let attr in objProperty) {
    console.log(attr); // 结果为x  因为enumerable: false所以z属性不会被打印
}





