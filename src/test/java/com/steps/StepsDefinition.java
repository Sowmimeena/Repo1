package com.steps;

import java.util.Set;

import org.openqa.selenium.By;

import com.global.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepsDefinition extends BaseClass {
	@Given("launch chrome browser")
	public void launch_chrome_browser() {
	    launchdriver();
	}

	@Given("enter URL")
	public void enter_URL() {
	    driver.get("https://www.shein.in/");
	}

	@When("search for the product")
	public void search_for_the_product() throws InterruptedException {
		Thread.sleep(4000);
	    typevalue(driver.findElement(By.xpath("//input[@type='search']")), "Cross-Wrap-Geo-Crop-Top");
	}

	@Then("click search and go to next page")
	public void click_search_and_go_to_next_page() {
	    click(driver.findElement(By.xpath("//div[@class='search-btn she-btn-black j-search-btn']")));
	}
	
	@When("click on the desired product")
	public void click_on_the_desired_product() throws InterruptedException {
	    Thread.sleep(4000);
	    click(driver.findElement(By.xpath("//a[@href='/Cross-Wrap-Crop-Top-p-1068481-cat-1738.html?scici=Search~~EditSearch~~1~~Cross-Wrap-Geo-Crop-Top~~~~0~~0']")));
	}
	
	@Given("window handle")
	public void window_handle() {
	   String pwid = driver.getWindowHandle();
	   Set<String> allid = driver.getWindowHandles();
	   for(String x:allid) {
		   if(!pwid.equals(allid)) {
			   driver.switchTo().window(x);
		   }
	   }
	}

	@When("click on add to bag")
	public void click_on_add_to_bag() throws InterruptedException {
		Thread.sleep(4000);
	    click(driver.findElement(By.xpath("(//span[@class='inner'])[1]")));//size
	    click(driver.findElement(By.xpath("(//button[@class='she-btn-black she-btn-xl'])[1]")));
	}
}
