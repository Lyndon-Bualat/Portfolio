let index=1;

function Next1() {
  index++;
  if(index==10)
  {
    index=1;
  }
  let address='ImgHtml/Img ('+index+').jpg';
  document.getElementById('img').src=address;
}




function Next2() {
  index++;
  if(index==7)
  {
    index=1;
  }
  let address='ImgCss/Img ('+index+').jpg';
  document.getElementById('img1').src=address;
}



function Next3() {
  index++;
  if(index==11)
  {
    index=1;
  }
  let address='ImgTravel/Img ('+index+').JPG';
  document.getElementById('img2').src=address;
}


document.getElementById("btn1").onclick = btn1;
function btn1() {
  window.open("https://lyndon-bualat.github.io/HTML-CheatSheet/");
}


document.getElementById("btn2").onclick = btn2;
function btn2() {
  window.open("https://lyndon-bualat.github.io/CSS-CheatSheet/");
}


document.getElementById("home").onclick = home;
function home() {
  window.open("https://lyndon-bualat.github.io/Portfolio/# ");
}



document.getElementById("restart").onclick = restart;
function restart() {
  location.reload();
}
