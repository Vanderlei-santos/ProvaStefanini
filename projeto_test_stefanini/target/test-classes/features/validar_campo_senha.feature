#language: pt
#Author: Vanderlei dos Santos

@cmpsenha
Funcionalidade: Cadastro de usuario
	Cenario: Validar preenchimento do campo senha
  
    Dado que estou na tela de cadastro de usuarios
		Quando eu nao preencher o campo senha
		E preencher o campo senha com senha menor que 8 caracteres
		Entao nao permite o cadastramento