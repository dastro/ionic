const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();

describe('button: basic', () => {
  after(() => {
    return driver.quit();
  });

  it('navigates', () => {
    return driver.navigate().to('http://localhost:3333/src/components/button/test/basic.html');
  });
});