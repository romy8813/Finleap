var loginPageTest = require('../pages/LoginPage')

describe('Login Page Test', function(){
it ('Enter valid credentials', function(){
browser.driver.manage().window().maximize();
loginPageTest.openLoginPage();
expect(loginPageTest.loginButtonText()).toEqual('submit');
loginPageTest.enterUserName('Luke');
loginPageTest.enterPassword('Skywalker');
loginPageTest.clickLoginButton();
});

});