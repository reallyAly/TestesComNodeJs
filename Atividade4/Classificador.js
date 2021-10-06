module.exports = class Classificador{

	definirFaixaEtaria(p){
		if(p.getIdade() < 0 || p.getIdade() >= 110){
			throw "Os valores definidos em pessoa são invalidos";
		}

		let idade = p.getIdade();
		let tipo = "";

		if(idade <= 11){
			tipo = "Criança";
		}else if(idade <= 18){
			tipo = "Adolescente";
		}else if(idade <= 59){
			tipo = "Adulto";
		}else{
			tipo = "Idoso";
		}

		return p.getNome()+" é "+tipo;
	}

}