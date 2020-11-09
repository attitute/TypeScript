(function () {
  'use strict';

  // 接口  描述对象的形状 根据接口提供一些新的类供别人使用
  var fullName = function (obj) {
      return obj.firstName + obj.lastName;
  };
  fullName({ firstName: 'ja', lastName: 'ck' });

}());
//# sourceMappingURL=bundle.js.map
