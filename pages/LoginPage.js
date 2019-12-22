var LoginPage = function (){

    var userNameInput = element(by.model('user.name'));
    var passwordInput = element(by.model('user.password'));
    var submitButton = $("[type= 'submit']");

    this.openLoginPage = function(){
      browser.get('https://cafetownsend-angular-rails.herokuapp.com/login')
    }
    this.enterUserName = function(name){
        userNameInput.sendKeys(name);
    }
    this.enterPassword = function(pswd){
        passwordInput.sendKeys(pswd);
    }
    this.clickLoginButton = function(){
        submitButton.click();
    }
    this.loginButtonText = function(){
       return submitButton.getText();
    }
}

module.exports = new LoginPage();