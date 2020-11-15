
// 接口  描述对象的形状 根据接口提供一些新的类供别人使用

// 计算fullname = firstName + lastName

// type obje = {
//   firstName:string,
//   lastName:string
// }

// 接口与type得区别：
// 接口可以被实现 被继承 type不能
// type可以写联合类型

// 能用接口就用接口 不能用就用type

// 1.描述对象
interface IFullName {
  firstName: string,
  lastName: string
}

const fullName = (obj:IFullName) => {
  return obj.firstName + obj.lastName
}
fullName({firstName: 'ja', lastName:'ck'})

// 2.描述函数
type xx = (firtName:string, lastName:string)=>string
const funllName1:xx = (firtName, lastName) => {
  return firtName+lastName
}
interface IFullName1 {
  (firtName:string, lastName:string):string
}
const funllName2:IFullName1 = (firtName, lastName) => {
  return firtName+lastName
}

// // 混合类型 计数器 一个函数返回一个函数，返回的函数有属性
// interface ICount {
//     count:number,
//     ():number,

// }
// const fn:ICount = () => {
//     return ++fn.count
// }
// fn.count = 0
// console.log(fn())
// console.log(fn())

// 接口特性
interface IVegetables {
  taste: string,
  color: string,
}

// 1. 如果定义值比接口多 可以断言
const tomato:IVegetables = {
  size: 1,
  taste: 'sour',
  color: 'red'
} as IVegetables

// 2. 多个同名接口可以合并 但是会破坏原接口
interface IVegetables {
  size:number
}

const tomato1:IVegetables = {
  size: 1,
  taste: 'sour',
  color: 'red'
}

// 3.可以继承 并且不会破坏原接口
interface Itomato extends IVegetables {
  size: number
}

const tomato2:Itomato = {
  size: 1,
  taste: 'sour',
  color: 'red'
}

// 4. 需要多个不确定属性时
interface IVegetables1 { // 可选属性 可设置仅读属性
  taste: string, // 必填
  size?: number, // 可以不填
  readonly [xxx:string]:any // 随意 只要key是string 值随意
}
const tomato3:IVegetables1 = {
  // size: 1,
  1:1,
  taste: 'sour',
  color: 'red'
}
// tomato3.color = 'green' // 错误示范 仅读属性
// console.log(tomato3.color)

// 5. 接口可以索引数组下标
interface IArr {
  [key:number]:any
}
let arr:IArr = [1,{},'a']

// 可以描述对象 函数 类 类的实例


// ----------------------------------------------
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


// <T>就是泛型 函数调用时传入类型 
class Person {
    constructor(public name:string){
        this.name = name
    }
}

interface Clazz<T> {
    new (name:string):T // 表示类 返回值T
}

function createInstance<T> (clazz:Clazz<T>, name:string){
    return new clazz(name)
}

let r = createInstance<Person>(Person, 'me')


// 类的两种定义方法
// new (name:string)=>any
// new {(name:string):any}





export {}