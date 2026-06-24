import { Page } from "@playwright/test";


export class LoginPage {

    private page: Page;
    private txtUsername;
    private txtPassword;
    private btnLogin;

    constructor(page:Page){
        this.page = page;
        this.txtUsername = page.getByRole("textbox", {name: 'Username'});
        this.txtPassword = page.getByRole("textbox", {name: 'Password'});
        this.btnLogin = page.getByRole("button", {name: 'Login'});
    }

    async gotoLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    async validLogin(username:string, password:string) {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }
}