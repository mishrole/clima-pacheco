import mostrarCiudades from './mostrar-ciudades';
import ciudades from './data';
import './pacheco-plugin';

$(() => {

	$('.row.marketing').pacheco({ciudades});

});
