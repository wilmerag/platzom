'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.platzom = platzom;
//import {platzom} from 'platzom'

//platzom.js
function platzom(str) {
	var translation = str;

	// Si la palabra termina en ar, se quitan esos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	// Si la palabra inicia con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	// Si la palabra traducida tiene 10 o más letras,
	// se debe partir a la mitad y unir con un guión del medio
	if (translation.length >= 10) {
		var halft = Math.round(translation.length / 2);
		var firstHalf = translation.slice(0, halft);
		var secondHalf = translation.slice(halft, translation.length);
		translation = '${firstHalf}-${secondHalf}';
	}

	constreverse = function constreverse(str) {
		return str.split('').reverse().join('');
	};
	var minMay = function minMay(str) {
		return str.split('').map(function (c) {
			return str.indexOf(c) % 2 == 0 ? c.toUpperCase() : c.toLowerCase();
		}).join('');
	};

	if (str == reverse(str.toLowerCase())) {
		return minMay(str);
	}

	return translation;
}

//console.log(platzom("Programar")) // Program
//console.log(platzom("Zorro")) // Zorrope
//console.log(platzom("Zarpar")) // Zarppe
//console.log(platzom("abecedario")) // abece-dario
//console.log(platzom("sometemos")) // SoMeTeMoS