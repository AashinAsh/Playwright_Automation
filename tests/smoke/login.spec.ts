import { test, expect } from '../../fixtures/pageFixtures';


test.describe('Login Test', ()=>{

    
    test('Valid Login', async({pom})=>{
        await pom.loginPage.gotoLoginPage();
        await pom.loginPage.validLogin('Admin', 'admin123');
    });

});