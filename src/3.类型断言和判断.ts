
// 1.联合类型
// 默认你可以认为是并集

let str:string | number // 当没有初始化得时候 只能调用两者类型中得共同方法

// str.toString
// str.valueOf
str = 1 // 会根据赋值 来推到后续的方法
str.toFixed()


str = 'abc'
str.toLowerCase()

// 2. 非空断言 链判断字符 断言

let ele: HTMLElement | null = document.getElementById('#app');
ele!.style.color = 'red'; // 非空断言 表示一定有值

ele?.style?.color; // ele && ele.style && ele.style.color

// 可以做断言操作  
(<HTMLElement>ele).style.color = 'red'; // 把ele强转成HTMLElement 不建议使用 和jsx有冲突
(ele as HTMLElement).style.color = 'red'; // 不能断言不存在的属性

// ele as number // 错误
ele as any as number // 双重断言 会破坏原有类型


// 3.字面量类型  
// 只能自己取定义的

type Direction = 'up' | 'down' | 'left' | 'right' // 类型别名
let direction: Direction

direction = 'up'


export {}