let loginCommands = {
    enterUserNameTextBox: function(){
        return this.setValue("@userNameTextBox", "");
    },
    enterPasswordTextBox: function(){
        return this.setValue("@passwordTextBox", "");
    },
    clickOnLoginButton: function(){
        return this.click("@loginButton");
    }
}


let loginPage = {
    elements: {
      userNameTextBox: '#Username',
      passwordTextBox: '#Password',
      loginButton: "button#loading",
    },
    commands: [loginCommands]
};
module.exports = loginPage;
