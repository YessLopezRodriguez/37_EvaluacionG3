
for (i=1; i<=3; i++) {
	alert('Turno ' + i);
	var usuario1 = prompt ("¿Piedra, Papel o Tijera?");
	var usuario2 = prompt ("¿Piedra, Papel o Tijera?");
		if (usuario1 === usuario2) {
			alert('Empate');
		} else if (( usuario1 === 'Papel' && usuario2 === 'Piedra') || (usuario1 === 'Tijera' && usuario2 === 'Papel') || (usuario1 === 'Piedra' && usuario2 === 'Tijera')) {
			alert('Gana Usuario 1');
		} else if ((usuario1 === 'Papel' && usuario2 === 'Tijera') || (usuario1 === 'Tijera' && usuario2 === 'Piedra') || (usuario1 === 'Piedra' && usuario2 === 'Papel')){
			alert('Gana Usuario 2');
		} else {
			alert('Datos no corresponden');
		}
}

/*
Papel Piedra = Usuario 1
Papel Tijera = Usuario 2
Tijera Piedra = Usuario 2
Tijera Tijera = Empate
Piedra Piedra = Empate
Papel Papel = Empate
Piedra Papel= Usuario 2
Tijera Papel = Usuario 1
Piedra Tijera = Usuario 1
Tijera Tijera = Empate
Piedra Piedra = Empate
Papel Papel = Empate
*/