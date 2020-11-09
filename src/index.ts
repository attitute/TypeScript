
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

// 混合类型 计数器 一个函数返回一个函数，返回的函数有属性
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

// 接口可以索引数组下标
interface IArr {
  [key:number]:any
}
let arr:IArr = [1,{},'a']


// ----------------------------------
// 接口可以被类来实现













export {}