// 交叉类型  等于交集 
// 一群比较高的人 和 一群比较帅的人  => 一群又高又帅的人
// Foo & Bar 表示具有 foo 和 name 属性的对象集和具有 bar 和 name 属性的对象集的交集。
// 换句话说，集合包含了属于由 Foo 和 Bar 表示的集合的对象。

// 联合类型 Foo | Bar 表示有 foo 和 name 属性的对象集和有 bar=-+ 和 name 属性的对象集的并集。
// 属于这类集合的对象都含有 name 属性(所以定义出的变量只有name属性)。有些有 foo 属性，有些有 bar 属性。
    interface Foo {
      foo: string;
      name: string;
    }
     
    interface Bar {
      bar: string;
      name: string;
    }
     
    const sayHello = (obj: Foo | Bar) => { /* ... */ };
    let sayHello3:(Foo | Bar)
    type foooo =  Foo & Bar
    const sayHello1 = (obj:foooo) => { /* ... */ };
    let sayHello2:foooo
     
    sayHello({ foo: "foo", name: "lolo"}); // 联合类型 只需要满足其中一个类型即可
    // sayHello({ bar: "bar", name: "growth" });
    sayHello1({ foo: "foo", name: "lolo" ,bar:'bar'});// 需要满足两个类型

    sayHello2 = { foo: "foo", name: "lolo" ,bar:'bar'}
    sayHello2.bar // 所有建都有
    sayHello3 = { foo: "foo", name: "lolo" ,bar:'bar'}
    sayHello3.name // 只有name


    // 交叉存在冲突时 那就给never
    interface Person1 {
        name: string
    }
    interface Person2 {
        name: number
    }
    type Person3 = Person1 & Person2

    function fn():never {
        throw new Error("")
    }
    let person:Person3 = {name: fn()}


    // 使用场景 混合两个对象成一个对象

    // 错误示例
    // function mixin(obj1:Object,obj2:Object):Object{
    //     return {...obj1, ...obj2}
    // }

    // let r = mixin({a:1},{b:2})
    // r.a // object中有什么属性 不知道

    // 交叉类型
    function mixin<T extends Object,K extends Object>(obj1:T,obj2:K):T&K{
        return {...obj1, ...obj2}
    }

    let r = mixin({a:1},{b:2})
    r = {
        a:1,
        b:1
    }

export {}