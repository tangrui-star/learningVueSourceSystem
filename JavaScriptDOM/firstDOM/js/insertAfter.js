// 在节点之后插入
function insertAfter(newElement,targetElement){
  let parent = targetElement.parentNode;
  if(parent.lastChild == targetElement){
    parent.appendChild(newElement);
  } else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}