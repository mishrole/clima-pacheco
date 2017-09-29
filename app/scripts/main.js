import mostrarCiudades from './mostrar-ciudades';
import ciudades from './data';
import './pacheco-plugin';

$(() => {

	// $(document).pacheco();
	// mostrarCiudades(ciudades);

	$('.row.marketing').pacheco({ciudades});
});
