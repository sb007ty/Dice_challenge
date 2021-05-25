
//can set image by this
// document.querySelector(".img1").setAttribute("src","/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice3.png");

var a=(Math.floor((Math.random())*6))+1;
var b=(Math.floor((Math.random())*6))+1;

var text=document.querySelector("h1");
if(a>b)
text.innerHTML="Player 1 wins";
else
text.innerHTML="Player 2 wins";
var k1="dice"+a+".png";
var k2="dice"+b+".png";

var source1="images/"+k1;
var source2="images/"+k2;

document.querySelector(".img1").setAttribute("src",source1);

document.querySelector(".img2").setAttribute("src",source2);

