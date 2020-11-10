(function () {
  'use strict';

<<<<<<< HEAD
  // 接口  描述对象的形状 根据接口提供一些新的类供别人使用
  var fullName = function (obj) {
      return obj.firstName + obj.lastName;
  };
  fullName({ firstName: 'ja', lastName: 'ck' });
=======
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
>>>>>>> 1b5eb74bed1831b77b333f21f536728347690c38

}());
//# sourceMappingURL=bundle.js.map
