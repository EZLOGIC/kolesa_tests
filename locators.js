   

exports.MainPageLocators = class MainPageLocators {
    constructor() {
        this.category = '[class="action-item"]';
        this.link = '[class="pager"] li';
        this.nextlink = '[class="arrows"]';
        this.car_links = '[class="a-card__info"] [class="a-card__link"]';
        this.carcass_menu = '[data-for="auto-car-body"]';
        this.transmission_menu = '[data-for="auto-car-transm"]';
        this.checkbox = 'ul:has([data-label="КПП"])';
        this.color_menu = '[data-for="auto-color"]';
        this.submit = '[data-test="search-form-submit"]';
    }
}

exports.CarPageLocators = class CarPageLocators {
    constructor() {
        this.model = '[itemprop="brand"]';
        this.city = 'dl:has-text("Город")';
        this.generation = 'dl:has([title="Поколение"])';
        this.carcass = 'dl:has([title="Кузов"])';
        this.engine_capacity = 'dl:has([title="Объем двигателя, л"])';
        this.transmission = 'dl:has-text("Коробка передач")';
        this.drive = 'dl:has([title="Привод"])';
        this.steering_wheel = 'dl:has([title="Руль"])';
        this.color = 'dl:has([title="Цвет"])';
        this.clearance = 'dl:has([title="Растаможен в Казахстане"])';
    }
}