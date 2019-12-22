var HomePage = function (){

    this.createButton = element(by.id('bAdd'));
    this.editButton = element(by.id('bEdit'));
    this.deleteButton = element(by.id('bDelete'));
    this.selectRecord = element.all(by.repeater('employee in employees')).get(0); //selects the first record
}

module.exports = new HomePage();