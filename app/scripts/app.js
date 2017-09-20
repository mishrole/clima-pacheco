const mostrarCiudades = ciudades => {
	const listadoCiudades = [];

	ciudades.forEach(ciudad => 
	  	const htmlCiudad = `<h4>${ciudad.nombre}</h4>
	  						<p data-id="2147714"><span>20.5</span>°<img src=""></p>
	  						<p>${ciudad.descripcion}</p>`;
	  	listadoCiudades.push(htmlCiudad);
	  	// console.log(ciudad.nombre));
	});

	const contenedorCiudades = document.querySelector('.row.marketing');
	contenedorCiudades.innerHTML = listadoCiudades.join('');

};

export default mostrarCiudades;
