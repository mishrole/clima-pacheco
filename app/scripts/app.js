const mostrarCiudades = ciudades => {
  const listadoCiudades = [];

  ciudades.forEach(ciudad => {
    const htmlCiudad = `
        <div class="col-md-6">
          <h4>${ciudad.nombre}</h4>
          <p data-id="2147714"><span>20.5</span>°<img src="http://openweathermap.org/img/w/01n.png" alt=""></p>
          <p>${ciudad.descripcion}</p>
        </div>`;

    listadoCiudades.push(htmlCiudad);

  });

  // const contenedorCiudades = document.querySelector('.row.marketing');
  const contenedorCiudades = $('.row.marketing');

  // contenedorCiudades.innerHTML = listadoCiudades.join('');
  contenedorCiudades.html(listadoCiudades.join(''));
};
export default mostrarCiudades;
