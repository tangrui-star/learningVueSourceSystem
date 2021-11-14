function prepareSlideshow() {
  // 确保浏览器支持 DOM 方法
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  // 确保元素存在
  if (!document.getElementById("linkList")) return false;
  if (!document.getElementById("preview")) return false;
  // 为图片应用样式
  var preview = document.getElementById("preview");
  preview.style.position = "absolute";
  preview.style.left = "0px";
  preview.style.top = "0px";

  // 取得列表中的所有链接
  var list = document.getElementById("linkList");
  var links = list.getElementsByTagName('a');
  // 为 mouseover 事件添加动画效果
  links[0].onmouseover = function () {
    console.log(123)
    moveElement("preview",-100,0,10);
  }
  links[1].onmouseover = function () {
    console.log(234)
    moveElement("preview",-200,0,10);
  }
  links[2].onmouseover = function () {
    console.log(345)
    moveElement("preview",-300,0,10);
  }
}
addLoadEvent(prepareSlideshow())