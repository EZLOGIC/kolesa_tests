import { expect } from '@playwright/test';
const { BasePage } = require('./base-page');
const {CarPageLocators} = require('./locators');

exports.CarPage = class CarPage extends BasePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    const locators = new CarPageLocators();
    this.model = page.locator(locators.model);
    this.city = page.locator(locators.city);
    this.generation = page.locator(locators.generation);
    this.carcass = page.locator(locators.carcass);
    this.engine_capacity = page.locator(locators.engine_capacity);
    this.transmission = page.locator(locators.transmission);
    this.drive = page.locator(locators.drive);
    this.steering_wheel = page.locator(locators.steering_wheel);
    this.color = page.locator(locators.color);
    this.clearance = page.locator(locators.clearance);
  }

  async check_city(value) {
    const city = this.city;
    await expect(city).toContainText(value, { ignoreCase: true});
  }

  async check_generation(value) {
    const generation = this.generation;
    await expect(generation).toContainText(value, { ignoreCase: true});
  }
  
  async check_model(value) {
    const model = this.model;
    await expect(model).toContainText(value,  { ignoreCase: true});
  }

  async check_carcass(value) {
    const carcass = this.carcass;
    await expect(carcass).toContainText(value, { ignoreCase: true});
  }
  
  async check_engine_capacity(value) {
    const engine_capacity = this.engine_capacity;
    await expect(engine_capacity).toContainText(value, { ignoreCase: true});
  }

  async check_transmission(value) {
    const transmission = this.transmission;
    await expect(transmission).toContainText(value, { ignoreCase: true});
  }

  async check_drive(value) {
    const drive = this.drive;
    await expect(drive).toContainText(value, { ignoreCase: true});
  }

  async check_steering_wheel(value) {
    const steering_wheel = this.steering_wheel;
    await expect(steering_wheel).toContainText(value, { ignoreCase: true});
  }

  async check_color(value) {
    const car_color = this.color;
    await expect(car_color).toContainText(value, { ignoreCase: true});
  }

  async check_clearance(value) {
    const clearance = this.clearance;
    await expect(clearance).toContainText(value, { ignoreCase: true});
  }

  //check parameters
  async check_element(title, value) {
    if (title == "Поколение") {
      await this.check_generation(value);
    }
    else if (title == "Город") {
      await this.check_city(value);
    }
    else if (title == "Марка") {
      await this.check_model(value);
    }
    else if (title == "Кузов") {
      await this.check_carcass(value);
    }
    else if (title == "Объем двигателя, л") {
      await this.check_engine_capacity(value);
    }
    else if (title == "Коробка передач") {
      await this.check_transmission(value);
    }
    else if (title == "Привод") {
      await this.check_drive(value);
    }
    else if (title == "Руль") {
      await this.check_steering_wheel(value);
    }
    else if (title == "Цвет") {
      await this.check_color(value);
    }
    else if (title == "Растаможен в Казахстане") {
      await this.check_clearance(value);
    }
    else {
      console.log("Please choose another title to check")
    }
  }
};