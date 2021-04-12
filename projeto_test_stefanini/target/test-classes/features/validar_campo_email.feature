#language: pt
#Author: Vanderlei dos Santos

@cmpemail
Funcionalidade: Cadastro de usuario
	Cenario: Validar preenchimento do campo email
  
    Dado que estou na tela de cadastro de usuarios
    Quando eu nao preencher o campo email
		E preencher o campo email com email invalido
		Entao nao permite o cadastramento