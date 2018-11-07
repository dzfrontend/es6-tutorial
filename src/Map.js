/**
 * Map映射
 * 用来存储不重复key的Hash结构，不同于集合set的是，Map使用的是[key, value]形式存储数据
 * js对象只能用字符串当做键，为了解决这个问题，es6提供了Map数据结构，各种类型的值都可以当做键
 */

// 1.如何创建一个Map
const map = new Map([
    ['a', 1],
    ['b', 2]
])

console.log(map) // {"a" => 1, "b" => 2}

// 2.Map属性
console.log(map.size) // 2

// 3.Map方法

// 3.1 set(key, value) 设置键名key对应的键值为value，然后返回这个Map结构。如果key已有值，则键值会被更新。
map.set('k1', 'k1Vaule').set('k2', 'ke2Vaule').set('k1', 'k1Update')
console.log(map) // {"a" => 1, "b" => 2, "k1" => "k1Update", "k2" => "ke2Vaule"}

// 3.2 get(key) 返回key对应的键值
console.log(map.get('k1')) // k1Update

// 3.3 delete(key) 删除某个key，返回true；删除失败，返回false
console.log(map.delete('k2'))
console.log(map)

// 3.4 has(key) 方法返回一个布尔值，表示某个键值是否存在Map对象之中
console.log(map.has('k2')) // false

// 3.5 clear() 清除所有数据
// map.clear()

// 3.6 keys() 返回键名的遍历器
console.log(map.keys()) //  {"a", "b", "k1"}

// 3.7 values() 返回键值的遍历器
console.log(map.values()) // {1, 2, "k1Update"}

// 3.8 entries() 返回键值对的遍历器
console.log(map.entries()) // {"a" => 1, "b" => 2, "k1" => "k1Update"}

// 3.9 forEach() // 遍历

// 4.Map例子

/*
* es5中私有数据保护，把对象与某个性别关联起来，性别为私有数据
*/ 
const Person = (function(){
    let _gender = [];
    function P(name, gender) {
        this.name = name;
        // _gender = gender; // 这样_gender变量会共享
        _gender.push({
            obj: this,
            gender
        });
    }
    P.prototype.getGender = function() {
        return _gender.find( o => o.obj == this ).gender;
    }
    P.prototype.setGender = function(newGender) {
        // _gender = newGender;
        _gender.forEach( o => {
            if (this == o.obj) {
                o.gender = newGender;
            }
        } );
    }
    return P;
})();

let p1 = new Person('Person1', '男');
let p2 = new Person('Person2', '男');

p1.setGender('女');
console.log( p1.getGender() );
console.log( p2.getGender() );

/**
 * es6中Map私有数据保护
 */
const PersonMap = (function(){
    let _gender = new Map()
    function P(name, gender) {
        this.name = name;
        _gender.set(this, gender)
        // console.log(_gender)
    }
    P.prototype.getGender = function() {
        return _gender.get(this);
    }
    P.prototype.setGender = function(newGender) {
        _gender.set(this, newGender);
    }
    P.getGenders = function() {
        return _gender;
    }
    return P;
})();

let pm1 = new PersonMap('PersonMap1', '男');
let pm2 = new PersonMap('PersonMap2', '男');

pm1.setGender('女');
console.log('Map', pm1.getGender() );
console.log('Map', pm2.getGender() );

// ------------------------------------------------------------------------------------

/**
 * WeakMap
 * 映射：类似于Map，Map的key可以是对象或字符串，但是WeakMap key必须是对象，
 * 特点是key是弱引用类型，GC机制不考虑垃圾回收，不使用就会自动销毁
 */

/**
    pm1 = null
    setInterval(function() {
        console.log( PersonMap.getGenders() ); // {P => "女", P => "男"} 
    }, 1000);
    在上面Map例子中将pm1清空，理论上pm1不再使用应该被垃圾回收，但是输出结果一直为{P => "女", P => "男"} 
    还是会保存pm1原来的性别，造成多余内存消耗，这是因为Map对象是强引用类型，这个时候WeakMap应运而生
*/


// WeakMap内存优化
const PersonWeakMap = (function(){
    let _gender = new WeakMap();
    function P(name, gender) {
        this.name = name;
        _gender.set(this, gender);
    }

    P.prototype.getGender = function() {
        return _gender.get(this);
    }

    P.prototype.setGender = function(newGender) {
        _gender.set(this, newGender);
    }
    
    P.getGenders = function() {
        return _gender;
    }
    return P;
})();


let pwm1 = new PersonWeakMap('PersonWeakMap1', '男');
let pwm2 = new PersonWeakMap('PersonWeakMap2', '男');

pwm1.setGender('女');
console.log('WeakMap', pwm1.getGender() );
console.log('WeakMap', pwm2.getGender() );

pwm1 = null; // 将pwm1清空，输出结果一刚开始为{P => "女", P => "男"} ，一段时间后变成{P => "男"}，这就是内存优化
setInterval(function() {
    console.log( PersonWeakMap.getGenders() );
}, 1000);


