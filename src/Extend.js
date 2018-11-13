/**
 * Class继承
 * extends、static、super
*/

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const w = canvas.width = 600
const h = canvas.height = 400

class Ball {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
        this.color = `rgb(${~~Ball.randomFn([55,255])}, ${~~Ball.randomFn([55,255])}, ${~~Ball.randomFn([55,255])})`
        return this // 实例化后支持调用原型方法
    }
    render(ctx) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(0, 0, this.r, 0, 2*Math.PI)
        ctx.fill()
        ctx.restore()
        return this
    }
    // static静态方法
    static randomFn(arr) { // Ball.randomFn([1, 10]) 返回1到10的随机数
        let max = Math.max(...arr)
        let min = Math.min(...arr)
        return Math.random() * (max - min) + min
    }
}

const ball = new Ball(100, 100, 30).render(ctx)

// 继承Ball并做自由落体运动
class SuperBall extends Ball {
    constructor(x, y, r) {
        super(x, y, r) // super子类继承父类构造函数里所有东西
        // 自己的属性
        this.vy = SuperBall.randomFn([2, 4])
        this.g = SuperBall.randomFn([0.2, 0.4]) // 加速度
        this.a = 0
        return this
    }
    move(ctx) {
        this.y += this.vy
        this.vy += this.g

        let current = this.vy * -0.75
        if(this.y + this.r >= ctx.canvas.height) {
            this.y = ctx.canvas.height - this.r
            if(Math.abs(current - this.a) < 0.01) return false
            this.a = this.vy *= -0.75
        }

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        super.render(ctx) // super调用父类的原型方法
        return true
    }
}

// const superBall = new SuperBall(100, 200, 30).render(ctx)

let superBall, timer
canvas.onclick = function(e) {
    let x = e.offsetX
    let y = e.offsetY
    let r = ~~Ball.randomFn([25, 55])
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    superBall = new SuperBall(x, y, r).render(ctx)
    superBallMove()
}

function superBallMove() {
    timer = window.requestAnimationFrame(superBallMove)
    if(!superBall.move(ctx)) {
        window.cancelAnimationFrame(timer)
    }
}
