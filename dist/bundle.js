(function () {
    'use strict';

    // 类 es6 类来调用的静态属性 私有的实列属性 共享的原型属性
    // 修饰符 public(公开的) private(私有的) protected(只能父类与子类使用) readonly(只读)
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Cat extends Animal {
        constructor(name, age, address) {
            super(name, age);
            this.address = '';
            console.log(this.name);
        }
    }
    let cat = new Cat('tom', 10, '美国');

}());
//# sourceMappingURL=bundle.js.map
