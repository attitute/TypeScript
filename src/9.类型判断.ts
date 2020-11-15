// ts类型推断
// 1.当赋值时会推断

import { type } from "os"

let str = '' // 会根据值进行类型推导
let age = 11

// 2.函数默认会进行推断 函数会根据右边的赋值 推到左边的类型 不用特意标注类型
// 3.返回值的推断
const sum = (a:string, b:string)=>{
    return a+b
}

// 4.属性推断
let school = {
    name: 'zf',
    age: 11
}
let {name, age:ag3} = school
// ag3 // 解构别名

// 5.接口取类型

interface ISchool {
    name: string,
    age: number,
    address: {
        n:string
    }
}

type n = ISchool['address']['n'] // 接口取属性只能[] 不能使用点语法


// 类型反推  extends keyof typeof
type MySchool = typeof school // 深拷贝school中的数据 是个值不是类型




export {}