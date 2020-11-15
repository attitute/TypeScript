// ts中的兼容性 一个类型能否被赋予给另一个类型

import { type } from "os";

// 1.基本数据类型的兼容性
let str!: string;
let temp!: string | number;

// str = temp // number怎么能给string 错误示例
// temp = str // 安全性temp本就有number 即合理


// 2.接口类型的兼容性

// ts 叫做鸭子类型检测 结构只要长的像就可以
interface MyNum {
    toString(): string
}

let str2:MyNum = 'xxx' // 字符串肯定有toshting方法
let myNum!:MyNum; // myNum是一个MyNum类型
// let str1:string = myNum  // myNum只有tostring方法 但是字符串有很多方法 所以不合理


interface Animal {
    name:string
    age: number
}

interface Person {
    name:string
    age: number
    address: string
}

let animal!:Animal
let person!:Person

animal = person  // 合理
// person = animal  // 错误示例 Animal 没有类型address

// 3. 函数兼容性
// 函数参数 函数返回值 都有兼容性

// 3.1函数参数：赋值的函数参数要小于或等于被赋值的函数
let sum1 = (a:string, b:string) => {}
let sum2 = (a:string) => {}
sum1 = sum2
// 注：sum1 赋值给sum2的是类型 不是直接告诉sum2 你要接收2个参数
// sum2 = sum1 // 错误示例 sum2只有一个参数 给两个就不合理了


// 3.2 函数返回值 （遵循的原则跟接口是一样的）
type sum = () => {name: string}
type sum1 = () => {name: string,age:number}

let s1!:sum
let s2!:sum1

s1 = s2


// 来一个forEach练练手
 type ForEachFn<T> = (item:T,index:number) => void
 function forEach<T>(arr: T[], cb: ForEachFn<T>) {
    for(let i = 0; i < arr.length; i++){
        cb(arr[i], i)
    }
 }
 forEach<number>([1,2,3,4,5], function(){})


 // 逆变 (函数的参数可以传给父类和自己) 协变（函数的返回值 可以传给自己和子类）
 // 参数可以双向逆变 但是得在非严格模式下 （你要不用严格模式，还用ts干啥）
 class parent {
    parent:string = 'parent'
 }
 class child extends parent {
     child:string = 'child'
 }
 class grandson extends child {
     grandson:string = 'grandson'
 }

 function getFn (cb:(person:child)=>child){} // 定义传入函数类型 参数与返回值是child
 getFn((person:parent)=>new grandson())
//  getFn((person:parent)=>new parent()) // 错误示例 返回值不能传父类
  getFn((person:child)=>new child())
//  getFn((person:grandson)=>new child()) // 错误示例 参数不能传孙子

// 4.类的兼容性 两个类一样就兼容 接口的兼容性差不多
class person1 {
    name:string = 'jack'
}
class person2 {
    name:string = ''
    // private name:string = '' // 不兼容
    private address!:string
}

let p1!:person1
let p2!:person2
p1 = p2

// 5.枚举永不兼容
enum E1 {

}
enum E2 {

}
let e1!:E1
let e2!:E2
// e1 = e2 // 不兼容


// 6.泛型 

interface A<T>{
    [key:number]:T
}
interface B<T>{
    [key:number]:T
}
type A1 = A<string>
// type B1 = B<number> // 不兼容
type B1 = B<string>
let a1!:A1
let b1!:B1
a1 = b1

 // 兼容性总结 不知道怎么考虑安全性就死背下面的
 // 1.基本类型： 可以小范围的赋予给大范围的
 // 2.接口类型： 可以把多的赋予给少的
 // 3.函数的兼容性： 
 // 参数： 可以把参数少的传给参数多的
 // 返回值： 可以把多的赋予给少的
 // 4.类： 可以把多的赋予给少的 出现特殊标识（private，protected）不兼容
 // 5.枚举类型： 永不兼容
 // 6.泛型： 通过最终的结果来确定是否兼容 （返回结果一样就兼容）
export {}