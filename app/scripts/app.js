const mostrarCiudades = (ciudades, contenedorCiudades) => {
  const listadoCiudades = [];

  ciudades.forEach(ciudad => {
    const htmlCiudad = `
        <div class="col-md-6 ciudad">
          <h4>${ciudad.nombre}</h4>
          <p data-id="${ciudad.id}"><span>20.5</span>°<img src="http://openweathermap.org/img/w/01n.png" alt=""></p>
          <p>${ciudad.descripcion}</p>
        </div>`;

    listadoCiudades.push(htmlCiudad);

  });

  // const contenedorCiudades = document.querySelector('.row.marketing');
  // const contenedorCiudades = $('.row.marketing');
  // contenedorCiudades.innerHTML = listadoCiudades.join('');
  contenedorCiudades.html(listadoCiudades.join(''));
};
export default mostrarCiudades;
