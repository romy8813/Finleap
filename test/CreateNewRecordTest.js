var CreateRecordTest = require('../pages/CreateRecordPage')

describe('Create New Record', function(){
it ('Enter details and click Add Button', function(){
    CreateRecordTest.enterNewRecordDetails();
    CreateRecordTest.clickAddButton();
});
it ('Enter details and click cancel Button', function(){
    CreateRecordTest.enterNewRecordDetails();
    CreateRecordTest.clickCancelButton();
});

});