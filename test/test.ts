import { Builder, WebDriver, By, Key } from 'selenium-webdriver';

import { describe, it, before, after, beforeEach } from 'mocha';

 

const TESTING_BROWSER = 'chrome';

const URL = 'http://localhost:4200';

 

describe('Test de login', async () => {

    let driver: WebDriver;

 

    before(async () => {

        driver = new Builder()

                    .forBrowser(TESTING_BROWSER)

                    .build();

    });

 

    after(async () => {

        await driver.quit();

    });

 

    beforeEach(async () => {

        await driver.get(URL);

        await driver.manage().setTimeouts({ implicit: 500 });

    });

 

    it('debería logearse', async () => {

        await driver.findElement(By.id('login')).click();

 

        await driver.sleep(500);

 

        const username = await driver.findElement(By.id('email'));

        const password = await driver.findElement(By.id('password'));

 

        await username.sendKeys('juan@lol.com');

        await password.sendKeys('pindonga', Key.RETURN);

 

        const pageTitle = await driver.getTitle();

        if (pageTitle === 'login') {

            return new Error('Inicio de sesión fallido');

        }

 

        return;

    });

 

});

 

describe('Test navegabilidad', async ()=>{

    let driver: WebDriver;

 

    before(async () => {

        driver = new Builder()

                    .forBrowser(TESTING_BROWSER)

                    .build();

    });

 

    after(async () => {

        await driver.quit();

    });

 

    beforeEach(async () => {

        await driver.get(URL);

        await driver.manage().setTimeouts({ implicit: 500 });

    });

 

    it('deberia navegar', async() =>{

        await driver.findElement(By.id('login')).click();

 

        await driver.sleep(500);

 

        await driver.findElement(By.id('register')).click();

 

        await driver.sleep(500);

    });

});

 

describe('Test navegabilidid', async()=>{

    let driver: WebDriver;

 

    before(async () => {

        driver = new Builder()

                    .forBrowser(TESTING_BROWSER)

                    .build();

    });

 

    after(async () => {

        await driver.quit();

    });

 

    beforeEach(async () => {

        await driver.get(URL);

        await driver.manage().setTimeouts({ implicit: 500 });

    });

 

    it('deberia cargar datos', async()=>{

        await driver.findElement(By.id('login')).click();

 

        await driver.sleep(500);

 

        const username = await driver.findElement(By.id('email'));

        const password = await driver.findElement(By.id('password'));

 

        await username.sendKeys('test@gmail.com');

        await password.sendKeys('pindonga', Key.RETURN);

 

        await driver.sleep(500);

        await driver.findElement(By.id('register')).click();

        const pageTitle = await driver.getTitle();

        if (pageTitle === 'register') {

            return new Error('cargaron los datos');

        }

 

        return;

    });

});