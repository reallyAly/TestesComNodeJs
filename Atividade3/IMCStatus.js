module.exports = class IMCStatus{

	constructor(imc, classificacao){
		this.imc = imc;
		this.classificacao = classificacao;
	}

	getImc(){
		return this.imc;
	}

	getClassificacao(){
		return this.classificacao;
	}
}