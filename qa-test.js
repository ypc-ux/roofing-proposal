// Playwright QA v2 — checks H2 centering, pricing cards, all sections
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const results = [];
  const add = (test, pass, detail) => {
    results.push({ test, pass, detail });
    console.log(`${pass ? '✅' : '❌'} ${test} — ${detail}`);
  };

  for (const vp of [
    { w: 1920, h: 1080, name: 'Desktop 1920' },
    { w: 1440, h: 900, name: 'Laptop 1440' },
    { w: 375, h: 812, name: 'Mobile 375' },
  ]) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    // 1. H1 CENTERING
    const h1Box = await page.locator('h1').first().boundingBox();
    if (h1Box) {
      const offset = Math.abs((h1Box.x + h1Box.width / 2) - vp.w / 2);
      add(`[${vp.name}] H1 centered`, offset < vp.w * 0.05, `offset: ${Math.round(offset)}px`);
    }

    // 2. H2 CENTERING — every h2 must be within 5% of center
    const h2s = await page.locator('h2').all();
    let h2AllCentered = true;
    let h2Detail = '';
    for (let i = 0; i < h2s.length; i++) {
      const box = await h2s[i].boundingBox();
      if (box) {
        const center = box.x + box.width / 2;
        const offset = Math.abs(center - vp.w / 2);
        if (offset > vp.w * 0.08) {
          h2AllCentered = false;
          h2Detail = `H2[${i}] offset: ${Math.round(offset)}px`;
        }
      }
    }
    add(`[${vp.name}] All H2s centered`, h2AllCentered, h2Detail || `checked ${h2s.length} H2s`);

    // 3. PRICING CARD CENTERING
    const priceCards = await page.locator('.glow-card.p-10').all();
    if (priceCards.length >= 2) {
      const b1 = await priceCards[0].boundingBox();
      const b2 = await priceCards[1].boundingBox();
      if (b1 && b2) {
        const gridCenter = (b1.x + b1.width + b2.x) / 2;
        const offset = Math.abs(gridCenter - vp.w / 2);
        add(`[${vp.name}] Pricing grid centered`, offset < vp.w * 0.05, `offset: ${Math.round(offset)}px`);
        const heightDiff = Math.abs(b1.height - b2.height);
        add(`[${vp.name}] Pricing equal height`, heightDiff < 10, `diff: ${Math.round(heightDiff)}px`);
      }
    }

    // 4. BRAND
    const bodyText = await page.locator('body').textContent();
    add(`[${vp.name}] Julius Young III present`, bodyText.includes('Julius Young III'), '');
    add(`[${vp.name}] No JBuilds`, !bodyText.includes('JBuilds'), '');

    // 5. CTA VISIBLE
    const cta = page.locator('.cta-pulse').first();
    if (await cta.count() > 0) {
      const bg = await cta.evaluate(el => getComputedStyle(el).backgroundColor);
      add(`[${vp.name}] CTA visible`, bg !== 'rgba(0, 0, 0, 0)', `bg: ${bg}`);
    }

    // 6. NO BROKEN CLASSES
    const broken = await page.evaluate(() =>
      document.querySelectorAll('[class*="bg-#"], [class*="text-#"], [class*="border-#"]').length
    );
    add(`[${vp.name}] No broken Tailwind`, broken === 0, `${broken} broken`);

    // Screenshot
    await page.screenshot({ path: `qa-v2-${vp.name.replace(/\s/g, '-')}.png` });
    await page.close();
  }

  const failed = results.filter(r => !r.pass);
  console.log(`\n${'='.repeat(50)}`);
  console.log(`RESULTS: ${results.length - failed.length}/${results.length} passed, ${failed.length} failed`);
  if (failed.length > 0) {
    failed.forEach(f => console.log(`  ❌ ${f.test}: ${f.detail}`));
  }
  await browser.close();
})();

