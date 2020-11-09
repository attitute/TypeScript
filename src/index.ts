

// 接口可以被类实现 把接口用在类上
interface Speakable { // 接口中的内容都是抽象，没有具体的实现
    name: string,
    speak(): void // 描述类的原型方法 ，void 表示不关心方法的返回值
}

interface ChineseSpeakable {
    speakChinese():void
}

// 两个接口不能有冲突
class Speak implements Speakable,ChineseSpeakable {
    speakChinese(): void {
        throw new Error("Method not implemented.");
    }
    speak(): number {
        throw new Error("Method not implemented.");
    }
    name!: string;
    
}


// 类 抽象类 不能被实例化 只有抽象类可以标记abstract 标记abstract才需要子类实现
abstract class Animal { // 抽象类中可以包含抽象方法和抽象属性
    abstract name:string // 抽象没有实现 
    eat(){ // 有实现（是否赋值）
        console.log('eat')
    }
}

class Tom extends Animal {
    name!: string;
    
}

// 可以描述对象 函数 类 类的实例


// <T>就是泛型 函数调用时传入类型 
class Person {
    constructor(public name:string){
        this.name = name
    }
}

interface Clazz<T> {
    new (name:string):T
}

function createInstance<T> (clazz:Clazz<T>, name:string){
    return new clazz(name)
}

let r = createInstance<Person>(Person, 'me')





export {}