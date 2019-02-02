//-----------VARIABLES----------
//VARIABLES NAV
let nav = document.getElementById('nav');
let menu = document.getElementById('links');
let open = document.getElementById('open');
let button = document.getElementsByClassName('btn-header');
let close = true;

//VARIABLES VENTANA MODAL DATOS PERSONALES
let modal = document.getElementById('myModal');
let openModal1 = document.getElementById('openModal1');
let closeModal = document.getElementById('close');

//VARIABLES VENTANA MODAL PROFESION
let modal2 = document.getElementById('myModal2');
let openModal2 = document.getElementById('openModal2');
let closeModal2 = document.getElementById('close2');

//VARIABLES VENTANA MODAL PROFESION
let modal3 = document.getElementById('myModal3');
let openModal3 = document.getElementById('openModal3');
let closeModal3 = document.getElementById('close3');

//******INICIO MENU - NAV******
//-----------FUNCIONES-----------
//funcion menu : determina el cambio de nav1 a nav2 cuando se hace scroll
function menus(){

	let Desplazamiento_Actual = window.pageYOffset;

	if(Desplazamiento_Actual <= 300){

		//que nos remueva nav2
		nav.classList.remove('nav2');
		// className para añadir una determinada clase a un elemento (que nos agrege nav1)
		nav.className = ('nav1');
		//tiempo de transicion entre nav1 y nav2 1segundo
		nav.style.transition = '1s';
		menu.style.top = '80px';
		//menu responsive inicio color blanco
		open.style.color = '#fff';

	}else{

		nav.classList.remove('nav1');
		nav.className = ('nav2');
		//proporcionan una forma de animar los cambios de las propiedades CSS, en lugar de que los cambios surtan efecto de manera instantánea. 
		nav.style.transition = '1s';
		menu.style.top = '100px';
		//menu responsive despues de 300 color negro
		open.style.color = '#000';

	}

}

function apertura(){

	if(close){

		menu.style.width = '70%';
		close = false;
		

	}else{

		menu.style.width = '0%';
		menu.style.overflow = 'hidden';
		close = true;

	}
}


//-----------EVENTOS-----------
//EVENTO SCROLL
window.addEventListener("scroll", function(){

//wimdos.pageYOffset : determina la ubicacion del scroll en numeros
	//console.log(window.pageYOffset);

	menus();

});

//EVENTO RELOAD
window.addEventListener("load", function(){

		menus();

});

//EVENTO PARA CUANDO VAYA HACER CLICK EN CUALQUIER PARTE ME CIERRE EL MENU
//e = evento
window.addEventListener("click", function(e){

	//e.target = propiedad que me indica al hacer click en cualquier parte me dice que etiqueta es
	console.log(e.target);

//si menu esta abierto
	if(close==false){
		//que me tome el primer elemento de span
		let span = document.querySelector('span');

		//si lo que vamos a tocar es diferente de span y abrir (open)
		if( e.target !== span && e.target !== open){

			menu.style.width = '0%';
			menu.style.overflow = 'hidden';
			close = true;

		}

	}

});

//EVENTO PERMANECER LA PROPIEDADES ES DECIR QUE NO SE ROMPA LA MAQUETACION
window.addEventListener("resize", function(){

//Si ancho de screen es mayo a 700
	if(screen.width >= 700){

//y me cierre el menu
		close = true;
//me remueva la  propiedad de overflow y overflow que tiene el estilo .enlaces
		menu.style.removeProperty('overflow');
		menu.style.removeProperty('overflow');

	}

});

//EVENTO MENU RESPONSIVE
open.addEventListener("click", function(){

	apertura();

});

//******FIN MENU - NAV******


//******INICIO VENTANA MODAL******

//-----------FUNCIONES-----------


//VENTANA MODAL DATOS PERSONALES
//funcion abrir
openModal1.addEventListener("click", function(){

	modal.style.display = 'block';

});

//funcion cerrar
closeModal.addEventListener("click", function(){

	modal.style.display = 'none';

});

//VARIABLES VENTANA MODAL PROFESION
//funcion abrir
openModal2.addEventListener("click", function(){

	modal2.style.display = 'block';

});

//funcion cerrar
closeModal2.addEventListener("click", function(){

	modal2.style.display = 'none';

});

//VARIABLES VENTANA MODAL EDUCACION
//funcion abrir
openModal3.addEventListener("click", function(){

	modal3.style.display = 'block';

});

//funcion cerrar
closeModal3.addEventListener("click", function(){

	modal3.style.display = 'none';

});

//******FIN VENTANA MODAL******