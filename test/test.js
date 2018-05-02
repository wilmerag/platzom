//test.js
const expect = require('chai').expect
const platzom = require('..').default

describe ('#platzom', function (){
	it('Si la palabra termina en ar se quita las dos letras',function(){

		const translation = platzom('Programar')
		expect(translation).to.equal('Program')

	})

	it('Si la palabra inicia con Z se añade pe',function(){

		
	})

	it('Si la palabra traducida tiene 10 o más caracteres se debe partir en dos',function(){
		
	})

	it('',function(){
		
	})

})