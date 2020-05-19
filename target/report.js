$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature%20FIle/SheinShopping.feature");
formatter.feature({
  "name": "Shein Shopping",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Page 1",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinition.launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter URL",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinition.enter_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search for the product",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinition.search_for_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search and go to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinition.click_search_and_go_to_next_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv data-scici\u003d\"Search~~EditSearch~~1~~Cross-Wrap-Geo-Crop-Top~~~~0~~0\" class\u003d\"search-btn she-btn-black j-search-btn\"\u003e...\u003c/div\u003e is not clickable at point (982, 126). Other element would receive the click: \u003cdiv class\u003d\"coupon-mask she-scroll-hide\" style\u003d\"\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VAIO\u0027, ip: \u0027192.168.43.20\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\Aishu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56481}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 771d20d4f55b8f15bf4e16a8f4f60f47\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.global.BaseClass.click(BaseClass.java:26)\r\n\tat com.steps.StepsDefinition.click_search_and_go_to_next_page(StepsDefinition.java:32)\r\n\tat ✽.click search and go to next page(file:src/test/resources/Feature%20FIle/SheinShopping.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Page 2",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on the desired product",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinition.click_on_the_desired_product()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027/Cross-Wrap-Crop-Top-p-1068481-cat-1738.html?scici\u003dSearch~~EditSearch~~1~~Cross-Wrap-Geo-Crop-Top~~~~0~~0\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VAIO\u0027, ip: \u0027192.168.43.20\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\Aishu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56481}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 771d20d4f55b8f15bf4e16a8f4f60f47\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/Cross-Wrap-Crop-Top-p-1068481-cat-1738.html?scici\u003dSearch~~EditSearch~~1~~Cross-Wrap-Geo-Crop-Top~~~~0~~0\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.steps.StepsDefinition.click_on_the_desired_product(StepsDefinition.java:38)\r\n\tat ✽.click on the desired product(file:src/test/resources/Feature%20FIle/SheinShopping.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Page 3",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "window handle",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinition.window_handle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on add to bag",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinition.click_on_add_to_bag()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VAIO\u0027, ip: \u0027192.168.43.20\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\Aishu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56481}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 771d20d4f55b8f15bf4e16a8f4f60f47\n*** Element info: {Using\u003dxpath, value\u003d(//span[@class\u003d\u0027inner\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.steps.StepsDefinition.click_on_add_to_bag(StepsDefinition.java:55)\r\n\tat ✽.click on add to bag(file:src/test/resources/Feature%20FIle/SheinShopping.feature:14)\r\n",
  "status": "failed"
});
});