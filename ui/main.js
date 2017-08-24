console.log('Loaded!');
//changing the name 
var element=document.getElementById('hol');
element.innerHTML="lol";
var img=document.getElementById("madi");
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft + "px";
}
img.onclick=function(){
    var Interval=setInterval(moveRight,50);
    
}
