function palindromo (palabra) {
	var frase = palabra.replace(/\s/g,"");
	for (var i=0; i<frase.length; i++) {
		var a=frase[i].toLowerCase();
		var b=frase[frase.length-(i+1)].toLowerCase();
		if (a !== b) {
			return alert('No es palindormo');
		}
	}
	return alert('Si es un palindromo');
}
palindromo('La ruta nos aporto otro paso natural');

