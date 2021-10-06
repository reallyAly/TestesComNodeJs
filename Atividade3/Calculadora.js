let IMCStatus = require("./IMCStatus.js");

module.exports = class Calculadora{
	
	calcular(p){
        let peso = p.getPeso();
        let altura = p.getAltura();

        if(peso <= 0 || altura <= 0){
            throw "Os valores inseridos são inválidos";
        }

		let classificacao = "";
		let IMC = peso / (altura * altura);

		if(IMC < 18.5)
            classificacao = "abaixo do peso";
        else if(IMC < 25)
            classificacao = "normal";
        else if(IMC < 30)
            classificacao = "acima do peso";
        else 
            classificacao = "obeso";

        return new IMCStatus(IMC, classificacao);

	}

}