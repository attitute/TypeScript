
// 函数想要得表示类型 function函数关键字来声明  表达式方式来声明

import { type } from "os"

// 考虑入参和函数的返回值

// 1
function sum(a:string, b:string):string {
    return a + b
}


// 2.如果使用得是表达式 你给他定义了类型 你可以把一个可以兼容得函数赋予给他
// => 表示返回值 规定语法
type Sum = (a:string,b:string)=>string
let sum1:Sum = (a,b)=>{
    return a+ b
}


// 3. 可选参数? 默认值 =

// b可传字符串类型 或者不传 不传就是undefine
// let sum2:(a:string, b?:string)=>string  =  (a,b) => {
//     return a
// }


let sum3  =  (a:string, b:string = 'b'):string => {
    return b
}

// 剩余参数 
let sum4 = (...args:number[])=>{

}
sum4(1,2,3,4)



// 函数的重载 
// 希望把一个字符串 或者数字转换成一个数组
// 123 => [1,2,3]
// '123' => ['1','2','3']
function toArray(value:number):number[]
function toArray(value:string):string[]
function toArray(value: number|string) {
    if (typeof value == 'string') {
        return value.split('')
    }else {
        return value.toString().split('').map(item=>parseInt(item))
    }
}

toArray('123')

export {}