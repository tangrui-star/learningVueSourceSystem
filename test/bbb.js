// 1.导入的 {} 中定义的变量
import {sum} from "./aaa.js";

var name = '小红';
var flag = false;

console.log("bbb:"+sum(3,3))
// 2.直接导入 export定义的变量
import {num1,height} from "./aaa.js";
console.log("nums1："+num1);
console.log("height："+height);


// 3.导入 export 的函数 function 、 类 Person
import {mul,Person} from "./aaa.js";
console.log("mul："+mul(900,900));

const p = new Person();
p.run()

// 4. 引入 import 默认值
import add from './aaa.js';
add('别急')


// 5. 统一全部导入， 当待导入的变量和方法类过多时，
import * as aaa from './aaa.js';

console.log("aaa："+aaa.flag)
