/*
AMD是依赖前置的，换句话说，在解析和执行当前模块之前，模块作者必须指明当前模块所依赖的模块，
AMD比较适合浏览器环境
全局性方法require()，用于加载模块
*/
require([module], callback);

require(['math'], function (math) {
    math.add(2, 3);
});
// math.add()与math模块加载不是同步的

`<script src="js/require.js" defer async="true" ></script>`
`<script src="js/require.js" data-main="js/main"></script>`;//主入口

// main.js
require.config({
    baseUrl: 'js/lib',
    paths: {
        'jquery': 'jquery.min',
        'underscore': 'underscore.min',
        'backbone': 'backbone.min'
    }
});

require(['./a', './b'], function (a, b) {
    a.doSomething();
    b.doSomething();
});

// math.js
define(['myLib'], function () {//这里用define,myLib模块
    var add = function (x, y) {
        return x + y;
    };
    return {
        add: add
    };

});