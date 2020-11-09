(function () {
    'use strict';

    // 两个接口不能有冲突
    // 可以描述对象 函数 类 类的实例
    // <T>就是泛型 函数调用时传入类型 
    class Person {
        constructor(name) {
            this.name = name;
            this.name = name;
        }
    }
    function createInstance(clazz, name) {
        return new clazz(name);
    }
    let r = createInstance(Person, 'me');

}());
//# sourceMappingURL=bundle.js.map
