package CadastrarUsuarios;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import utils.Utils;

import java.io.IOException;

import CadastrarUsuarios.CadastrarUsuarioPage;

public class CadastraUsuariosSteps {

	Utils util = new Utils();
	CadUsuariosElementos el = new CadUsuariosElementos();
	CadastrarUsuarioPage cadu = new CadastrarUsuarioPage();
	
	
	String nome,email,senha,url,navegador;
	
	

	@Dado("^que estou na tela de cadastro de usuarios$")
	public void queEstouNaTelaDeCadastroDeUsuarios() throws Throwable {
		url = "http://prova.stefanini-jgr.com.br/teste/qa/";
		navegador = "CHROME";
	    util.abrirNavegador(url, navegador);
	}

	@Quando("^eu preencher os campos de cadastro$")
	public void euPreencherOsCamposDeCadastro() throws Throwable {
		nome = "Joao da Silva";
		email = "joaosilva@teste.com";
		senha = "12345678";
		
		cadu.preencherDadosUsuario(nome, email, senha);
	}

	@Quando("^clicar no botao cadastrar$")
	public void clicarNoBotaoCadastrar() throws Throwable {
	   cadu.enviarCadastro();
	}

	@Entao("^o usuario e cadastrado com sucesso$")
	public void oUsuarioECadastradoComSucesso() throws Throwable {		
		util.evidencia("Cadastro com Sucesso");
	}

	@Quando("^eu clicar no botao Excluir$")
	public void euClicarNoBotaoExcluir() throws Throwable {
		nome = "Joao da Silva";
		email = "joaosilva@teste.com";
		senha = "12345678";
	
		cadu.preencherDadosUsuario(nome, email, senha);
		cadu.enviarCadastro();
	    cadu.excluirCadastro();
	}

	@Entao("^exclui o registro selecionado$")
	public void excluiORegistroSelecionado() throws Throwable {		
		util.evidencia("Cadastro com Sucesso");
	}

	@Quando("^eu nao preencher o campo email$")
	public void euNaoPreencherOCampoEmail() throws Throwable {
		nome = "Joao da Silva";
		email = "";
		senha = "12345678";
		
		cadu.preencherDadosUsuario(nome, email, senha);
		cadu.enviarCadastro();
		cadu.validamsg("O campo E-mail é obrigatório.");
	    
	}

	@Quando("^preencher o campo email com email invalido$")
	public void preencherOCampoEmailComEmailInvalido() throws Throwable {
		nome = "Joao da Silva";
		email = "joaosilvateste.com";
		senha = "12345678";
		
		cadu.preencherDadosUsuario(nome, email, senha);
		cadu.enviarCadastro();
		cadu.validamsg("Por favor, insira um e-mail válido.");
	   
	}

	@Entao("^nao permite o cadastramento$")
	public void naoPermiteOCadastramento() throws Throwable {		
		util.evidencia("Nao permite cadastramento");
	    
	}

	@Quando("^eu nao preencher o campo nome$")
	public void euNaoPreencherOCampoNome() throws Throwable {
		nome = "";
		email = "joaosilva@teste.com";
		senha = "12345678";
		
		cadu.preencherDadosUsuario(nome, email, senha);
		cadu.enviarCadastro();
		cadu.validamsg("O campo Nome é obrigatório.");
	    
	}

	@Quando("^preencher o campo nome com nome simples$")
	public void preencherOCampoNomeComNomeSimples() throws Throwable {
		nome = "Joao";
		email = "joaosilva@teste.com";
		senha = "12345678";
		
		cadu.preencherDadosUsuario(nome, email, senha);
		cadu.enviarCadastro();
		cadu.validamsg("Por favor, insira um nome completo.");
	    
	}

	@Quando("^eu nao preencher o campo senha$")
	public void euNaoPreencherOCampoSenha() throws Throwable {
		nome = "Joao da Silva";
		email = "joaosilva@teste.com";
		senha = "";
		
		cadu.preencherDadosUsuario(nome, email, senha);
		cadu.enviarCadastro();
		cadu.validamsg("O campo Senha é obrigatório.");
	    
	}

	@Quando("^preencher o campo senha com senha menor que 8 caracteres$")
	public void preencherOCampoSenhaComSenhaMenorQueCaracteres(int arg1) throws Throwable {
		nome = "Joao da Silva";
		email = "joaosilva@teste.com";
		senha = "1234567";
		
		cadu.preencherDadosUsuario(nome, email, senha);
		cadu.enviarCadastro();
		cadu.validamsg("A senha deve conter ao menos 8 caracteres.");
	    
	}

	@Before
	public void beforeCenario() {
		
	}
	
	@After
	public void afterCenario() throws IOException {
		util.fecharBrowser();
	}

}


