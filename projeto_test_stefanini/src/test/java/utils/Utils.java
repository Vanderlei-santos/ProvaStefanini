package utils;

import static org.junit.Assert.assertEquals;

//import static org.junit.Assert.*;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

//import junit.framework.Assert;

//import junit.framework.Assert;

public class Utils {
	
	
	public static WebDriver driver;

	/**
	 * Abrir o navegador e o site
	 * 
	 * @author Vanderlei dos Santos
	 * @param Abrir site
	 * @throws IOException
	 */

	public void abrirNavegador(String url, String navegador) throws IOException {
		switch (navegador.toUpperCase()) {

		case "CHROME":
			System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
			driver = new ChromeDriver();
			driver.get(url);
			driver.manage().window().maximize();
		break;
		case"FIREFOX":
			System.setProperty("webdriver.gecko.driver", "./Driver/geckodriver.exe");
			driver = new FirefoxDriver();
			driver.get(url);
			driver.manage().window().maximize();
		break;		

		default:
		Assert.assertTrue("Utilize os navegadores 'CHROME' ou 'FIREFOX'.", false);
		break;
		}
	}
	
	/**
	 * Capturar Evidencia
	 * 
	 * @author Vanderlei dos Santos
	 * @param evidencia
	 */
	public void evidencia(String nome) throws IOException {

		TakesScreenshot scrShot = ((TakesScreenshot) driver);
		File SrcFile = scrShot.getScreenshotAs(OutputType.FILE);
		File DestFile = new File("./src/prints/" + nome + ".png");
		FileUtils.copyFile(SrcFile, DestFile);
	}

	/**
	 * Fechar o browser
	 * 
	 * @author Vanderlei dos Santos
	 * @param fechar
	 * @throws IOException
	 */

	public void fecharBrowser() throws IOException {
		try {
			driver.quit();
		} catch (Exception e) {
			Assert.fail(LocalDateTime.now() + " --erro ao tentar fechar o browser");
			evidencia("Fecha Navegador");

		}
	}

	
	/**
	 * Selecionar Combo por posicao
	 * 
	 * @author Vanderlei dos Santos
	 * @param elemento
	 * @param posicao
	 */
	public void selecionarComboPosicao(By elemento, int posicao) {
		try {
			WebElement webElement = driver.findElement(elemento);
			Select combo = new Select(webElement);
			combo.selectByIndex(posicao);
		} catch (NoSuchElementException e) {
			Assert.fail(LocalDateTime.now() + " Erro ao selecionar o texto");
		}
	}

	/**
	 * Selecionar Combo por texto
	 * 
	 * @author Vanderlei dos Santos
	 * @param elemento
	 * @param posicao
	 */
	public void selecionarComboTexto(By elemento, String texto) {
		try {
			WebElement webElement = driver.findElement(elemento);
			Select combo = new Select(webElement);
			combo.selectByVisibleText(texto);
			;
		} catch (NoSuchElementException e) {
			Assert.fail(LocalDateTime.now() + " Erro ao selecionar o texto");
		}
	}
	
	public static WebDriver getDriver( ) {
		return driver;
	}

	
}
