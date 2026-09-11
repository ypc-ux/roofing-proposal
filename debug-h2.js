// Quick debug: which H2 is H2[9]?
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const h2s = await page.locator('h2').all();
  for (let i = 0; i < h2s.length; i++) {
    const box = await h2s[i].boundingBox();
    if (box) {
      const center = box.x + box.width / 2;
      const offset = Math.round(Math.abs(center - 960));
      if (offset > 50) {
        const text = await h2s[i].textContent();
        const parent = await h2s[i].evaluate(el => {
          let p = el.parentElement;
          let chain = '';
          for (let j = 0; j < 5 && p; j++) {
            chain += `<${p.tagName.toLowerCase()} class="${p.className?.substring?.(0, 80) || ''}"> `;
            p = p.parentElement;
          }
          return chain;
        });
        console.log(`H2[${i}] "${text?.substring(0, 60)}" offset: ${offset}px x:${Math.round(box.x)} w:${Math.round(box.width)} parent: ${parent}`);
      }
    }
  }
  await browser.close();
})();
