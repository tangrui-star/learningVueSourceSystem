var name = '小米';
var age = 19;
var flag = true;

// sum 函数
function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20, 30))
}

// 1. 导出方式一：
export {
  flag, sum
}

// 2. 导出方式二：
export var num1 = 1000;
export var height = 1.66;

// 3. 导出函数/类
export function mul(num1, num2) {
  return num1 + num2;
}

export class Person {
  run() {
    console.log("在奔跑呀阳光")
  }
}

// 4. export default
const address = '北京市';
export {
  address
}
// 而这种方式是，不可更改引入的变量名字的，因此有 export default
// export default address;// 默认导出，引用者可以自由改名字
export default function (argument) {
  console.log(argument)
}
