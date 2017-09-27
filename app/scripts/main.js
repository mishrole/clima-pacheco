import mostrarCiudades from './app';
import ciudades from './data';
import './plugin';

$(() => {

	// $(document).pacheco();
	// mostrarCiudades(ciudades);

	$('.row.marketing').pacheco({ciudades});
});
