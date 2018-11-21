/**
 * Promise
 *     是构造函数，接收一个参数callback:把要执行的异步任务放到这个callback中
 * Promise对象内部会维护一个状态
 *     默认是：pending
 *     成功：resolved
 *     失败：rejected
 * Promise对象下有一个方法：then，该方法在Promise对象的状态发生改变的时候触发then的回调
 */

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('setTimeout异步')
        // resolve()
        reject()
    }, 1000)
})

console.log(p1) // Promise如果没有resolve或reject就是pending

/**
 * 1.then会接受两个参数：这两个参数都是回调，当对应的promise对象的状态变成了resolved，那么then的第一个callback就会被执行，
 * 如果状态变成了rejected，那么then的第二个callback就会被执行
 */

// p1.then(() => {
//     console.log(2);
// }, () => {
//     console.log('a');
//     // return new Promise((resolve, reject) => {
//     //     reject();
//     // });
//     //上面的简化写法
//     return Promise.reject();
// }).then(() => {
//     console.log(3);
// }, () => {
//     console.log('b');
// }).then(() => {
//     console.log(4);
// }, () => {
//     console.log('c');
// });
// 输出结果： setTimeout异步 a b 4



p1.then(() => {
    console.log(2);
},() => {
    console.log('a');
    return Promise.reject();
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(4);
}).catch(err => {
    // catch和then也会返回一个默认resolved状态的promise对象
    console.log('错了');
}).then(() => {
    console.log(5);
});
// 输出结果： setTimeout异步 a 错了 5

/**
 * Promise.all 按顺序执行所有Promise
 * Promise.race 哪个先执行完
 */

let p2 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(1);
    }, Math.random() * 1000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(2);
    }, Math.random() * 1000);
});

Promise.all( [p2, p3] ).then( data => {
    console.log(data); // 输出：[1, 2]
}, err => {
    console.log(err);
} );

Promise.race( [p2, p3] ).then( data => {
    console.log(data); // 输出：1或者2
}, err => {
    console.log(err);
} );