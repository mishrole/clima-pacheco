import mostrarCiudades from './app';

$.fn.pacheco = function(opciones) {

//Click, el elemento debe existir

/*	$('.ciudad').click(() => {	
		console.log('Hola Pacheco');
	});*/

/* This es una palabra reservada con problemas al interactuar con arrow functions jQuery*/

/*$('.row.marketing').on('click', '.ciudad', () => {
	// let id = $(this).attr('data-id');
	let id = $(this).data('id');
	console.log(`Hola ${id}`);
});*/

	const {ciudades} = opciones;
	mostrarCiudades(ciudades, $(this));
	console.log(opciones);

	$(this).on('click', '.ciudad', function() {
		// let id = $(this).attr('data-id');
		const id = $(this).find('p').data('id');
		const modal = $('.modal');

		const [ciudad] = ciudades.filter(ciudad => ciudad.id == id);
		/*
		const ciudad = ciudades.filter(ciudad => ciudad.id == id)[0];
		const ciudad2 = ciudades.filter(ciudad => ciudad.id == id)[1];

		const [ciudad, ciudad2] = ciudad.filter(ciudad => ciudad.id == id);
		
		*/
		modal.removeClass('inactivo');

		const {nombre, descripcion} = ciudad; // Es igual a nombre = ciudad.nombre
		modal.find('h4').text(nombre);
		modal.find('p').text(descripcion);
		// console.log(`${id}`);
	});

};