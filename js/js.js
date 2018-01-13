
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g;
 //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
 //velociad de aterrizaje
 var velociadadaterrizar = 5;
 //combustible inicial
 var combustibleinicial = 100;
 //sin combustible
 var sinfuel = false;
 //salir
 var salir = false;
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;


//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("boton3").onclick = function () {
		document.getElementsByClassName("menu")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
		document.getElementById("boton4").onclick = function () {
		document.getElementsByClassName("menu")[0].style.display = "none";
		start();
	}
	//boton para activar el reinicio
		document.getElementById("reset").onclick = function () {
			restart();
	}
	document.getElementById("reset2").onclick = function () {
			restart();
	}
	document.getElementById("reset3").onclick = function () {
		
			restart();
	}
	document.getElementById("reset4").onclick = function () {
		
			restart();
	}
	document.getElementById("reset5").onclick = function () {
		
			restart();
	}
	//confirmar salir para la informacion
	document.getElementById("info").onclick = function () {
		salir=confirm("¿Seguro que desea salir?");
		if(salir){
			window.open("info.html","_self");
			salir=false;
		}
	}
	//confirmar salir para la informacion desde el menu
	document.getElementById("info2").onclick = function () {
		salir=confirm("¿Seguro que desea salir?");
		if(salir){
			window.open("info.html","_self");
			salir=false;
		}
	}
	document.getElementById("about").onclick = function () {
		salir=confirm("¿Seguro que desea salir?");
		if(salir){
			document.getElementById("proyecto").style.display = "block"
			document.getElementsByClassName("menu")[0].style.display = "none";
			salir=false;
		}
	}
	//encender/apagar el motor
	document.getElementById("boton2").onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//dificultadas definicion
	document.getElementsByClassName("facil")[0].onclick = function () {
	
		velociadadaterrizar=5;
		combustibleinicial=100;
		restart();
	}
	document.getElementsByClassName("normal")[0].onclick = function () {
	
		velociadadaterrizar=3;
		combustibleinicial=80;
		restart();
	}
	document.getElementsByClassName("dificil")[0].onclick = function () {
	
		velociadadaterrizar=2;
		combustibleinicial=70;
		restart();
	}
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
	if(y>63){
		aterrizar = true;
		if(v<velociadadaterrizar){
			//victoria
			document.getElementsByClassName("condicion1")[0].style.display = "block";
			motorOff();
			c = 0;
		}else{
			//derrota
			document.getElementsByClassName("condicion2")[0].style.display = "block";
			document.getElementById("cohete").src = "img/roto.png";
			motorOff();
			c = 0;
		}
	}
}

function moverNave(){
	if(y>=0){
	//cambiar velocidad y posicion
		v +=a*dt;
		document.getElementById("velocidad").innerHTML=v.toFixed(2);
		y +=v*dt;
		document.getElementById("altura").innerHTML=y.toFixed(2);
		//actualizar marcadores
	
	
	//mover hasta que top sea un 70% de la pantalla
		if (y<63){ 
		document.getElementById("nave").style.top = y+"%"; 
		} else { 
		stop();
		}
	//tope superior apagar motor y parar nave en seco
	}else{
		y=0;
		v=0;
		if(a==-g);
		motorOff();
	}
}
function motorOn(){
	//el motor da aceleración a la nave
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);
	document.getElementById("cohete").src = "img/cohete_fuego_master.png";
	document.getElementById("boton_img").src = "img/fuego.png" ;
}
function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById("cohete").src = "img/cohetemaster.png";
	document.getElementById("boton_img").src = "img/fuegoazul.png" ;
}

function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ){
		c = 0;
		sinfuel = true;
		if(a==-g){
			motorOff();
		}
	}
	document.getElementById("fuel").innerHTML=c.toFixed();

}
function restart(){
	stop();
	y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
	v = 0;
	g = 1.622;
	a = g;
	dt = 0.016683;
	c = combustibleinicial;
	clearInterval(timer);
	document.getElementById("fuel").innerHTML=c.toFixed();
	document.getElementById("cohete").src = "img/cohetemaster.png";
	start();
	document.getElementsByClassName("menu")[0].style.display = "none";
	document.getElementsByClassName("condicion1")[0].style.display = "none";
	document.getElementsByClassName("condicion2")[0].style.display = "none";
	document.getElementById("proyecto").style.display = "none";
}
