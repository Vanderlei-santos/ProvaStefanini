$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cadastrar_usuario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Vanderlei dos Santos"
    }
  ],
  "line": 5,
  "name": "Cadastro de usuario",
  "description": "",
  "id": "cadastro-de-usuario",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@cadastra"
    }
  ]
});
formatter.before({
  "duration": 11036100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Realizar cadastro de novo usuario",
  "description": "",
  "id": "cadastro-de-usuario;realizar-cadastro-de-novo-usuario",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "que estou na tela de cadastro de usuarios",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "eu preencher os campos de cadastro",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "o usuario e cadastrado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastraUsuariosSteps.queEstouNaTelaDeCadastroDeUsuarios()"
});
formatter.result({
  "duration": 18670775300,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.euPreencherOsCamposDeCadastro()"
});
formatter.result({
  "duration": 739542700,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "duration": 117232200,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.oUsuarioECadastradoComSucesso()"
});
formatter.result({
  "duration": 797161600,
  "status": "passed"
});
formatter.after({
  "duration": 1602405000,
  "status": "passed"
});
formatter.uri("src/test/resources/features/excluir_usuario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Vanderlei dos Santos"
    }
  ],
  "line": 5,
  "name": "Excluir usuario",
  "description": "",
  "id": "excluir-usuario",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@exclui"
    }
  ]
});
formatter.before({
  "duration": 70900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Efetuar a exclusao de um usuario",
  "description": "",
  "id": "excluir-usuario;efetuar-a-exclusao-de-um-usuario",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "que estou na tela de cadastro de usuarios",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "eu clicar no botao Excluir",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "exclui o registro selecionado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastraUsuariosSteps.queEstouNaTelaDeCadastroDeUsuarios()"
});
formatter.result({
  "duration": 6121013900,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.euClicarNoBotaoExcluir()"
});
formatter.result({
  "duration": 660895300,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.excluiORegistroSelecionado()"
});
formatter.result({
  "duration": 514459900,
  "status": "passed"
});
formatter.after({
  "duration": 1207490200,
  "status": "passed"
});
formatter.uri("src/test/resources/features/validar_campo_email.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Vanderlei dos Santos"
    }
  ],
  "line": 5,
  "name": "Cadastro de usuario",
  "description": "",
  "id": "cadastro-de-usuario",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@cmpemail"
    }
  ]
});
formatter.before({
  "duration": 87200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validar preenchimento do campo email",
  "description": "",
  "id": "cadastro-de-usuario;validar-preenchimento-do-campo-email",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "que estou na tela de cadastro de usuarios",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "eu nao preencher o campo email",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "preencher o campo email com email invalido",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "nao permite o cadastramento",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastraUsuariosSteps.queEstouNaTelaDeCadastroDeUsuarios()"
});
formatter.result({
  "duration": 5928970000,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.euNaoPreencherOCampoEmail()"
});
formatter.result({
  "duration": 499092000,
  "error_message": "java.lang.NullPointerException\r\n\tat CadastrarUsuarios.CadastrarUsuarioPage.validamsg(CadastrarUsuarioPage.java:49)\r\n\tat CadastrarUsuarios.CadastraUsuariosSteps.euNaoPreencherOCampoEmail(CadastraUsuariosSteps.java:76)\r\n\tat ✽.Quando eu nao preencher o campo email(src/test/resources/features/validar_campo_email.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.preencherOCampoEmailComEmailInvalido()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastraUsuariosSteps.naoPermiteOCadastramento()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1288670100,
  "status": "passed"
});
formatter.uri("src/test/resources/features/validar_campo_nome.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Vanderlei dos Santos"
    }
  ],
  "line": 5,
  "name": "Cadastro de usuario",
  "description": "",
  "id": "cadastro-de-usuario",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@cmpnome"
    }
  ]
});
formatter.before({
  "duration": 62300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validar preenchimento do campo nome",
  "description": "",
  "id": "cadastro-de-usuario;validar-preenchimento-do-campo-nome",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "que estou na tela de cadastro de usuarios",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "eu nao preencher o campo nome",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "preencher o campo nome com nome simples",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "nao permite o cadastramento",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastraUsuariosSteps.queEstouNaTelaDeCadastroDeUsuarios()"
});
formatter.result({
  "duration": 5474806800,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.euNaoPreencherOCampoNome()"
});
formatter.result({
  "duration": 482869100,
  "error_message": "java.lang.NullPointerException\r\n\tat CadastrarUsuarios.CadastrarUsuarioPage.validamsg(CadastrarUsuarioPage.java:49)\r\n\tat CadastrarUsuarios.CadastraUsuariosSteps.euNaoPreencherOCampoNome(CadastraUsuariosSteps.java:106)\r\n\tat ✽.Quando eu nao preencher o campo nome(src/test/resources/features/validar_campo_nome.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.preencherOCampoNomeComNomeSimples()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastraUsuariosSteps.naoPermiteOCadastramento()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1507676500,
  "status": "passed"
});
formatter.uri("src/test/resources/features/validar_campo_senha.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Vanderlei dos Santos"
    }
  ],
  "line": 5,
  "name": "Cadastro de usuario",
  "description": "",
  "id": "cadastro-de-usuario",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@cmpsenha"
    }
  ]
});
formatter.before({
  "duration": 32000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validar preenchimento do campo senha",
  "description": "",
  "id": "cadastro-de-usuario;validar-preenchimento-do-campo-senha",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "que estou na tela de cadastro de usuarios",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "eu nao preencher o campo senha",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "preencher o campo senha com senha menor que 8 caracteres",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "nao permite o cadastramento",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastraUsuariosSteps.queEstouNaTelaDeCadastroDeUsuarios()"
});
formatter.result({
  "duration": 4885370900,
  "status": "passed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.euNaoPreencherOCampoSenha()"
});
formatter.result({
  "duration": 887434400,
  "error_message": "java.lang.NullPointerException\r\n\tat CadastrarUsuarios.CadastrarUsuarioPage.validamsg(CadastrarUsuarioPage.java:49)\r\n\tat CadastrarUsuarios.CadastraUsuariosSteps.euNaoPreencherOCampoSenha(CadastraUsuariosSteps.java:130)\r\n\tat ✽.Quando eu nao preencher o campo senha(src/test/resources/features/validar_campo_senha.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CadastraUsuariosSteps.preencherOCampoSenhaComSenhaMenorQueCaracteres(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastraUsuariosSteps.naoPermiteOCadastramento()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1251231100,
  "status": "passed"
});
});