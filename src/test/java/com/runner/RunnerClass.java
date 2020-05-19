package com.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src\\test\\resources\\Feature FIle\\SheinShopping.feature"}, glue= {"com.steps"}, dryRun=false,plugin= {"pretty","html:target" ,"junit:src\\test\\resources\\Reports\\Shein.xml"})

public class RunnerClass {
	
}
