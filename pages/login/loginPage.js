let loginCommands = {
    enterUserNameTextBox: function(){
        return this.setValue("@userNameTextBox", "aditya_prod");
    },
    enterPasswordTextBox: function(){
        return this.setValue("@passwordTextBox", "aditya@123");
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