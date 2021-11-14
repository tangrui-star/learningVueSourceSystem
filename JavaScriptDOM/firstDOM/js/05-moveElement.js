function prepareSlideshow() {
  // 确保浏览器支持 DOM 方法
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  // 确保元素存在
  if (!document.getElementById("linkList")) return false;

  // 创建 div 以及 img，并使用 insertAfter 插入新结点
  let slideshow = document.createElement("div");
  slideshow.setAttribute("id","slideshow");
  let preview = document.createElement("img");
  preview.setAttribute("src","images/B.jpg");
  preview.setAttribute("id","preview");
  preview.setAttribute("alt","building blocks of web design");
  slideshow.appendChild(preview);

  // 为图片应用样式
  // var preview = document.getElementById("preview");
  // preview.style.position = "absolute";

  // 取得列表中的所有链接
  var list = document.getElementById("linkList");
  insertAfter(slideshow,list);

  var links = list.getElementsByTagName('a');
  // 为 mouseover 事件添加动画效果
  links[0].onmouseover = function () {
    moveElement("preview",-100,0,10);
  }
  links[1].onmouseover = function () {
    moveElement("preview",-200,0,10);
  }
  links[2].onmouseover = function () {
    moveElement("preview",-300,0,10);
  }
}
addLoadEvent(prepareSlideshow())