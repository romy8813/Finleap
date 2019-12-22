describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('https://cafetownsend-angular-rails.herokuapp.com/login'); 
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  });