// 装饰器 前端中使用 默认执行

// 1.修饰类
function xxx (target:Function){ // 修饰类本身当前参数 就是类
  target.prototype.say = ()=>{
    console.log('say')
  }
}

// 2.修饰类得属性
function toUppcaseCase(target: any, key:string) { // target 实例 key指定属性
  let value = target[key]
  Object.defineProperty(target,key, {
    get(){
      return value.toUpperCase()
    },
    set(nv){
      value = nv
    }
  })
}

// 3.修饰类的静态属性
function double(num:number){
  return function(target:any, key: string) {
    let value = target[key]
    Object.defineProperty(target, key, {
      get(){
        return value * num
      }
    })
  }
}

// 4.修饰类的方法
function enum1(target:any,key:string,descriptor:PropertyDescriptor) {
  console.log(descriptor)
  // defineProperty 中数据描述符 configurable（可配置） enumerable（可枚举） value（对应值） writable(可更改value)
  descriptor.enumerable = false

}

// 5.修饰类的方法中的参数
function params (target: any,key:string, index: number) { // target:当前类 key:当前方法名 index:修饰得参数在函数中下标
  console.log(target, key, index)
}


@xxx
class Person{
  say!:Function
  @toUppcaseCase
  name:string = 'jack' // 默认走set方法
  @double(2)
  static age:number = 10 // 修饰类静态属性不会走set方法

  @enum1
  getName(x:string, @params xx:string,xxx:string){
  }
}

let person = new Person()
person.say()
person.getName('1','2','3')
console.log(person)
console.log(person.name)
console.log(Person.age)



export {}