let Calculadora = require("../Atividade3/Calculadora.js");
let Pessoa = require("../Atividade3/Pessoa.js");

describe("Calc", () => {
	let Calc = new Calculadora();

	test("Abaixo do peso", () => {
		let Pessoa1 = new Pessoa("Alysson Victor", 50, 1.70);

		let IMC = Calc.calcular(Pessoa1);

		expect(IMC.getClassificacao()).toBe("abaixo do peso");
	});
});