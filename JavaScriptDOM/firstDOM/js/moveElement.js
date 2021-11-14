function moveElement(elementId,final_x,final_y,interval) {

  if (!document.getElementById) return false;
  if (!document.getElementById(elementId)) return false;

  let elem = document.getElementById(elementId);
  // 之前没有效果的原因：style只能拿到内置样式属性
  if (elem.movement){
    clearTimeout(elem.movement)
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
  }
  if (xPosition > final_x){
    dist = Math.ceil((xPosition-final_x)/10);
    xPosition -= dist;
  }
  if (yPosition < final_y){
    dist = Math.ceil((final_y-yPosition)/10);
    yPosition += dist;
  }
  if (yPosition > final_y){
    dist = Math.ceil((yPosition-final_y)/10);
    yPosition -= dist;
  }
  elem.style.left = xPosition + "px";
  elem.style.top = yPosition + "px";
  let repeat = "moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")";


  elem.movement = setTimeout(repeat,interval);
}