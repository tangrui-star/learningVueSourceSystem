function moveElement(elementId,final_x,final_y,interval) {

  if (!document.getElementById) return false;
  if (!document.getElementById(elementId)) return false;

  let elem = document.getElementById(elementId);
  // 之前没有效果的原因：style只能拿到内置样式属性
  if (elem.movement){
    clearTimeout(elem.movement)
  }
  // 安全检查：style.left && style.top 是否存在
  if (!elem.style.left){
    elem.style.left = "0px";
  }
  if (!elem.style.top){
    elem.style.top = "0px";
  }

  let xPosition = parseInt(elem.style.left);
  let yPosition = parseInt(elem.style.top);

  if (xPosition == final_x && yPosition == final_y){
    clearTimeout(elem.movement)
    return true
  }
  let dist = 0;
  if (xPosition < final_x){
    dist = Math.ceil((final_x-xPosition)/10);
    xPosition += dist;
  }else if (xPosition > final_x){
    dist = Math.ceil((xPosition-final_x)/10);
    xPosition -= dist;
  }else if (yPosition < final_y){
    dist = Math.ceil((final_y-yPosition)/10);
    yPosition += dist;
  }else if (yPosition > final_y){
    dist = Math.ceil((yPosition-final_y)/10);
    yPosition -= dist;
  }
  elem.style.left = xPosition + "px";
  elem.style.top = yPosition + "px";
  let repeat = "moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")";


  elem.movement = setTimeout(repeat,interval);
}