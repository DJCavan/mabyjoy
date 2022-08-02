let rocket = document.createElement("img");
let rocket2 = document.createElement("img");
let rocket3 = document.createElement("img");

rocket.src = "img/gif/2.gif";
rocket2.src = "img/gif/4.gif";
rocket3.src = "img/gif/6.gif";
// document.body.appendChild(rocket);
// document.body.appendChild(rocket2);
document.body.appendChild(rocket3);

rocket.style.width = "100px";
rocket.style.borderRadius = "50%";
rocket.style.border = "solid";
rocket.style.position = "absolute";
rocket.style.left = 0;
rocket.style.top = "10%"

rocket2.style.width = "100px";
rocket2.style.borderRadius = "50%";
rocket2.style.border = "solid";
rocket2.style.position = "relative";
rocket2.style.left = "20px";
rocket2.style.top = "0";



let x = 0;
let xDir = 1;
let xSpd = 1;





function animate() {
  x += xDir * xSpd;
  if( x > window.innerWidth - 100) {
    xDir = -1;
  };
  if( x < 0) {
    xDir = 1;
  };
  rocket.style.left = x + "px";
  rocket2.style.left = x + "px";
  window.requestAnimationFrame( animate );
}
animate();