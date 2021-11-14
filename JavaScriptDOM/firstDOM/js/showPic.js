function prepareGallery() {
  // 检查 getElementsByTagName、getElementById、
  // 检查是否存在一个 id为 imageGallery 的元素
  if (!document.getElementById) return false;
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById('imageGallery')) return false;

  // 遍历 imageGallery元素的所有链接
  // 绑定 onclick事件，
  // 1.把这个链接作为参数传递给 showPic函数，2.取消链接被点击默认行为 return false
  let gallery = document.getElementById('imageGallery')
  let links = gallery.getElementsByTagName('a');
  for (let i = 0; i < links.length;i++){
    // 绑定 onclick事件
    links[i].onclick = function () {
      // links[i] == this
      // 取消默认行为
      // return !showPic(this);
      // 使用 键盘关键键时：
      return showPic(this) ? false:true;
    }
  }


}
// 实现的目标效果：点击链接后，将下方图片的 src 重置为点击的 href地址
function showPic(whichPic) {
  // 检查 id placeholder && description是否存在
  if (!document.getElementById('placeholder')) return false;
  // 1.获取 点击的节点对象
  // 2.获取 节点对象的 href属性值
  let source = whichPic.getAttribute('href');
  let placeholder = document.getElementById('placeholder');
  // 3.将获取的 img标签的 src属性值置为 当前对象节点的 href属性
  if (placeholder.nodeName != "IMG") return false;
  placeholder.setAttribute('src',source);
  if (document.getElementById('description')){
    let text = whichPic.getAttribute("title") ? whichPic.getAttribute("title"): "";
    let description = document.getElementById("description");
    if (description.firstChild.nodeType == 3){
      description.firstChild.nodeValue = text;
    }
  }
  return true;
}

// function testFunc(){
//   let imageGallery = document.getElementById('imageGallery');
//   let newNode = document.createElement('p');
//   newNode.nodeValue = '123123';
//   imageGallery.appendChild(newNode);
// }

/*动态创建 标签 图片和描述 */
function preparePlaceholder(){
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imageGallery")) return false;
  // 图片占位符
  let placeholder = document.createElement("img");
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","images/A.jpg");
  placeholder.setAttribute("alt","my image gallery");
  // 图片描述占位符
  let description = document.createElement("p");
  description.setAttribute("id","description");
  // 文本：
  let descriptionText = document.createTextNode("Choose an image");
  description.appendChild(descriptionText);

  let gallery = document.getElementById("imageGallery");
  insertAfter(description,gallery);
  insertAfter(placeholder,description);
}

// 在节点之后插入
function insertAfter(newElement,targetElement){
  let parent = targetElement.parentNode;
  if(parent.lastChild == targetElement){
    parent.appendChild(newElement);
  } else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}

// 当出现多个待执行函数时：方式 1
/*    window.onload = function () {
      preparePlaceholder();
      prepareGallery();
    }*/

// 当出现多个待执行函数时：方式 2
function addLoadEvent(func) {
  let oldOnload = window.onload;
  if (typeof window.onload != 'function'){
    window.onload = func;
  } else{
    window.onload = function(){
      oldOnload();
      func();
    }
  }
}
// 使用：
addLoadEvent(preparePlaceholder)
addLoadEvent(prepareGallery);
