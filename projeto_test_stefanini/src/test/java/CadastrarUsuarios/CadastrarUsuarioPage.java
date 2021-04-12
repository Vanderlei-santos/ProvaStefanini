package CadastrarUsuarios;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.By.ByClassName;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import CadastrarUsuarios.CadUsuariosElementos;
import utils.Utils;

public class CadastrarUsuarioPage extends CadUsuariosElementos {
	
	public static WebDriver driver;
	
	Utils utils = new Utils();
	CadUsuariosElementos el = new CadUsuariosElementos();
		
	public void preencherDadosUsuario (String nome, String e_mail, String senha) throws IOException {
		PageFactory.initElements(utils.getDriver(), this);
		try {
			name.sendKeys(nome);
			email.sendKeys(e_mail);
			password.sendKeys(senha);
		} catch (Exception e) {
			Assert.fail("Não foi possível preencher os campos");
			utils.evidencia("Campos nao preenchidos");
		
		}
	}
	
	public void enviarCadastro () throws IOException, InterruptedException {
		PageFactory.initElements(utils.getDriver(), this);
		register.click();
//		Thread.sleep(6000);
//		JavascriptExecutor js = (JavascriptExecutor) driver;
//		js.executeScript("window.scrollBy(0, 200)");
	}
	
	public void validamsg(String msg) throws IOException {
		PageFactory.initElements(utils.getDriver(), this);
		tabela = driver.findElements(By.className("error"));
		for (WebElement linha : tabela) {
			try {
				if (linha.getText().contains(msg)) {
					Assert.assertTrue("Mensagem validada com sucesso", true);
				}
			} catch (Exception e) {
				Assert.fail("Mensagem não encontrada: " + msg);
				utils.evidencia("Mensagem Nao Encontrada");

			}
			
		}
		
	}
	
	public void excluirCadastro () throws IOException {
		PageFactory.initElements(utils.getDriver(), this);
		try {
			removeUser1.click();			
		} catch (Exception e) {
			Assert.fail("Não foi possível excluir o registro");
			utils.evidencia("Registro nao excluido");

		}
	}
	
	

}
