// 类型保护 具体到某一个类型 类型判断

// typeof intanceof in 与js一样

// 1. typeof 类型检测
function getVal(val:string | number) {
    if (typeof val === 'string'){
        return ''
    }else{
        return 0
    }
}

// 2. instanceof 用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
class Dog {}
class Cat {}
let getInstance = (clazz:new ()=> Dog | Cat) => {
    return new clazz
}
let instance = getInstance(Dog) 
if (instance instanceof Dog){
    instance
}else{
    instance
}

// 3.in 判断属性是否是数组对象的属性

interface Fish {
    swiming: string
}
interface Bird {
    fly: string
}

function getType(animal: Fish | Bird) {
    if('swiming' in animal){
        return animal
    }else{
        return animal
    }
}


// ts 特有的 可辨识的类型
interface IButton1 {
    class: 'warning'
}
interface IButton2 {
    class: 'success'
}

function getBUtton (val: IButton1 | IButton2) {
    if (val.class === 'warning') {
        val
    } else{
        val
    }
}

getBUtton({class: 'warning'})


// is 语法 自定义类型  is识别类型
interface Fish {
    swiming: string
}
interface Bird {
    fly: string
}

function isFish(animal: Fish | Bird):animal is Fish { 
    return 'swiming' in animal
}

function getType1(animal: Fish | Bird) {
    if(isFish(animal)){
        return animal
    }else{
        return animal
    }
}

// null 保护
function getNum(val?:number|null) {
    val = val || 10 // 如果null 那就是10  缩小使用范围
    function a(){ // 特殊情况 ts中无法检测内部函数变量， 需要再次进行判断
        if(val != null){
            val.toFixed
        }
    }
    a()
}
getNum()



// 对代码完整性进行保护 反推代码 never
// never是永远到不了的 但是你逻辑不完整就能到比如判断为空 以下就是示例

interface ICircle {
    kind: 'circle'
    r: number
}

interface IRant {
    kind: 'rant'
    width: number
    height: number
}

interface ISquare {
    kind: 'square'
    width: number
}

const assert = (obj: never)=>{ throw new Error("error") }

const getArea = (obj: ICircle | IRant | ISquare) => {
    switch (obj.kind){
        case 'rant':
            return obj.width * obj.height;
        case 'square':
            break
        case 'circle':
            break
        default:
            obj
            return assert(obj) // 为了实现完整性保护 检测代码是否完整
    }
}
getArea({kind:'square', width: 100})