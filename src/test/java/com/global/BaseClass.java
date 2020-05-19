package com.global;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static WebDriver driver;

	public static WebDriver launchdriver() {
		WebDriverManager.chromedriver().setup();
		return driver = new ChromeDriver();
	}

	public static void loadurl(String Url) {
		driver.get(Url);
	}

	public static void typevalue(WebElement element,String value ) {
		element.sendKeys(value);
	}

	public static void click(WebElement element) {
		element.click();
	}
}
