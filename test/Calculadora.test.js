let Calculadora = require("../Atividade3/Calculadora.js");
let Pessoa = require("../Atividade3/Pessoa.js");

describe("Calc", () => {
	test("Abaixo do peso", () => {
		Pessoa = new Pessoa("Alysson Victor", 50, 1.70);

		Calculadora = new Calculadora();

		let IMC = Calculadora.calcular(Pessoa);

		expect(IMC.getClassificacao()).toBe("abaixo do peso");
	});
});