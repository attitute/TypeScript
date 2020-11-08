
// ts自带类型推导得功能

let name; // ts中没赋值 默认any类型

name = 'jk'
name = 11

// 默认初始化时会进行推导 后续不可更改
let age = 18
// age = '12' // 错误


// number Number string String

// 在使用基本数据类型时 会将原始类型包装成对象类型

11..toString() // Number(11).toString()
let number1:number = 11
let number2:Number = 11
let number3:number = Number(11)
// let number4:number = new Number(11)
// 类也是一个类型 它可以描述实例
let number5:Number = new Number(11)





export {}