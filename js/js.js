var g=1.622;var dt=0.016683;var timer=null;var timerFuel=null;var y=10;var v=0;var c=100;var a=g;var velociadadaterrizar=5;var combustibleinicial=100;var sinfuel=!1;var salir=!1;var velocidad=null;var altura=null;var combustible=null;window.onload=function(){velocidad=document.getElementById("velocidad");altura=document.getElementById("altura");combustible=document.getElementById("fuel");document.getElementById("boton3").onclick=function(){document.getElementsByClassName("menu")[0].style.display="block";stop()}
document.getElementById("boton4").onclick=function(){document.getElementsByClassName("menu")[0].style.display="none";start()}
document.getElementById("reset").onclick=function(){restart()}
document.getElementById("reset2").onclick=function(){restart()}
document.getElementById("reset3").onclick=function(){restart()}
document.getElementById("reset4").onclick=function(){restart()}
document.getElementById("reset5").onclick=function(){restart()}
document.getElementById("info").onclick=function(){salir=confirm("¿Seguro que desea salir?");if(salir){window.open("info.html","_self");salir=!1}}
document.getElementById("info2").onclick=function(){salir=confirm("¿Seguro que desea salir?");if(salir){window.open("info.html","_self");salir=!1}}
document.getElementById("about").onclick=function(){salir=confirm("¿Seguro que desea salir?");if(salir){document.getElementById("proyecto").style.display="block"
document.getElementsByClassName("menu")[0].style.display="none";salir=!1}}
document.getElementById("boton2").onclick=function(){if(a==g){motorOn()}else{motorOff()}}
document.getElementsByClassName("facil")[0].onclick=function(){velociadadaterrizar=5;combustibleinicial=100;restart()}
document.getElementsByClassName("normal")[0].onclick=function(){velociadadaterrizar=3;combustibleinicial=80;restart()}
document.getElementsByClassName("dificil")[0].onclick=function(){velociadadaterrizar=2;combustibleinicial=70;restart()}
start()}
function start(){timer=setInterval(function(){moverNave()},dt*1000)}
function stop(){clearInterval(timer);if(y>63){aterrizar=!0;if(v<velociadadaterrizar){document.getElementsByClassName("condicion1")[0].style.display="block";motorOff();c=0}else{document.getElementsByClassName("condicion2")[0].style.display="block";document.getElementById("cohete").src="img/roto.png";motorOff();c=0}}}
function moverNave(){if(y>=0){v+=a*dt;document.getElementById("velocidad").innerHTML=v.toFixed(2);y+=v*dt;document.getElementById("altura").innerHTML=y.toFixed(2);if(y<63){document.getElementById("nave").style.top=y+"%"}else{stop()}}else{y=0;v=0;if(a==-g);motorOff()}}
function motorOn(){a=-g;if(timerFuel==null)
timerFuel=setInterval(function(){actualizarFuel()},10);document.getElementById("cohete").src="img/cohete_fuego_master.png";document.getElementById("boton_img").src="img/fuego.png"}
function motorOff(){a=g;clearInterval(timerFuel);timerFuel=null;document.getElementById("cohete").src="img/cohetemaster.png";document.getElementById("boton_img").src="img/fuegoazul.png"}
function actualizarFuel(){c-=0.1;if(c<0){c=0;sinfuel=!0;if(a==-g){motorOff()}}
document.getElementById("fuel").innerHTML=c.toFixed()}
function restart(){stop();y=10;v=0;g=1.622;a=g;dt=0.016683;c=combustibleinicial;clearInterval(timer);document.getElementById("fuel").innerHTML=c.toFixed();document.getElementById("cohete").src="img/cohetemaster.png";start();document.getElementsByClassName("menu")[0].style.display="none";document.getElementsByClassName("condicion1")[0].style.display="none";document.getElementsByClassName("condicion2")[0].style.display="none";document.getElementById("proyecto").style.display="none"}