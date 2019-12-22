var HomePageTest = require('../pages/HomePage')

describe('Home Page Test', function(){
it ('Check Home Page Button Status at Start', function(){
    expect(HomePageTest.createButton().isEnabled()).toBeTruthy();
    expect(HomePageTest.deleteButton().isEnabled()).toBeFalsy();
    expect(HomePageTest.editButton().isEnabled()).toBeFalsy();
});
it ('Check Edit and Delete button are enabled', function(){
    HomePageTest.selectRecord().click();
    expect(HomePageTest.deleteButton().isEnabled()).toBeTruthy();
    expect(HomePageTest.editButton().isEnabled()).toBeTruthy();
});
it ('Delete a record', function(){
    HomePageTest.selectRecord().click();
    HomePageTest.deleteButton.click();
    expect(HomePageTest.editButton().isEnabled()).toBeFalsy();  //return to home so delete button is disbled
});
});