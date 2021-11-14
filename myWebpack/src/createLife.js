import lifecycle from "./lifecycle.png";

function createLife() {

  var img = new Image();
  img.src = lifecycle;
  img.className = 'lifecycle';

  var app = document.getElementById('app');
  app.appendChild(img)

}
export default createLife;
