
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


// 修饰符 public(公开的) private(私有的) protected(只能父类与子类使用) readonly(只读)

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
}

let cat = new Cat('tom', 10, '美国')



export {}
