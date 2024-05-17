const { expect } = require('@playwright/test');
const { BasePage } = require('./base-page');
const {MainPageLocators} = require('./locators');

exports.MainPage = class MainPage extends BasePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    const locators = new MainPageLocators();
    this.carlink_list = [];
    this.category = page.locator(locators.category);
    this.links = page.locator(locators.link);
    this.nextlink = page.locator(locators.nextlink);
    this.carcass_menu = page.locator(locators.carcass_menu);
    this.transmission_menu = page.locator(locators.transmission_menu);
    this.checkbox = page.locator(locators.checkbox);
    this.color_menu = page.locator(locators.color_menu);
    this.car_links = page.locator(locators.car_links);
    this.submit = page.locator(locators.submit);
  }

  async choose_light_cars(category) {
    await this.category.getByText(category).click()
  }

  async choose_city(city) {
    await this.page.getByRole('button', { name: city }).click();
  }

  //choose brand
  async choose_model(model) {
    await this.page.getByRole('button', { name: model }).click();
  }

  //open advanced search panel
  async choose_advanced_search() {
    await this.page.getByText("Расширенный поиск").click()
  }

  async choose_carcass(carcass) {
    await this.carcass_menu.click();
    await this.page.getByText(carcass).click()
  }

  async choose_transmission_menu() {
    await this.transmission_menu.click();
  }

  //choose transmission
  async choose_menu_parameter(transmission) {
    await this.checkbox.getByText(transmission).click()
  }

  async choose_color(color) {
    await this.color_menu.click();
    await this.page.getByText(color).click()
  }

  async submit_button() {
    await this.submit.click()
  }

  //choose pairwise parameters
  async choose_parameter(title, value) {
    if (title == "Категория") {
      await this.choose_light_cars(value);
      let advanced_search = this.page.getByText("Расширенный поиск");
      if (advanced_search !== null) {
        await this.choose_advanced_search();
      } else {}
    }
    else if (title == "Город") {
      await this.choose_city(value);
    }
    else if (title == "Марка") {
      await this.choose_model(value);
    }
    else if (title == "Кузов") {
      await this.choose_carcass(value);
    }
    else if (title == "Коробка передач") {
      await this.choose_transmission_menu();
      await this.choose_menu_parameter(value);
    }
    else if (title == "Цвет") {
      await this.choose_color(value);
    }
  }

  //store car cards links
  async add_car_links(mainlink) {
    for (const car_link of await this.car_links.all({ timeout: 5000 })) {
      let new_link = mainlink + (await car_link.getAttribute('href')).toString()
      if(this.carlink_list.indexOf(new_link)===-1) {
        this.carlink_list.push(new_link);
      }
    }
    console.log(this.carlink_list);
    return this.carlink_list;
  }

  //navigate pages
  async go_to_next_page() {
    await this.nextlink.getByText("следующая").click();
  }

  //parse car cards links
  async get_list_of_car_links(mainlink) {
    await this.add_car_links(mainlink);
    if (this.carlink_list.length >= 20) {
      var pages = Number(await this.links.getByRole('link').last().textContent())
      if (pages > 1) {
        await this.go_to_next_page();
      }
      if (pages == 2) {
        await this.add_car_links(mainlink);
      } else if (pages > 2) {
        for (let i=1; i < pages+1; i++) {
          await this.add_car_links(mainlink);
          if (i < pages) {
            await this.go_to_next_page();
          } else {} 
        }
      } else {}
    } else {}
    console.log(this.carlink_list.length)
    return this.carlink_list
  }
};