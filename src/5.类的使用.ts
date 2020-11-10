
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
type Sex = {
    boy:boolean
}
class Animal {
    public name!:string
    protected size:number
    public readonly age!:number
    public readonly sex!:Sex
    constructor(name:string,age:number,size: number,sex:Sex){
        this.name = name
        this.age = age
        this.size = size
        this.sex = sex
    }
}
let animal = new Animal('jk',10,10,{boy:true})
console.log(animal.age) // 10 可取
// animal.age = 2 // 错误示例 不可更改
// console.log(animal.size) // 错误示例 只能在父类子类中调用
animal.sex.boy = false // 引用类型可更改

class Cat extends Animal {
    address = ''
    constructor(name:string,size:number,age:number,sex:Sex,address:string) {
        super(name, size, age, sex)
        console.log(this.name)
    }
    // 属性访问器 (可以访问私有属性)
    private _eat:string = '111'
    get eat(){
        console.log(this)
        return this._eat
    }
    set eat(nv){
        this._eat = nv
    }
}

let cat = new Cat('tom', 50, 10, {boy: true}, '美国')
console.log(Cat)

cat.eat = 'hello'
console.log(cat.eat)
// 原型 实例 静态 super 属性访问器

export {}
