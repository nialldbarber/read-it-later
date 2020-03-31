const puppeteer = require('puppeteer');

/**
 * Get <title> from url provided
 *
 * @param {*} url
 */
async function getTitleFromUrl(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const pageTitle = await page.title();
  return pageTitle;
}

module.exports = getTitleFromUrl;
