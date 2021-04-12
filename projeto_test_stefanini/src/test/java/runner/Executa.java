package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		// Mostrar o caminho das features
		features = {"src/test/resources/features/cadastrar_usuario.feature",
				"src/test/resources/features/validar_campo_nome.feature",
				"src/test/resources/features/validar_campo_email.feature",
				"src/test/resources/features/validar_campo_senha.feature",
				"src/test/resources/features/excluir_usuario.feature",
		},
		
		glue = "CadastrarUsuarios",				
		plugin = {"pretty", "html:target/report.html"},		
		monochrome = true,		
		snippets = SnippetType.CAMELCASE,		
		dryRun = false
		)

public class Executa {

}
