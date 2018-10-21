/**
 * 对象扩展
 */

// 1.对象简洁表示法：
// 当对象的key与对应的属性所引用的变量或函数同名的时候，可以简写成一个

var a = 1;
var fn = function() {};

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

// 2.属性名表达式：
// 对象的属性名可以接收表达式做为key，表达式计算的结果作为最终的key

var name = 'imgUrl'
var obj3 = {
    [name]: 'img.png'
}
console.log(obj3) // {imgUrl: "img.png"}
