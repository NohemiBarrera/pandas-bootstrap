var restaurar = document.getElementsByTagName("div");
var del1 = document.getElementById("eliminar1");
var del2 = document.getElementById("eliminar2");
var del3 = document.getElementById("eliminar3");
var del4 = document.getElementById("eliminar4");
var fotoPanda1 = document.getElementById("panda1");
var fotoPanda2 = document.getElementById("panda2");
var fotoPanda3 = document.getElementById("panda3");
var fotoPanda4 = document.getElementById("panda4");
var parrafo1 = document.getElementById("parrafo1");
var parrafo2 = document.getElementById("parrafo2");
var ocultarIzq = document.getElementById("izquierda");
var ocultarCen = document.getElementById("centro");

del1.addEventListener("click", eliminar1);
del2.addEventListener("click", eliminar2);
del3.addEventListener("click", eliminar3);
del4.addEventListener("click", eliminar4);
reiniciar.addEventListener("click", reiniciarTodo);
ocultarIzq.addEventListener("click", esconderIzq,"ondblclick", mostrarIzq);
ocultarCen.addEventListener("click", esconderCen, "ondblclick", mostrarCen);

function reiniciarTodo(){
	for(var i=0; i<restaurar.length; i++){
		restaurar[i].style.display = "inline-block";
	}
};

function eliminar1(){
	fotoPanda1.style.display = "none";
}

function eliminar2(){
	fotoPanda2.style.display = "none";
}

function eliminar3(){
	fotoPanda3.style.display = "none";
}

function eliminar4(){
	fotoPanda4.style.display = "none";
}

function esconderIzq(){
	parrafo1.style.visibility = "hidden";
}

function esconderCen(){
	parrafo2.style.visibility = "hidden";
}

function mostrarIzq(){
	parrafo1.style.display = "block";
}

function mostrarCen(){
	parrafo2.style.display = "block";
}