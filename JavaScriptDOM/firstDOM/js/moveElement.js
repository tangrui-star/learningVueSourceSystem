function moveElement(elementId,final_x,final_y,interval) {

  if (!document.getElementById) return false;
  if (!document.getElementById(elementId)) return false;

  let elem = document.getElementById(elementId);
  // 之前没有效果的原因：style只能拿到内置样式属性

  let xPosition = parseInt(elem.style.left);
  let yPosition = parseInt(elem.style.top);

  if (xPosition == final_x && yPosition == final_y){
    clearTimeout(movement)
    return true
  }
  if (xPosition < final_x){
    xPosition++;
  }
  if (xPosition > final_x){
    xPosition--;
  }
  if (yPosition < final_y){
    yPosition++;
  }
  if (yPosition > final_y){
    yPosition--;
  }
  elem.style.left = xPosition + "px";
  elem.style.top = xPosition + "px";
  let repeat = "moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")";


  movement = setTimeout(repeat,20);
}