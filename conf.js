exports.config = {  
  directconnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',  
  specs: ['test/*Test.js'],  
  capabilities: {
    'browserName': 'chrome'
  },
  chromeDriver: 'C:/Users/princ/Downloads/chromedriver_win32.zip',
  framework: 'jasmine'
};