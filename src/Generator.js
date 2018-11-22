/**
 * Generator
 */

function* fn() {
    console.log(1);

    // yield console.log(2);
    let val = yield getData(); // val为next的返回值

    console.log(val);

    console.log(3);
}

function getData() {
    setTimeout(() => {
        console.log(2);
        f.next('yield');
    }, 1000);
}

// 返回一个迭代器函数，里面执行next方法
let f = fn();
// f.next(); // 浏览器控制台输入

/**
 * Generator每次需要执行next很麻烦，递归封装co函数
 */
function* fn2() {
    console.log(1);

    let val = yield getData2();
    console.log(val);

    let val1 = yield getData2();
    console.log(val1);

    let val2 = yield getData2();
    console.log(val2);

    console.log(3);
}

function getData2() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('yield');
        }, 1000);
    } );
}

function co( callback ) {

    let cb = callback();

    // co 递归的调用cb的next方法

    function next(d) {
        let result = cb.next(d); //{value,done}
        if (result.done) {
            return;
        }
        result.value.then( data => {
            next(data);
        } );
    }

    next();
}

co( fn2 );