import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';

export class PageObjectManager {
    readonly loginPage: LoginPage;
    readonly pimPage: PimPage;

    constructor(private page: Page) {
        this.loginPage = new LoginPage(this.page);
        this.pimPage = new PimPage();
    }
    
} 