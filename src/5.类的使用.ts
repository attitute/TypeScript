
// 类 es6 类来调用的静态属性 私有的实列属性 共享的原型属性
// public公开
class Pointer {
    public x!:number
    public y!:number
    constructor(x:number,y?:number){
        this.x = x
        this.y = y as number
    }
}
let pointer = new Pointer(1)


// 修饰符 public(公开的) private(私有的) protected(只能父类与子类使用) readonly(只读,但是引用类型可以改)

class Animal {
    public name!:string
    public readonly age!:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
}
let animal = new Animal('jk',10)

class Cat extends Animal {
    address = ''
    constructor(name:string,age:number,address:string) {
        super(name, age)
        console.log(this.name)
    }
    // 属性访问器 (可以访问私有属性)
    _eat:string = '111'
    get eat(){
        console.log(this)
        return this._eat
    }
    set eat(nv){
        this._eat = nv
    }
}

let cat = new Cat('tom', 10, '美国')
console.log(Cat)

cat.eat = 'hello'
console.log(cat.eat)
// 原型 实例 静态 super 属性访问器

export {}
