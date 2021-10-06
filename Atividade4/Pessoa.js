module.exports = class Pessoa{

	constructor(nome, idade){
		this.nome = nome;
		this.idade = idade;
	}

	getIdade(){
		return this.idade;
	}

	getNome(){
		return this.nome;
	}

}