// 泛型 特性 ：适用于在声明时不能确定类型，只有在使用时 才能决定类型

import { Interface } from "readline"

// 1. 函数中使用泛型

function createArray<T>(items:number, val:T){
    let result = []
    for(let i = 0; i < items;){
        i++
        result.push(val)
    }
    return result
}

let f = createArray<string>(2, '1') // 如果不定义类型 ts会自动检测类型


// 2. 泛型可以使用多个

function swap<T,K>(tuple:[T,K]):[K,T] {
    return [tuple[1],tuple[0]]
}
swap([1,'2'])

// 3. 函数表达式的写法
// 写在函数上的泛型表示调用函数时 传入具体类型， 写在接口后面的标识使用接口时传入类型

// interface Myswap <T,K> {
//     (val:[T, K]):[T, K]
// };

interface IArr <T, K> {
    [key:number]:K  
};

const swap1 = <T,K>(tuple: IArr<T,K>):IArr<T,K> => {
    return [tuple[0],tuple[1]]
}
swap1([1,'2',3])



// 求和函数 我希望求和  泛型约束

const sum = <T extends string>(a:T,b:T)=>{
    return a+b
}
let r = sum('1','2')

// 泛型约束 只要带有length属性就可以
type withLength = {length:number}
const sum1 = <T extends withLength>(a:T)=>{
    return a.length
}
let r1 = sum1(['1','2'])
let r2 = sum1({length:1})


// 默认泛型 默认给予类型

interface DStr<T = string> {
    name: T
}

type T = DStr
type T1 = DStr<number>
type T2 = DStr<{length:number}>

let str:T = {name:'jack'}

// 数组并且内容是string

interface wigthArr<k=number> {
    [key:number]:k
}

type k = wigthArr
type k1 = wigthArr<string>

let str1:k1 = ['1','2','3']


// 约束属性   keyof 遍历对象T 取所有的key属性

const getVal = <T extends Object, K extends keyof T>(obj:T, key:K):T => {
    return obj
}
getVal({a:1},'a')




// 类 泛型


class MyArray<T> {
    public arr:T[] = []
    add(v:T){
        this.arr.push(v)
    }
    getMaxNumber():T{
        let max = this.arr[0]
        for(var i = 0; i < this.arr.length; i++) {
            let current = this.arr[i]
            current > max ? max = current : null
        }
        return max
    }
}

let arr = new MyArray<number>()
arr.add(1)
arr.add(2)
arr.add(3)
arr.getMaxNumber()

export {}
