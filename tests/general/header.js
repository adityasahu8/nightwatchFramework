
let loginPage, homePage;

module.exports = {
    '@tags' : ['login'],
    before: function(browser){
      loginPage = browser.page.login.loginPage();

      browser
        .url('http://admin.avalara.com')
        .pause(5000); 
        
    },
    
    after: function(browser){
      browser.end();
    },

    'Verify home page' : function (browser) {
      loginPage
        .enterUserNameTextBox()
        .enterPasswordTextBox()
        .clickOnLoginButton()
        .pause(9000)
        .assert.title("AvaTax");
    }
  };