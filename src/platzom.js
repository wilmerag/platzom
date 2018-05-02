//import {platzom} from 'platzom'

//platzom.js
export function platzom(str){
	let translation = str;

	// Si la palabra termina en ar, se quitan esos caracteres
	if(str.toLowerCase().endsWith('ar')){
	translation = str.slice(0, -2);
	}

	// Si la palabra inicia con Z, se le añade "pe" al final
	if(str.toLowerCase().startsWith('z')){
	translation += 'pe';
	}

	// Si la palabra traducida tiene 10 o más letras,
	// se debe partir a la mitad y unir con un guión del medio
	if(translation.length >= 10){
	let halft = Math.round(translation.length / 2);
	let firstHalf = translation.slice(0, halft);
	let secondHalf = translation.slice(halft, translation.length);
	translation = '${firstHalf}-${secondHalf}';
	}

	constreverse = (str) => str.split('').reverse().join('');
	const minMay = str => str.split('').map(c => str.indexOf(c) % 2 == 0 ? c.toUpperCase() : c.toLowerCase()).join('');

	if (str == reverse(str.toLowerCase())) {
	return minMay(str)
	}

	return translation;
}

//console.log(platzom("Programar")) // Program
//console.log(platzom("Zorro")) // Zorrope
//console.log(platzom("Zarpar")) // Zarppe
//console.log(platzom("abecedario")) // abece-dario
//console.log(platzom("sometemos")) // SoMeTeMoS