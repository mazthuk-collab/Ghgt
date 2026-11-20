// Renders index.html to Mazin_Thaher_Profile.pdf (A4). Usage: node scripts/build-pdf.js
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(root, 'index.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: path.join(root, 'Mazin_Thaher_Profile.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
})();
