/**
 * 内置对象之ES6函数扩展
 */

// 1.函数参数默认值

// es5中设置参数默认值的写法
function fn1(x, y) {
    var x = x || 0
    var y = y || 0
}

// es6
// 在形参中设置默认值，若有参数为默认值时，一般是放在尾参数位置
function fn2(x, y = 0) { // y有默认值写在最后面
    console.log(x, y);
}

// 2.rest剩余参数：获取函数多余的参数，且这个rest变量是一个数组

// es5实现rest参数
function arrayPush() {
    // function arrayPush(arr, x, y) // 不定参
    var arr = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
}

var arr1 = [1, 2, 3];
arrayPush(arr1, 'a', 'b', 'c');
console.log(arr1); // [1, 2, 3, "a", "b", "c"]


// es6 
// 注意：剩余参数只能写在形参列表的最后面
function arrayPush2(arr, ...newData) {
    // rest为newData是数组
    for(var i = 0; i< newData.length; i++) {
        arr.push(newData[i])
    }
}

let arr2 = [1, 2, 3]
arrayPush2(arr1, 'a', 'b', 'c')
console.log(arr2)


// 3.箭头函数
// 当参数有且仅有一个的时候，()可以省略；当没有形参，或者形参多于1个的时候，() 是不能省略的
// 如果函数体内只有一条语句，那么 {} 也可以省略，return也是可以省略的，仅有的这一条语句的执行结果就是该函数的返回值，不需要有return语句
// 箭头函数的this在函数创建期间就绑定好了，箭头函数的this指向该箭头函数所在的作用域对象，普通函数的this指向调用当前函数的对象
// 箭头函数没有arguments

// es5函数
function fnArrow() {
    // console.log(this) // this会变
}

// 把es5函数改成es6写法
var fnArrow2 = () => {
    // console.log(this); // this始终指向window
}

// 函数体内只有一条语句可以直接这么写
var fnArrow3 = x => x + 100;
