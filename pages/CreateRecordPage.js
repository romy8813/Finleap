var CreateNewRecord = function (){

    var firstName = element(by.model('selectedEmployee.firstName'));
    var lastName = element(by.model('selectedEmployee.lastName'));
    var startDate = element(by.model('selectedEmployee.startDate'));
    var emailId = element(by.model('selectedEmployee.email'));
    var cancelButton = element(by.xpath("//*[@class ='subButton bCancel']"));
    var addButton = element(by.buttonText('Add'));


    this.enterNewRecordDetails = function(){
        firstName.sendKeys('Rajesh');
        lastName.sendKeys('Sharma');
        startDate.sendKeys('2020-20-12');
        emailId.sendKeys('Rajesh8813@gmail.com');
    }

    this.clickCancelButton = function(){
    cancelButton.click();
    }
    this.clickAddButton = function(){
        addButton.click();
        }
}

module.exports = new CreateNewRecord();