document.addEventListener("DOMContentLoaded", function(){

  var slideInterval = 4000;


function getFigures() {
 return document.getElementById('carousel').getElementsByTagName('figure');
}


// function moveForward() {
//  var pointer = 0;
//  var figures = getFigures();
//  for (var i = 0; i < figures.length; i++) {
//  if (figures[i].className == 'visible') {
//  figures[i].className = 'hidden';
//  pointer = i;
//  }
//  }
//  if (++pointer == figures.length) {
//  pointer = 0;
//  }
//  figures[pointer].className = 'visible';
//  setTimeout(moveForward, slideInterval);
// }

function moveForward() {
 var pointer = 0;
 var figures = getFigures();
 for (var i = 0; i < figures.length; i++) {
 if (figures[i].className == 'visible') {
 figures[i].className = 'hidden';
 figures[i].setAttribute("style","opacity:0; -moz-opacity:0;");
 pointer = i;
 }
 }
 if (++pointer == figures.length) {
 pointer = 0;
 }
 figures[pointer].className = 'visible';
 figures[pointer].setAttribute("style", "opacity:1; -moz-opacity:1");
 setTimeout(moveForward, slideInterval);
}



function startPlayback() {
 setTimeout(moveForward, slideInterval);
}

startPlayback();

});
