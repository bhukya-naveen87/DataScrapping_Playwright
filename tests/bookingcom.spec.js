const {test} = require('@playwright/test');
const { data } = require('../booking.com.data');

test("open page by browser", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(data.mainurl)
    await page.pause()

})
test("open page by page", async ({page}) => {
    await page.goto(data.mainurl)
    await page.pause()

})
test.only("open page by page only", async ({page}) => {
    await page.goto(data.mainurl)
    await page.waitForTimeout(3000);
    await page.locator('.a83ed08757.c21c56c305.f38b6daa18.d691166b09.ab98298258.f4552b6561').click();
    await page.pause()

})