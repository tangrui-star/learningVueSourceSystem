// 面向对象  这种写法，对代码的维护性，拓展性不利，
// 1. 从当前目录下并不能知道其他文件的变量名，变量冲突。。
// 2. 在index.html文件中，引入的 js文件过多会导致，加载变慢！
// 由此引出  webpack 的解决方案：
/*import Header from './header.js'
import Content from './content.js'
import Footer from './footer.js'

const app = document.getElementById('app');
new Footer();
new Header();
new Content();*/

// 默认是，无法识别这个文件的
import lifecycle from './lifecycle.png';

// 这个是全局的 scss引用
import styleCss from './index.scss';
import createLife from "./createLife.js";

// 执行这个函数
createLife();

console.log(styleCss)

var img = new Image();
img.src = lifecycle;
img.className = `${styleCss.lifecycle}`;

var app = document.getElementById('app');
app.appendChild(img)

