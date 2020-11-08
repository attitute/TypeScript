

// 基础类型 number string boolean

const num:number = 1
const str:string = 'hello'
const bool:boolean = true

// 元组  表示长度和个数 都限制好了
const yarr:[string,number,boolean] = ['1',1,true]
// 可以在元组中添加内容，不能通过索引添加属性
// 只能放入元组中已经声明过的类型
yarr.push(false)
console.log(yarr)

// 数组 存放一类类型得集合
const arr1:number[] = [1,2,2,3]

// 联合类型
const arr:(number | string | undefined)[] = ['1',2,3,'4',undefined]
const arr2:Array<number | string> = [1,'2',2]


// 枚举类型 
// 异构枚举 可以在枚举中放不同得类型， 可以通过数字 自动向下推断
// enum USER_ROLE {
//     USER = 'a', // 默认下标是从0开始
//     ADMIN = 3, // 修改了下标 后一个属性得下标在此基础加1
//     MANAGER
// }
// 默认可以正向取出 也可以反举

// 常量枚举 只是提供了一个类型
const enum USER_ROLE{ // 语义化
    USER,
    ADMIN
}
// 不能反举
console.log(USER_ROLE.USER) // 正确
// console.log(USER_ROLE[0]) // 错误


// any 就是不检测数据类型
let arrn:any = ['jack', {name: 'jack'}]
let objn:any = {name: 'jack'}


// null 和undefined 
// 任何类型的子类型  在严格模式下 只能将null 和undefin赋予给null 和undefined
let str2:number | string | undefined
str2 = undefined

// void 空类型 只能接受null 和 undefined 一般用于函数的返回值
// 函数默认得返回值是undefined，默认在严格模式下不能将null赋值给void

let v:void = undefined


// never类型 永远不是任何类型得子类型 可以把never赋给任何类型
// 永远达不到得情况有三种 1.错误 2.死循环 3.类型判断时会出现never

// new Error('')
// while(true){}

function bytype (val:number|string) {
    if(typeof val == 'string') {
        val
    }else if(typeof val == 'number') {
        val
    } else {
        val // never
    }
}


// Symbol BigInt symbol表示独一无二 元编程（编写代码的代码）stringToFlag iterator ....

let s1 = Symbol.for('123')
let s2 = Symbol.for('123')

console.log(s1==s2) // true

// BigInt 最大限制
console.log(Number.MAX_SAFE_INTEGER + 1 == Number.MAX_SAFE_INTEGER + 2) // true


// 对象类型 非原始数据类型 object
const create = (obj:object)=>{

}
create({})
create([])
// create(null) // 基本类型不行
create(function(){})



export {} // 防止模块间得干扰

