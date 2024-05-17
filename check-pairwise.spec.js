const { test } = require('@playwright/test');
const { MainPage } = require('./main-page');
const { CarPage } = require('./car-page');
import { data } from './test_data.json';

for (const param of data) {
  test(`testing with ${param}`, async ({ page }) => {
    const mainlink = 'https://kolesa.kz';
    const main = new MainPage(page);
    const car = new CarPage(page);
    await main.goto(mainlink)
    //choose pairwise parameters
    for (let element of param) {
      var title = element[0];
      var value = element[1];
      await main.choose_parameter(title, value);
    }
    //search results
    await main.submit_button();
    //parse car cards links 
    const links = await main.get_list_of_car_links(mainlink, { timeout: 10000 });
    //check results correctness
    for (let link of links) {
      await main.goto(link);
      for (let element of param.slice(1)) {
        var title = element[0];
        var value = element[1];
        await car.check_element(title, value);
      }
    }
  });
}