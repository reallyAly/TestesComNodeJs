let Calculadora = require("../Atividade3/Calculadora.js");
let Pessoa = require("../Atividade3/Pessoa.js");

describe("Calc", () => {
	let Calc = new Calculadora();

	test("Abaixo do peso", () => {
		let Pessoa1 = new Pessoa("Alysson Victor", 50, 1.70);

		let IMC = Calc.calcular(Pessoa1);

		expect(IMC.getClassificacao()).toBe("abaixo do peso");
	});
	test("Normal", () => {
		let Pessoa2 = new Pessoa("Alysson Victor", 50, 1.60);

		let IMC = Calc.calcular(Pessoa2);

		expect(IMC.getClassificacao()).toBe("normal");
	});
	test("Acima do peso", () => {
		let Pessoa3 = new Pessoa("Alysson Victor", 50, 1.40);

		let IMC = Calc.calcular(Pessoa3);

		expect(IMC.getClassificacao()).toBe("acima do peso");
	});
	test("Obeso", () => {
		let Pessoa4 = new Pessoa("Alysson Victor", 120, 1.80);

		let IMC = Calc.calcular(Pessoa4);

		expect(IMC.getClassificacao()).toBe("obeso");
	});
});