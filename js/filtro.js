//------------------------JQUERY-------------------------
$(function(){

	//------CODIGO FILTRO-------
	//todos lo elemento que tiene la clase filter $('.filter') y cuando haga click realice una funcion
	$('.filter').click(function(){

		/*-----EFECTO BOTONES
		como son varios elemento que tiene la clase filter entoces al elemnto que selecione
		 agregele la clase active $(this).addClass('active') y que a sus hermanos remueve la 
		clase active siblings().removeClass('active')
		*/
		$(this).addClass('active').siblings().removeClass('active');

		/*----FILTRO IMAGENES AL HACER CLICK A BOTON----*/
		//variable = el evento que selecionamos voy a tomar el atributo data-nombre
		let value = $(this).attr('data-name');

		//si le damos click a la parte de todos 
		if(value == 'todos'){
			//queremos que nuestra clase cont-work (que contiene cada caja de las 9 imagenes) se muestre
			$('.cont-certificates').show('1000');
		}else{
			//si no fue la clase de dimos en el this vamos a decirle que la clase + value no la esconda
			$('.cont-certificates').not('.'+ value).hide('1000');
			//que lo muestre
			$('.cont-certificates').filter('.' + value).show('1000');

		}
	});//------	FIN CODIGO FILTRO-------

	
	//-----------CODIGO PARA PROGRMAR LOS BOTONES DEL MENU------------
	/*
	declaramos variables tomando las secciones
	$('#equipo') = tomamos su id
	se utiliza clase offset().top = El método $.offset () devuelve un objeto que contiene un value 
	numérico de la posición left y top, los que indican la posición actual de un elemento en relación al documento. 
	*/

	let information = $('#information').offset().top,
		services = $('#services').offset().top,
		certificates = $('#certificates').offset().top,
		contacts = $('#contacts').offset().top;

	//PARA RESPONSIVE (EL HEAD VA ACAMBIAR)
	window.addEventListener('resize',function(){

		let information = $('#information').offset().top,
			services = $('#services').offset().top,
			certificates = $('#certificates').offset().top,
			contacts = $('#contacts').offset().top;

	});

	//link inicio = cada vez que haga click en el boton inicio realice una funcion
	$('#link-star').on("click", function(e){

		//QUE ME ELIMINE O NO ME MUESTRE # AL HACERLE CLICK AL EVENTO
		e.preventDefault();
		//HTML DENTRO DEL BODY QUEREMOS ANIMARLO
		$('html, body').animate({
			//QUE VALLA AL POSICION 0
			scrollTop: 0

		},600);
	});


	//link equipo = cada vez que haga click en el boton equipo realice una funcion
	$('#link-information').on('click', function(e){


		//QUE ME ELIMINE O NO ME MUESTRE # AL HACERLE CLICK AL EVENTO
		e.preventDefault();
		
		//HTML DENTRO DEL BODY QUEREMOS ANIMARLO
		$('html, body').animate({
			//QUE VALLA AL POSICION 0

			scrollTop: information -100

		},600);
	});


	//link servicio = cada vez que haga click en el boton servicio realice una funcion
	$('#link-services').on('click', function(e){

		//QUE ME ELIMINE O NO ME MUESTRE # AL HACERLE CLICK AL EVENTO
		e.preventDefault();
		//HTML DENTRO DEL BODY QUEREMOS ANIMARLO
		$('html, body').animate({
			//QUE VALLA AL POSICION 0
			scrollTop: services -100

		},600);
	});

	//link trabajo = cada vez que haga click en el boton trabajo realice una funcion
	$('#link-certificates').on('click', function(e){

		//QUE ME ELIMINE O NO ME MUESTRE # AL HACERLE CLICK AL EVENTO
		e.preventDefault();
		//HTML DENTRO DEL BODY QUEREMOS ANIMARLO
		$('html, body').animate({
			//QUE VALLA AL POSICION 0
			scrollTop: certificates -100

		},600);
	});

	//link contacto = cada vez que haga click en el boton contacto realice una funcion
	$('#link-contacts').on('click', function(e){

		//QUE ME ELIMINE O NO ME MUESTRE # AL HACERLE CLICK AL EVENTO
		e.preventDefault();
		//HTML DENTRO DEL BODY QUEREMOS ANIMARLO
		$('html, body').animate({
			//QUE VALLA AL POSICION 0
			scrollTop: contacts

		},600);
	});
	//-----------FIN CODIGO PARA PROGRMAR LOS BOTONES DEL MENU------------


	//-----------CODIGO SECCION QUIEN SOY (QUITAR #)------------
	$('#openModal1').on('click', function(e){

		e.preventDefault();

	});

		//-----------CODIGO SECCION PROFESION (QUITAR #)------------
	$('#openModal2').on('click', function(e){

		e.preventDefault();

	});

	//-----------CODIGO SECCION EDUCACION (QUITAR #)------------
	$('#openModal3').on('click', function(e){

		e.preventDefault();

	});


});



