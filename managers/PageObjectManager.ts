import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';

export class PageObjectManager {
    constructor(private page: Page) {}

    readonly loginPage = new LoginPage(this.page);
    readonly pimPage = new PimPage(this.page);
    
} 