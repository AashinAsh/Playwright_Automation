import { test as base, expect } from '@playwright/test';
import { PageObjectManager } from '../managers/pageobjectmanager';


type MyFixtures = {
    pom: PageObjectManager;
};

export const test = base.extend<MyFixtures>({
    pom: async ({ page }, use) => {

        const pom = new PageObjectManager(page);

        await use(pom);
    }
});

export { expect };