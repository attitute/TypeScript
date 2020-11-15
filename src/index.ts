
// 条件类型 js 三元表达式

interface Bird {
    name1: string,
}
interface Sky {
    sky:string
}
interface Fish {
    name2: string
}
interface Swiming {
    swim:string
}
// 泛型约束 约束是否满足特性 满足true
type MyType<T> = T extends Bird ? Sky : Swiming

type x = MyType<Fish> // 那么x就是Swiming类型
type x1 = MyType<Bird> // 那么x1就是Sky类型
// 条件分发 只有联合类型会进行分发操作 最后再取联合类型
type x2 = MyType<Fish|Bird> // 那么x2就是Swiming|Sky联合类型


// 内置类型 （基于条件类型的内置类型,ts已经实现的类型）

// Exclude 类型的排除
type exclude<T,K> = T extends K ? never : T // 原理
type MyEclude = Exclude<string | number | boolean, boolean>







