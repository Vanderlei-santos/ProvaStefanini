#language: pt
#Author: Vanderlei dos Santos

@cmpnome
Funcionalidade: Cadastro de usuario
	Cenario:  Validar preenchimento do campo nome
  
    Dado que estou na tela de cadastro de usuarios
		Quando eu nao preencher o campo nome
		E preencher o campo nome com nome simples
		Entao nao permite o cadastramento