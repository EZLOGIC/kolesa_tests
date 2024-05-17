exports.BasePage = class BasePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
    }
  
    async goto(link) {
      await this.page.goto(link);
    }
}